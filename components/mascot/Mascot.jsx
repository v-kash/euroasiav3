"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

/*
  Euroasia's mascot: a sky-blue blob with a sprout on its head.
  Drawn in code, so it stays sharp at any size and needs no image files.

  <Mascot mood="idle" className="h-20 w-20" />

  Moods: idle · hello · listening · thinking · confused · celebrate
  - idle: breathes, blinks, and its eyes follow the mouse.
  - listening: looks at the form field that has focus.
  Visitors who prefer reduced motion get a still face for each mood.
  It's decorative (aria-hidden); the form itself announces what happened.
*/

const NAVY = "#002152";
const SKY = "#82c8e5";
const LEAF = "#10B981";
// Green, not navy, so the stem still shows on navy backgrounds.
const STEM = "#0E9F6E";
const BLUSH = "#FF8FAB";

const BODY_PATH =
  "M60 25 C84 25 100 42 101 64 C102 86 92 106 60 106 C28 106 18 86 19 64 C20 42 36 25 60 25 Z";

const SETTLE = { duration: 0.35, ease: "easeOut" };
const SPRING = { type: "spring", stiffness: 180, damping: 14 };
const breathe = (duration) => ({
  duration,
  repeat: Infinity,
  ease: "easeInOut",
});
const CELEBRATE_TIMING = {
  duration: 0.9,
  times: [0, 0.4, 0.72, 1],
  ease: "easeOut",
  repeat: Infinity,
  repeatDelay: 0.3,
};

// Every mood sets all four values, so nothing stays stuck mid-loop on a switch.
const BODY = {
  idle: {
    y: 0,
    rotate: 0,
    scaleX: [1, 0.985, 1],
    scaleY: [1, 1.03, 1],
    transition: {
      y: SETTLE,
      rotate: SETTLE,
      scaleX: breathe(3.2),
      scaleY: breathe(3.2),
    },
  },
  hello: {
    y: [0, -14, 0, -5, 0],
    rotate: [0, -5, 4, -2, 0],
    scaleX: [1, 0.96, 1.06, 0.98, 1],
    scaleY: [1, 1.05, 0.92, 1.02, 1],
    transition: { duration: 1.1, ease: "easeOut", times: [0, 0.3, 0.55, 0.78, 1] },
  },
  listening: {
    y: 0,
    rotate: 5,
    scaleX: [1, 0.99, 1],
    scaleY: [1, 1.025, 1],
    transition: {
      y: SETTLE,
      rotate: SPRING,
      scaleX: breathe(2.4),
      scaleY: breathe(2.4),
    },
  },
  thinking: {
    y: [0, -3, 0],
    rotate: -5,
    scaleX: 1,
    scaleY: 1,
    transition: { y: breathe(1.3), rotate: SPRING, default: SETTLE },
  },
  confused: {
    y: 0,
    rotate: [0, -11, -5, -8],
    scaleX: 1,
    scaleY: 1,
    transition: { rotate: { duration: 0.7, ease: "easeOut" }, default: SETTLE },
  },
  celebrate: {
    y: [0, -16, 0, 0],
    rotate: [0, -6, 5, 0],
    scaleX: [1, 0.95, 1.08, 1],
    scaleY: [1, 1.06, 0.9, 1],
    transition: CELEBRATE_TIMING,
  },
};

const SPROUT = {
  idle: { rotate: [-4, 4, -4], transition: breathe(4) },
  hello: {
    rotate: [0, -20, 16, -8, 0],
    transition: { duration: 1.1, ease: "easeOut" },
  },
  listening: { rotate: -6, transition: SPRING },
  thinking: { rotate: [-3, 3, -3], transition: breathe(1.3) },
  confused: { rotate: 14, transition: SPRING },
  celebrate: { rotate: [0, -16, 14, 0], transition: CELEBRATE_TIMING },
};

const SHADOW = {
  hello: {
    scaleX: [1, 0.7, 1, 0.85, 1],
    transition: BODY.hello.transition,
  },
  celebrate: { scaleX: [1, 0.62, 1.05, 1], transition: CELEBRATE_TIMING },
};

// Reduced motion: a still pose per mood.
const STILL_TILT = { listening: 4, thinking: -4, confused: -8 };

// Where the eyes look when they aren't following something (viewBox units).
const FIXED_GAZE = {
  thinking: { x: 3, y: -4.5 },
  confused: { x: -1.5, y: 0.5 },
  celebrate: { x: 0, y: 0 },
};

const CONFETTI_COLOURS = [SKY, LEAF, "#F59E0B", BLUSH, "#2a9bc7"];
const CONFETTI = Array.from({ length: 10 }, (_, i) => {
  const angle = ((-170 + (i * 160) / 9) * Math.PI) / 180;
  const distance = 44 + (i % 3) * 8;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    spin: (i % 2 ? 1 : -1) * (200 + i * 18),
    colour: CONFETTI_COLOURS[i % CONFETTI_COLOURS.length],
    delay: (i % 4) * 0.05,
  };
});

