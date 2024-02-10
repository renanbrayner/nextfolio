"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactForm() {
  const { scrollYProgress } = useScroll();

  const paddingValue = useTransform(
    scrollYProgress,
    [0.98, 1],
    ["0px 0px 0px 0px", "250px 64px 80px 64px"],
  );
  const borderValue = useTransform(scrollYProgress, [0.98, 1], ["0px", "1px"]);
  const borderRadiusValue = useTransform(
    scrollYProgress,
    [0.98, 1],
    ["0px", "24px"],
  );

  return (
    <motion.div
      className="h-[110vh] bg-black"
      style={{
        padding: paddingValue,
      }}
    >
      <motion.div
        style={{
          borderWidth: borderValue,
          borderRadius: borderRadiusValue,
        }}
        className="flex h-full items-center justify-center border-slate-700/50 bg-slate-950 p-20"
      >
        <strong className="text-6xl">Entre em contato</strong>
      </motion.div>
    </motion.div>
  );
}
