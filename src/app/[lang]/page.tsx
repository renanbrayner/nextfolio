import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    page: { home },
  } = await getDictionary(lang);
  return (
    <main className="px-4 pt-48 md:px-[12vw]">
      <section className="flex">
        <div className="basis-[66%]">
          <h1 className="whitespace-nowrap pb-24 font-extrabold text-slate-50 md:text-8xl">
            {home.hero["1"]}
            <br /> {home.hero["2"]}{" "}
            <span
              data-lang={lang}
              className="animate-text bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 bg-clip-text data-[lang=pt]:text-transparent"
            >
              {home.hero["3"]}
            </span>
            <br />
            <span
              data-lang={lang}
              className="animate-text bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 bg-clip-text data-[lang=en]:text-transparent"
            >
              {home.hero["4"]}
            </span>
          </h1>
          <span className="font-display relative block w-fit text-xl ease-in-out after:absolute after:block after:h-[1px] after:w-full after:origin-left after:scale-x-50 after:bg-slate-100 after:transition after:duration-500 after:content-[''] after:hover:scale-x-100">
            {home.hero.projects}
          </span>
        </div>
        <div className="basis-[34%]"></div>
      </section>
    </main>
  );
}
