import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import React, { FC } from "react";
export default async function LangWrapper({
  component: Component,
  extraProps,
  lang,
}: {
  component: FC<{
    dictionary: typeof import("@/dictionaries/pt.json");
    lang: Locale;
  }>;
  extraProps?: Record<string, unknown>;
  lang: Locale;
}) {
  const dictionary = await getDictionary(lang);

  return <Component {...extraProps} dictionary={dictionary} lang={lang} />;
}
