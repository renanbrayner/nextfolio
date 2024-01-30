"use client";

import { Locale } from "@/i18n.config";
import { useLayoutStore } from "@/stores/layout";
import AnimatedLink from "./AnimatedLink";
import projectsImg from "../../../../public/projects/argos.png";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "../TiltCard";

/**
 * Menu for mobile and desktop
 */
export default function Menu({
  dictionary,
  lang,
}: {
  dictionary: typeof import("@/dictionaries/pt.json");
  lang: Locale;
}) {
  const { navigation } = dictionary;

  const {
    state: { isMenuOpen },
  } = useLayoutStore();

  /**
   * Background blur effect
   */
  const BlurBg = () => {
    return (
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 grid grid-cols-3 place-items-center gap-4 overflow-hidden border opacity-40 blur-[128px] md:p-40">
        {/* background gradient effect */}
        <div className="relative h-72 w-44 animate-[shiftaround-1_31s_linear_infinite] rounded-full" />
        <div className="relative h-44 w-60 animate-[shiftaround-2_41s_linear_infinite] rounded-full" />
        <div className="relative h-32 w-72 animate-[shiftaround-3_47s_linear_infinite] rounded-full" />
        <div className="relative h-60 w-60 animate-[shiftaround-6_53s_linear_infinite] rounded-full" />
        <div className=" relative h-60 w-32 animate-[shiftaround-5_43s_linear_infinite] rounded-full" />
        <div className="relative h-60 w-60 animate-[shiftaround-4_37s_linear_infinite] rounded-full" />
      </div>
    );
  };

  return (
    <div
      data-open={isMenuOpen}
      className="fixed bottom-0 top-0 z-10 w-full -translate-x-[110%] overflow-hidden shadow-[2px_0px_0px_rgba(255,255,255,0.5)] transition-transform duration-1000 ease-in-out data-[open=true]:translate-x-0 data-[open=false]:delay-700"
    >
      <BlurBg />
      <div className="flex h-full flex-col gap-8 px-4 pb-16 pt-28 md:flex-row md:px-[10vw] md:pt-40">
        <div className="flex basis-full flex-col justify-between">
          <div
            data-open={isMenuOpen}
            className="opacity-0 transition-opacity duration-500 data-[open=true]:opacity-100 data-[open=true]:delay-[1100ms]"
          >
            <AnimatedLink
              heading={navigation.projects.title}
              subheading={navigation.projects.subtitle}
              href={`/${lang}/fizz`}
              imgSrc="/argos.png"
            />
          </div>
          <div
            data-open={isMenuOpen}
            className="opacity-0 transition-opacity delay-100 duration-500 data-[open=true]:opacity-100 data-[open=true]:delay-[1200ms]"
          >
            <AnimatedLink
              heading={navigation.experience.title}
              subheading={navigation.experience.subtitle}
              href="/fizz"
              imgSrc="/experience.png"
            />
          </div>
          <div
            data-open={isMenuOpen}
            className="opacity-0 transition-opacity delay-200 duration-500 data-[open=true]:opacity-100 data-[open=true]:delay-[1300ms]"
          >
            <AnimatedLink
              heading={navigation.contact.title}
              subheading={navigation.contact.subtitle}
              href="/fizz"
              imgSrc="/contact.png"
            />
          </div>
          <div
            data-open={isMenuOpen}
            className="opacity-0 transition-opacity delay-300 duration-500 data-[open=true]:opacity-100 data-[open=true]:delay-[1400ms]"
          >
            <AnimatedLink
              heading={navigation.about.title}
              subheading={navigation.about.subtitle}
              href="/fizz"
              imgSrc="/about.jpg"
            />
          </div>
        </div>
        <div
          data-open={isMenuOpen}
          className="hidden basis-full flex-col gap-2 pt-4 opacity-0 transition-opacity delay-[400ms] duration-500 data-[open=true]:opacity-100 data-[open=true]:delay-[1500ms] md:flex"
        >
          {/* Desktop */}
          <div className="flex flex-col items-center pb-9 pt-3">
            <span>{navigation.cta.question}</span>
            <Link
              className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text py-4 text-5xl font-bold text-slate-200 transition-all hover:scale-105 hover:text-transparent"
              href={`/${lang}/contact`}
            >
              {navigation.cta.answer}
            </Link>
          </div>
          <span className="pb-2 text-xl">{navigation.featured}</span>
          <Link href={`/${lang}/projects`} className="h-full">
            <TiltCard
              cardOuterClass="rounded-xl bg-slate-500/50 h-full p-3 border border-slate-300/20"
              cardInnerClass="h-full w-full bg-featured-project object-center rounded-xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
