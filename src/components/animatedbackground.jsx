"use client"

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function AnimatedBackground({
  blobRadiusA = 120,
  blobRadiusB = 100,
  colorA = "rgba(166, 247, 190)", // green
  colorB = "rgba(166, 247, 190)", // green
  blur = 80,
  speedScale = 1.0,
}) {
  const containerRef = useRef(null);

  const stateRef = useRef({
    w: 0,
    h: 0,
    blobs: [
      { r: blobRadiusA, x: 0, y: 0, vx: 0, vy: 0, color: colorA, el: null },
      { r: blobRadiusB, x: 0, y: 0, vx: 0, vy: 0, color: colorB, el: null },
    ],
  });

  const setBlobEl = (i) => (el) => {
    if (el) stateRef.current.blobs[i].el = el;
  };

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    function updateSize() {
      const rect = target.getBoundingClientRect();
      stateRef.current.w = rect.width;
      stateRef.current.h = rect.height;

      const [A, B] = stateRef.current.blobs;

      if (A.x === 0 && A.y === 0 && B.x === 0 && B.y === 0) {
  
  const cx = rect.width * 0.5;   // center X
  const cy = rect.height * 0.5;  // center Y

  // --- Initial positions ---
  A.x = rect.width * 0.15;   // left bottom
  A.y = rect.height * 0.75;

  B.x = rect.width * 0.85;   // right top
  B.y = rect.height * 0.25;

  // --- NEW: Aim both blobs exactly toward screen center ---
  const dirAX = cx - A.x;
  const dirAY = cy - A.y;
  const magA = Math.sqrt(dirAX * dirAX + dirAY * dirAY);

  const dirBX = cx - B.x;
  const dirBY = cy - B.y;
  const magB = Math.sqrt(dirBX * dirBX + dirBY * dirBY);

  const speed = 120 * speedScale; // controls how fast they reach center

  A.vx = (dirAX / magA) * speed;
  A.vy = (dirAY / magA) * speed;

  B.vx = (dirBX / magB) * speed;
  B.vy = (dirBY / magB) * speed;
}
    }

    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(target);
    return () => ro.disconnect();
  }, [speedScale]);

  useEffect(() => {
    let raf;
    let last = performance.now();

    function step(now) {
      const dt = Math.min(0.04, (now - last) / 1000);
      last = now;

      const s = stateRef.current;
      const { w, h } = s;

      if (!w || !h) {
        raf = requestAnimationFrame(step);
        return;
      }

      // move blobs
      s.blobs.forEach((b) => {
        b.x += b.vx * dt;
        b.y += b.vy * dt;
      });

      // wall collisions
      s.blobs.forEach((b) => {
        if (b.x - b.r < 0) {
          b.x = b.r;
          b.vx = Math.abs(b.vx) * 0.98;
        }
        if (b.x + b.r > w) {
          b.x = w - b.r;
          b.vx = -Math.abs(b.vx) * 0.98;
        }
        if (b.y - b.r < 0) {
          b.y = b.r;
          b.vy = Math.abs(b.vy) * 0.98;
        }
        if (b.y + b.r > h) {
          b.y = h - b.r;
          b.vy = -Math.abs(b.vy) * 0.98;
        }
      });

      // circle-circle collision
      const [A, B] = s.blobs;
      const dx = B.x - A.x;
      const dy = B.y - A.y;
      const dist2 = dx * dx + dy * dy;
      const minDist = A.r + B.r;

     if (A.x === 0 && A.y === 0 && B.x === 0 && B.y === 0) {

  const cx = rect.width * 0.5;   // center X
  const cy = rect.height * 0.45; // center Y (raised above bottom)

  // --- Initial positions (above bottom area) ---
  A.x = rect.width * 0.18;   
  A.y = rect.height * 0.55;  // LOWER half but not touching bottom

  B.x = rect.width * 0.82;   
  B.y = rect.height * 0.35;  // UPPER half of container

  // --- Aim both circles exactly toward raised center ---
  const dirAX = cx - A.x;
  const dirAY = cy - A.y;
  const magA = Math.sqrt(dirAX * dirAX + dirAY * dirAY);

  const dirBX = cx - B.x;
  const dirBY = cy - B.y;
  const magB = Math.sqrt(dirBX * dirBX + dirBY * dirBY);

  const speed = 120 * speedScale;

  A.vx = (dirAX / magA) * speed;
  A.vy = (dirAY / magA) * speed;

  B.vx = (dirBX / magB) * speed;
  B.vy = (dirBY / magB) * speed;
}

      // update DOM transform
      s.blobs.forEach((b) => {
        if (b.el) {
          b.el.style.transform = `translate3d(${b.x - b.r}px, ${
            b.y - b.r
          }px, 0)`;
        }
      });

      raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    width: "100%",
    background: "transparent",
  };

  const blobStyle = (r, color) => ({
    position: "absolute",
    width: r * 2,
    height: r * 2,
    borderRadius: "50%",
    filter: `blur(${blur}px)`,
    background: color,
    pointerEvents: "none",
    mixBlendMode: "screen",
    willChange: "transform",
  });

  return (
    <div
      ref={containerRef}
      style={containerStyle}
      className="min-h-screen w-full"
    >
      <motion.div
        ref={setBlobEl(0)}
        style={blobStyle(blobRadiusA, colorA)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        ref={setBlobEl(1)}
        style={blobStyle(blobRadiusB, colorB)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      />
    </div>
  );
}
