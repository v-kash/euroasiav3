import { DEFAULT_SETTINGS, } from "../config";
import { PointerTracker } from "./pointer";
import { Ticker } from "./ticker";
/** Subscriber order inside a frame: input first, then DOM, then pixels. */
export const TICK_ORDER = {
    pointer: 0,
    cursor: 10,
    diya: 15,
    render: 20,
    debug: 30,
};
/**
 * The imperative half of the demo. React renders the scene once; everything
 * that changes per frame lives here and is driven by a single ticker, so no
 * component re-renders while the cursor moves.
 */
export class NavratriRuntime {
    ticker = new Ticker();
    pointer = new PointerTracker();
    /** One anchor per lamp on the page, in the order they mounted. */
    diyas = [];
    /**
     * The rows of the viewport the mandala may be drawn in — for a host whose
     * see-through canvas covers more than the section the mandala belongs to.
     * `null` means all of it.
     */
    mandalaBand = null;
    stats = {
        fps: 0,
        frameMs: 0,
        particles: 0,
        capacity: 0,
        dpr: 1,
        tier: "—",
        api: "—",
        renderer: "—",
        trail: "—",
    };
    settings = DEFAULT_SETTINGS;
    reducedMotion = false;
    coarsePointer = false;
    /**
     * Bumped whenever something that affects a *still* frame changes (settings,
     * layout, the diya moving). Under reduced motion the WebGL layer redraws
     * only when this changes.
     */
    revision = 0;
    mounts = 0;
    offPointer = null;
    /** Start listening and ticking. Returns the matching teardown. */
    mount() {
        this.mounts++;
        if (this.mounts === 1) {
            this.pointer.attach();
            this.offPointer = this.ticker.add((dt) => this.pointer.update(dt), TICK_ORDER.pointer);
            this.ticker.start();
        }
        return () => {
            this.mounts--;
            if (this.mounts > 0)
                return;
            this.ticker.stop();
            this.offPointer?.();
            this.offPointer = null;
            this.pointer.detach();
        };
    }
    setSettings(settings) {
        this.settings = settings;
        this.pointer.lag = settings.motion;
        this.revision++;
    }
    setEnvironment(env) {
        this.reducedMotion = env.reducedMotion;
        this.coarsePointer = env.coarsePointer;
        this.pointer.interpolate = !env.reducedMotion;
        this.revision++;
    }
    /** Register a lamp. The anchor returned is handed back to the calls below. */
    addDiya() {
        const diya = { x: 0, y: 0, size: 0, intensity: 1 };
        this.diyas.push(diya);
        return diya;
    }
    removeDiya(diya) {
        const index = this.diyas.indexOf(diya);
        if (index === -1)
            return;
        this.diyas.splice(index, 1);
        this.revision++;
    }
    setDiyaAnchor(diya, x, y, size) {
        if (diya.x === x && diya.y === y && diya.size === size)
            return;
        diya.x = x;
        diya.y = y;
        diya.size = size;
        this.revision++;
    }
    setDiyaIntensity(diya, intensity) {
        diya.intensity = intensity;
    }
    setMandalaBand(band) {
        const current = this.mandalaBand;
        if (band === current)
            return;
        if (band && current && band.top === current.top && band.bottom === current.bottom)
            return;
        this.mandalaBand = band;
        this.revision++;
    }
    /** Published by the WebGL layer for the debug overlay. */
    updateStats(patch) {
        Object.assign(this.stats, patch);
    }
    invalidate() {
        this.revision++;
    }
}
