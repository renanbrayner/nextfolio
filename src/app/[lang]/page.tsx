import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SplineCanvas from "./components/SplineCanvas";
import LoopingText from "./components/LoopingText";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    page: { home },
  } = await getDictionary(lang);

  return (
    <main className="pt-24">
      <section className="relative flex flex-col overflow-hidden px-4 pb-32 md:px-[16vw] md:pb-6">
        <h1 className="pointer-events-none z-10 pb-40 pt-16 text-5xl font-extrabold text-slate-50 drop-shadow-[0_0_10px_rgba(0,0,0,0.75)] md:w-2/3 md:text-9xl">
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
        <SplineCanvas className="absolute bottom-0 left-1/3 top-1/4 aspect-square w-full md:left-auto md:right-[16vw] md:top-auto md:h-full md:w-[unset] md:pb-4" />
      </section>
      <div className="flex justify-between px-4 md:px-[16vw]">
        <span className="relative block w-fit font-display text-2xl ease-in-out after:absolute after:block after:h-[1px] after:w-full after:origin-left after:scale-x-50 after:bg-slate-100 after:transition after:duration-500 after:content-[''] after:hover:scale-x-100">
          {home.hero.projects}
        </span>
      </div>
      <section className="overflow-hidden py-10">
        <LoopingText />
      </section>
      <section className="px-4 md:px-[16vw]">
        <h1 className="text-6xl font-bold">Projetos</h1>
        <span className="text-xl">Criando o Futuro da Web</span>
      </section>
    </main>
  );
}
