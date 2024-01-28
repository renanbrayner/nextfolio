"use client";

import { Locale } from "@/i18n.config";
import { useLayoutStore } from "@/stores/layout";
import AnimatedLink from "./AnimatedLink";
import projectsImg from "../../../../public/projects/argos.png";
import Link from "next/link";
import Image from "next/image";

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
      <div className="absolute left-0 top-0 grid h-full grid-cols-3 place-items-center gap-4 overflow-hidden border p-40 opacity-40 blur-[128px]">
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
      className="fixed bottom-0 top-0 z-10 w-full -translate-x-[110%] overflow-hidden bg-gray-950 outline transition-transform duration-1000 ease-in-out data-[open=true]:translate-x-0 data-[open=false]:delay-700"
    >
      <BlurBg />
      <div className="grid h-full grid-rows-2 px-4 pb-16 pt-40 md:grid-cols-2 md:px-[8vw]">
        <div className="row-span-2 flex flex-col justify-between">
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
              imgSrc="/foo.jpeg"
            />
          </div>
        </div>
        <div
          data-open={isMenuOpen}
          className="flex flex-col items-center gap-6 pt-4 opacity-0 transition-opacity delay-[400ms] duration-500 data-[open=true]:opacity-100 data-[open=true]:delay-[1500ms]"
        >
          <span>{navigation.cta.question}</span>
          <Link className="z-10 text-5xl font-bold" href={`/${lang}/contact`}>
            {navigation.cta.answer}
          </Link>
        </div>
        <div
          data-open={isMenuOpen}
          className="flex items-center justify-center gap-3 opacity-0 transition-opacity delay-[400ms] duration-500 data-[open=true]:opacity-100 data-[open=true]:delay-[1500ms]"
        >
          <div className="flex h-full flex-col items-start justify-center gap-4">
            <div className="w-full">
              <strong>{navigation.featured}</strong>
            </div>
            <img
              src="/en/argos.png"
              height="100px"
              width="auto"
              className="h-4/5 rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
