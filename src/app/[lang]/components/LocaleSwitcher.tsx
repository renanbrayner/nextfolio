"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale, i18n } from "@/i18n.config";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const getFlag = (locale: Locale) => {
    if (locale === "pt") return "PT 🇧🇷";
    if (locale === "en") return "EN 🇺🇸";
  };

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className="rounded p-1 hover:shadow-xl"
            >
              {getFlag(locale)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
