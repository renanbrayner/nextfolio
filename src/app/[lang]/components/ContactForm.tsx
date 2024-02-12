"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiPhone,
} from "react-icons/fi";

const MouseFollowerButton = ({ children }: { children: React.ReactNode }) => {
  const [relativeMousePos, setRelativeMousePos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (buttonRef == null) return;
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = Math.abs(e.clientX - centerX);
        const distanceY = Math.abs(e.clientY - centerY);
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY,
        );

        // Only animate if the cursor is within  300px of the button
        if (distance <= 200) {
          const x = e.clientX - centerX;
          const y = e.clientY - centerY;
          setRelativeMousePos({ x, y });
        } else {
          // Reset the position if the cursor is too far away
          setRelativeMousePos({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div ref={buttonRef} className="h-40 w-40">
      <motion.div
        animate={{
          x: relativeMousePos.x / 1.6,
          y: relativeMousePos.y / 1.6,
        }}
        transition={{ duration: 0.1 }}
        className="group peer absolute z-10 flex h-40 w-40 items-center justify-center rounded-full border-2 border-slate-700/50 transition-colors duration-500 hover:border-slate-50/50"
      >
        {children}
      </motion.div>
      <motion.div
        animate={{
          x: relativeMousePos.x / 3,
          y: relativeMousePos.y / 3,
        }}
        transition={{ duration: 0.1 }}
        className="absolute h-40 w-40 rounded-full border-2 border-slate-700/50 transition-colors duration-500 peer-hover:border-slate-50/50"
      />
    </motion.div>
  );
};

export default function ContactForm({
  dictionary,
}: {
  dictionary: typeof import("@/dictionaries/pt.json");
}) {
  const {
    page: { home },
  } = dictionary;
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
      className="relative h-[110vh] bg-black"
      style={{
        padding: paddingValue,
      }}
    >
      <motion.div
        style={{
          borderWidth: borderValue,
          borderRadius: borderRadiusValue,
        }}
        className="flex h-full flex-col items-center justify-center border-slate-700/50 bg-slate-950 p-20"
      >
        <h1 className="text-3xl font-bold">{home.contact.cta}</h1>
        <h1 className="pb-20 pt-10 text-7xl font-bold">
          {home.contact.answer}
        </h1>
        <a href="mailto:renanbrayner@gmail.com">
          <MouseFollowerButton>
            <>
              <span className="font-display text-xl group-hover:hidden">
                {home.cta}
              </span>
              <FiExternalLink className="hidden text-2xl group-hover:block" />
            </>
          </MouseFollowerButton>
        </a>
      </motion.div>
      <div
        id="contact"
        className="absolute bottom-0 left-0 right-0 flex h-20 items-center justify-between px-4 text-xl md:px-16"
      >
        <span>{home.contact.connect}</span>

        <ul className="flex gap-10">
          <li>
            <a
              href="https://www.linkedin.com/in/renanbrayner/"
              target="_blank"
              className="flex items-center justify-center gap-2"
            >
              <FiLinkedin />
              <span className="leading-none">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-center gap-2"
              href="https://wa.me/5581981815475"
            >
              <FiPhone />
              <span className="leading-none">Whatsapp</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/renan.brayner/"
              target="_blank"
              className="flex items-center justify-center gap-2"
            >
              <FiInstagram />
              <span className="leading-none">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/renanbrayner"
              target="_blank"
              className="flex items-center justify-center gap-2"
            >
              <FiGithub />
              <span className="leading-none">Github</span>
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
