"use client";

import { useLayoutStore } from "@/stores/layout";

export default function MenuBtn() {
  const {
    actions: { toggleMenu },
  } = useLayoutStore();

  return <button onClick={() => toggleMenu()}>Menu</button>;
}
