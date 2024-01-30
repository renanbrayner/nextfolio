"use client";

import { useLayoutStore } from "@/stores/layout";
import { FiMenu } from "react-icons/fi";

export default function MenuBtn() {
  const {
    actions: { toggleMenu },
    state: { isMenuOpen },
  } = useLayoutStore();

  return (
    <button onClick={() => toggleMenu()} className="group relative">
      <div
        data-open={isMenuOpen}
        className="relative flex h-10 w-10 transform items-center justify-center overflow-hidden rounded-full shadow-md ring-0 ring-slate-500 ring-opacity-30 transition-all duration-200 active:ring-2 data-[open=true]:ring-2 [&:not(:active)]:hover:md:ring-4 [&:not(:active)]:data-[open=true]:hover:md:ring-4"
      >
        <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-center gap-[3px] overflow-hidden transition-all duration-300">
          <div
            data-open={isMenuOpen}
            className="h-[2px] origin-left transform bg-white transition-all duration-300 data-[open=true]:translate-x-14"
          />
          <div
            data-open={isMenuOpen}
            className="h-[2px] transform bg-white transition-all delay-75 duration-300 data-[open=true]:translate-x-14"
          />
          <div
            data-open={isMenuOpen}
            className="h-[2px] origin-left transform bg-white transition-all delay-150 duration-300 data-[open=true]:translate-x-14"
          />

          <div
            data-open={isMenuOpen}
            className="absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 data-[open=true]:w-12 data-[open=true]:translate-x-0"
          >
            <div
              data-open={isMenuOpen}
              className="absolute h-[2px] w-5 rotate-0 transform bg-white transition-all delay-300 duration-500 data-[open=true]:rotate-45"
            />
            <div
              data-open={isMenuOpen}
              className="absolute h-[2px] w-5 -rotate-0 transform bg-white transition-all delay-300 duration-500 data-[open=true]:-rotate-45"
            />
          </div>
        </div>
      </div>
    </button>
  );
}