function useBlink(enabled) {
  const [shut, setShut] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;
    let closeTimer;
    let openTimer;
    const schedule = () => {
      closeTimer = setTimeout(() => {
        setShut(true);
        openTimer = setTimeout(() => {
          setShut(false);
          schedule();
        }, 120);
      }, 2200 + Math.random() * 3400);
    };
    schedule();
    return () => {
      clearTimeout(closeTimer);
      clearTimeout(openTimer);
      setShut(false);
    };
  }, [enabled]);

  return shut;
}

function Eye({ x, y, mood, shut, squint }) {
  if (mood === "hello" || mood === "celebrate") {
    return (
      <path
        d={`M${x - 6} ${y + 3} Q${x} ${y - 6} ${x + 6} ${y + 3}`}
        fill="none"
        stroke={NAVY}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    );
  }
  return (
    <g transform={`translate(${x} ${y})`}>
      <motion.g
        initial={false}
        animate={{ scaleY: shut ? 0.1 : squint ? 0.55 : 1 }}
        transition={{ duration: shut ? 0.06 : 0.12 }}
      >
        <rect x="-5" y="-9" width="10" height="18" rx="5" fill={NAVY} />
        <circle cx="1.6" cy="-4.2" r="2.1" fill="#fff" />
      </motion.g>
    </g>
  );
}

