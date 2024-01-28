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
    if (locale === "pt")
      return (
        <>
          <span className="hidden md:inline">PT</span> 🇧🇷
        </>
      );
    if (locale === "en")
      return (
        <>
          <span className="hidden md:inline">EN</span> 🇺🇸
        </>
      );
  };

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)}>{getFlag(locale)}</Link>
          </li>
        );
      })}
    </ul>
  );
}
