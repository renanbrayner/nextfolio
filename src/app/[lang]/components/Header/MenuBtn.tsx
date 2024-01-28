"use client";

import { useLayoutStore } from "@/stores/layout";
import { FiMenu } from "react-icons/fi";

export default function MenuBtn() {
  const {
    actions: { toggleMenu },
  } = useLayoutStore();

  return (
    <button onClick={() => toggleMenu()}>
      <FiMenu className="text-xl" />
    </button>
  );
}