function Mouth({ mood }) {
  const line = {
    fill: "none",
    stroke: NAVY,
    strokeWidth: 3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (mood === "hello" || mood === "celebrate") {
    return (
      <g>
        <path d="M52 77 Q60 78 68 77 Q67 90 60 90 Q53 90 52 77 Z" fill={NAVY} />
        <path
          d="M55.5 86 Q60 82.5 64.5 86 Q62.5 89 60 89 Q57.5 89 55.5 86 Z"
          fill={BLUSH}
        />
      </g>
    );
  }
  if (mood === "thinking") return <path d="M57 81 Q61 79.5 64 81" {...line} />;
  if (mood === "confused") {
    return <path d="M53 82 Q56.5 78.5 60 82 T67 82" {...line} />;
  }
  return <path d="M54 79 Q60 85 66 79" {...line} />;
}

export default function Mascot({ mood = "idle", className = "" }) {
  const reduce = useReducedMotion();
  const svgRef = useRef(null);
  const uid = useId().replace(/:/g, "");
  const happy = mood === "hello" || mood === "celebrate";
  const shut = useBlink(!reduce && !happy);

  const gazeX = useSpring(0, { stiffness: 220, damping: 20 });
  const gazeY = useSpring(0, { stiffness: 220, damping: 20 });
  const mouthX = useTransform(gazeX, (v) => v * 0.5);
  const mouthY = useTransform(gazeY, (v) => v * 0.3);

  useEffect(() => {
    const look = (x, y) => {
      if (reduce) {
        gazeX.jump(x);
        gazeY.jump(y);
      } else {
        gazeX.set(x);
        gazeY.set(y);
      }
    };

    const fixed = FIXED_GAZE[mood];
    if (fixed) return look(fixed.x, fixed.y);
    if (reduce) return look(0, 0);

    const lookAt = (px, py) => {
      const box = svgRef.current?.getBoundingClientRect();
      if (!box?.width) return;
      const dx = px - (box.left + box.width / 2);
      const dy = py - (box.top + box.height * 0.55);
      const distance = Math.hypot(dx, dy) || 1;
      const reach = Math.min(distance / 140, 1) * 4.5;
      look((dx / distance) * reach, (dy / distance) * reach * 0.8);
    };

    // Listening: watch the field being filled in.
    if (mood === "listening") {
      const lookAtFocus = () => {
        const el = document.activeElement;
        if (!el || el === document.body) return look(0, 0);
        const r = el.getBoundingClientRect();
        lookAt(r.left + r.width * 0.3, r.top + r.height / 2);
      };
      lookAtFocus();
      document.addEventListener("focusin", lookAtFocus);
      return () => document.removeEventListener("focusin", lookAtFocus);
    }

    // Otherwise follow the mouse (not on touch screens: there's no hover there).
    if (!window.matchMedia?.("(pointer: fine)").matches) return look(0, 0);
    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => lookAt(event.clientX, event.clientY));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [mood, reduce, gazeX, gazeY]);

  const still = { duration: 0 };
  const body = reduce
    ? { y: 0, rotate: STILL_TILT[mood] ?? 0, scaleX: 1, scaleY: 1, transition: still }
    : BODY[mood] ?? BODY.idle;
  const sprout = reduce
    ? { rotate: mood === "confused" ? 12 : 0, transition: still }
    : SPROUT[mood] ?? SPROUT.idle;
  const shadow = reduce
    ? { scaleX: 1, transition: still }
    : SHADOW[mood] ?? { scaleX: 1, transition: SETTLE };

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 120 120"
      className={className}
      style={{ overflow: "visible" }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${uid}-skin`} cx="0.36" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#D9F0FA" />
          <stop offset="0.5" stopColor={SKY} />
          <stop offset="1" stopColor="#4FAFD6" />
        </radialGradient>
      </defs>

      <motion.ellipse
        cx="60"
        cy="111"
        rx="30"
        ry="4.5"
        fill={NAVY}
        opacity="0.18"
        animate={shadow}
      />

      <motion.g style={{ originX: 0.5, originY: 1 }} animate={body}>
        {/* Hard offset shadow, like the site's cards and buttons */}
        <path d={BODY_PATH} transform="translate(3 3)" fill={NAVY} />

        <motion.g style={{ originX: 0.5, originY: 1 }} animate={sprout}>
          <path
            d="M60 32 C60 24 60 18 61 12"
            fill="none"
            stroke={STEM}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M61 14 C55 6 46 5 41 9 C45 16 54 18 61 14 Z"
            fill={LEAF}
            stroke={NAVY}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M61 12 C64 3 73 0 79 3 C77 11 68 15 61 12 Z"
            fill={LEAF}
            stroke={NAVY}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </motion.g>

        <path
          d={BODY_PATH}
          fill={`url(#${uid}-skin)`}
          stroke={NAVY}
          strokeWidth="3"
        />
        <ellipse
          cx="40"
          cy="44"
          rx="8"
          ry="4.5"
          transform="rotate(-35 40 44)"
          fill="#fff"
          opacity="0.6"
        />
        <ellipse cx="34" cy="74" rx="6" ry="3.5" fill={BLUSH} opacity="0.55" />
        <ellipse cx="86" cy="74" rx="6" ry="3.5" fill={BLUSH} opacity="0.55" />

        <motion.g style={{ x: gazeX, y: gazeY }}>
          <Eye x={47} y={62} mood={mood} shut={shut} />
          <Eye
            x={73}
            y={62}
            mood={mood}
            shut={shut}
            squint={mood === "confused"}
          />
        </motion.g>
        <motion.g style={{ x: mouthX, y: mouthY }}>
          <Mouth mood={mood} />
        </motion.g>
      </motion.g>

      {mood === "thinking" &&
        [
          [92, 26, 2.5],
          [99, 18, 3.2],
          [108, 9, 4],
        ].map(([cx, cy, r], i) => (
          <motion.circle
            key={cx}
            cx={cx}
            cy={cy}
            r={r}
            fill="#fff"
            stroke={NAVY}
            strokeWidth="2"
            initial={{ opacity: reduce ? 1 : 0.2 }}
            animate={
              reduce
                ? { opacity: 1 }
                : {
                    opacity: [0.2, 1, 0.2],
                    transition: { duration: 1.2, repeat: Infinity, delay: i * 0.2 },
                  }
            }
          />
        ))}

      {mood === "confused" && (
        <motion.text
          x="96"
          y="34"
          fontSize="24"
          fontWeight="800"
          fill={SKY}
          stroke={NAVY}
          strokeWidth="2.5"
          paintOrder="stroke"
          style={{ originX: 0.5, originY: 1 }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={
            reduce
              ? { opacity: 1, transition: still }
              : { opacity: 1, rotate: [0, 14, -8, 0], transition: { duration: 0.7 } }
          }
        >
          ?
        </motion.text>
      )}

      {mood === "celebrate" &&
        !reduce &&
        CONFETTI.map((piece, i) => (
          <motion.rect
            key={i}
            x="58"
            y="36"
            width="4"
            height="7"
            rx="1"
            fill={piece.colour}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              x: [0, piece.x * 0.85, piece.x],
              y: [0, piece.y, piece.y + 16],
              rotate: [0, piece.spin * 0.6, piece.spin],
              opacity: [0, 1, 0],
              scale: [0.4, 1, 0.8],
            }}
            transition={{
              duration: 1.1,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 0.1,
              delay: piece.delay,
            }}
          />
        ))}
    </svg>
  );
}

// Speech bubble that sits to the right of the mascot.
export function MascotBubble({ line, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className={className}>
      {line && (
        <motion.p
          key={line}
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: -6, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative rounded-xl bg-white px-3.5 py-2 text-[13px] font-semibold leading-snug text-primary-navy shadow-lg"
        >
          <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
          <span className="relative">{line}</span>
        </motion.p>
      )}
    </div>
  );
}
