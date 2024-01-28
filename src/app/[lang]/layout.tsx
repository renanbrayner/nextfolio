import "./globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";

import { Inter } from "next/font/google";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Locomotive from "./components/Locomotive";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
    <html lang={params.lang} className="bg-slate-950 text-slate-100">
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
        <Menu />
      </body>
    </html>
  );
}
