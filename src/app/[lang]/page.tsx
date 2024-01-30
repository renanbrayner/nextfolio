import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SplineCanvas from "./components/SplineCanvas";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    page: { home },
  } = await getDictionary(lang);

  return (
    <main className="px-4 pt-24 md:px-[12vw]">
      <section className="pb- relative flex flex-col">
        <h1 className="pointer-events-none z-10 w-2/3 pb-40 pt-16 font-extrabold text-slate-50 md:text-8xl">
          {home.hero["1"]} {home.hero["2"]}{" "}
          <span
            data-lang={lang}
            className="animate-text bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 bg-clip-text data-[lang=pt]:text-transparent"
          >
            {home.hero["3"]}
          </span>{" "}
          <span
            data-lang={lang}
            className="animate-text bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 bg-clip-text data-[lang=en]:text-transparent"
          >
            {home.hero["4"]}
          </span>
        </h1>
        <SplineCanvas className="absolute right-0 h-full w-1/2 pb-4" />
      </section>
      <div className="flex justify-between">
        <span className="relative block w-fit font-display text-xl ease-in-out after:absolute after:block after:h-[1px] after:w-full after:origin-left after:scale-x-50 after:bg-slate-100 after:transition after:duration-500 after:content-[''] after:hover:scale-x-100">
          {home.hero.projects}
        </span>
      </div>
    </main>
  );
}
