import "./globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";

import { Bebas_Neue, Rethink_Sans } from "next/font/google";
import Header from "./components/Header";
import Menu from "./components/Menu";
import LangWrapper from "./components/LangWrapper";
import Locomotive from "./components/LocomotiveScroll";
import Head from "next/head";

const headingsFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-headings",
});

const defaultFont = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-default",
});

export const metadata: Metadata = {
  title: "Renan Brayner | Desenvolvedor",
  description:
    "Meu nome é Renan Brayner. Trabalho com desenvolvimento web em sites e sistemas web com javascript. Tenha sites com qualidade e adptados ao mobile.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      lang={params.lang}
      className={`${defaultFont.variable} ${headingsFont.variable} bg-slate-950 text-slate-100`}
    >
      <body>
        <Header lang={params.lang} />
        <main>{children}</main>
        <LangWrapper component={Menu} lang={params.lang} />
        <Locomotive />
      </body>
    </html>
  );
}
