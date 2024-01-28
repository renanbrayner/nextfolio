import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import MenuBtn from "./MenuBtn";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex flex-row items-center justify-between px-4 pt-4 md:px-[18vw] md:pt-10">
      <div className="flex h-16 w-full flex-row items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/50 px-7 backdrop-blur-2xl md:rounded-3xl">
        <div className="flex-1">
          <LocaleSwitcher />
        </div>
        <div className="flex flex-1 justify-center">
          <Link href={`/${lang}`}>
            <Image priority alt="logo" width={36} height={36} src={logo} />
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <MenuBtn />
        </div>
      </div>
    </header>
  );
}
