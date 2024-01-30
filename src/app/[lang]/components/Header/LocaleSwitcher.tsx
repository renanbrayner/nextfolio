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
          <span className="hidden md:inline">PT</span>{" "}
          <img className="w-6 md:w-4" width="16px" src="/pt.svg" />
        </>
      );
    if (locale === "en")
      return (
        <>
          <span className="hidden md:inline">EN</span>
          <img width="16px" className="w-6 md:w-4" src="/en.svg" />
        </>
      );
  };

  return (
    <ul className="flex gap-x-1.5 text-sm">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link className="flex gap-0.5" href={redirectedPathName(locale)}>
              {getFlag(locale)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
