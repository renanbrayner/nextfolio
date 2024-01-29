"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  children,
  cardOuterClass,
  cardInnerClass,
}: {
  children?: React.ReactNode;
  cardOuterClass?: string;
  cardInnerClass?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["12.5deg", "-12.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-12.5deg", "12.5deg"],
  );

  const handleMouseMove = (e) => {
    try {
      const rect = e.target.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cardOuterClass}
    >
      <div
        style={{
          transform: "translateZ(25px)",
          transformStyle: "preserve-3d",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={cardInnerClass}
      >
        <div
          style={{
            transform: "translateZ(15px)",
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
