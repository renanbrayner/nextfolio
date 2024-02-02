"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function AnimatedLink({
  heading,
  imgSrc,
  subheading,
  href,
}: {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (ref.current == null) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between py-5 transition-colors duration-500 hover:border-neutral-50"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-4xl font-bold text-slate-400 transition-colors duration-500 group-hover:text-slate-50 md:text-[4.2rem]"
            style={{ textShadow: "0px 0px 25px rgba(0, 0, 0, 0.6)" }}
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 mt-4 block text-xl text-slate-400 transition-colors duration-500 group-hover:text-slate-50">
            {subheading}
          </span>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring", damping: 20 }}
          src={imgSrc}
          className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-32 md:w-48"
          alt={`Image representing a link for ${heading}`}
        />

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-4"
        >
          <FiArrowRight className="text-5xl text-slate-50" />
        </motion.div>
      </motion.div>
    </Link>
  );
}
