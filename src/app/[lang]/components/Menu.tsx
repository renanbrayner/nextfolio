"use client";

import { useLayoutStore } from "@/stores/layout";

export default function Menu() {
  const {
    state: { isMenuOpen },
  } = useLayoutStore();

  return (
    <div
      data-open={isMenuOpen}
      className="fixed bottom-0 top-0 z-10 w-full -translate-x-full overflow-hidden border-r-8 border-slate-200 bg-gray-950 transition-transform duration-1000 ease-in-out data-[open=true]:translate-x-0"
    >
      <div className="grid h-full grid-cols-3 place-items-center gap-4 overflow-hidden border p-40 opacity-40 blur-[128px]">
        <div className="relative h-72 w-44 animate-[shiftaround-1_31s_linear_infinite] rounded-full" />
        <div className="relative h-44 w-60 animate-[shiftaround-2_41s_linear_infinite] rounded-full" />
        <div className="relative h-32 w-72 animate-[shiftaround-3_47s_linear_infinite] rounded-full" />
        <div className="relative h-60 w-60 animate-[shiftaround-6_53s_linear_infinite] rounded-full" />
        <div className=" relative h-60 w-32 animate-[shiftaround-5_43s_linear_infinite] rounded-full" />
        <div className="relative h-60 w-60 animate-[shiftaround-4_37s_linear_infinite] rounded-full" />
      </div>
    </div>
  );
}
