"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  children,
  cardOuterClass,
  cardInnerClass,
  range = 12.5,
  scale = 0,
}: {
  children?: React.ReactNode;
  cardOuterClass?: string;
  cardInnerClass?: string;
  range?: number;
  scale?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${range}deg`, `-${range}deg`],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${range}deg`, `${range}deg`],
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.target == null) return;
    try {
      const targetElement = e.target as HTMLDivElement; //

      const rect = targetElement.getBoundingClientRect();

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
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "linear",
        scale: { duration: 0.5 },
        opacity: { duration: 0.5 }
      }}
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
