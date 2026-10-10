/** Longest step a single frame may simulate; hides tab switches and hitches. */
const MAX_STEP = 1 / 20;
/**
 * One `requestAnimationFrame` loop shared by the cursor and the WebGL layer,
 * so the SVG Dandiya and the shader trail are always updated in the same frame.
 */
export class Ticker {
    /** Simulated seconds since the first frame (never jumps after a pause). */
    time = 0;
    /** Unclamped duration of the last frame, for FPS measurement. */
    rawDt = 0;
    subscribers = [];
    raf = 0;
    last = 0;
    running = false;
    /** Subscribers run in ascending `order`. Returns an unsubscribe function. */
    add(fn, order = 0) {
        const entry = { fn, order };
        this.subscribers = [...this.subscribers, entry].sort((a, b) => a.order - b.order);
        return () => {
            this.subscribers = this.subscribers.filter((s) => s !== entry);
        };
    }
    start() {
        if (this.running)
            return;
        this.running = true;
        this.last = performance.now();
        this.raf = requestAnimationFrame(this.frame);
    }
    stop() {
        this.running = false;
        cancelAnimationFrame(this.raf);
    }
    frame = (now) => {
        if (!this.running)
            return;
        this.raf = requestAnimationFrame(this.frame);
        const raw = (now - this.last) / 1000;
        this.last = now;
        if (raw <= 0)
            return;
        this.rawDt = raw;
        const dt = Math.min(raw, MAX_STEP);
        this.time += dt;
        // Iterate a snapshot: a subscriber may unsubscribe while we are running.
        const subscribers = this.subscribers;
        for (let i = 0; i < subscribers.length; i++) {
            subscribers[i].fn(dt, this.time);
        }
    };
}
