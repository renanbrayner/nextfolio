import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SplineCanvas from "./components/SplineCanvas";
import LoopingText from "./components/LoopingText";
import ProjectCard from "./components/ProjectCard";
import Timeline, { TimelineItem } from "./components/Timeline";
import ContactForm from "./components/ContactForm";
import { FiChevronsDown, FiDownload } from "react-icons/fi";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const {
    cc,
    page: { home },
  } = dictionary;

  const timeline: TimelineItem[] = [
    {
      text: home.experience[1].text,
      title: home.experience[1].title,
      date: home.experience[1].date,
      align: "left",
    },
    {
      text: home.experience[2].text,
      title: home.experience[2].title,
      date: home.experience[2].date,
      align: "right",
    },
    {
      text: home.experience[3].text,
      title: home.experience[3].title,
      date: home.experience[3].date,
      align: "left",
    },
    {
      text: home.experience[4].text,
      title: home.experience[4].title,
      date: home.experience[4].date,
      align: "left",
    },
    {
      text: home.experience[5].text,
      title: home.experience[5].title,
      date: home.experience[5].date,
      align: "right",
    },
  ];

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
        {/* <SplineCanvas className="absolute bottom-0 left-1/3 top-1/4 aspect-square w-full md:left-auto md:right-[16vw] md:top-auto md:h-full md:w-[unset] md:pb-4" /> */}
      </section>
      <div className="flex justify-between px-4 md:px-[16vw]">
        <a
          href="#projects"
          data-scroll-to
          className="relative block w-fit font-display text-xl ease-in-out after:absolute after:block after:h-[1px] after:w-full after:origin-left after:scale-x-50 after:bg-slate-100 after:transition after:duration-500 after:content-[''] after:hover:scale-x-100 md:text-2xl"
        >
          {home.hero.projects}
        </a>
      </div>
      <section className="my-10 overflow-hidden py-0 md:my-0 md:py-10">
        <LoopingText />
      </section>
      <section id="projects" className="px-4 md:px-[16vw]">
        <h1 className="text-4xl font-bold md:text-6xl">
          {home.projects.title}
        </h1>
        <span className="mx:text-xl text-base">{home.projects.subtitle}</span>
        <div className="flex flex-col items-center gap-20 pb-20 pt-20 md:gap-52 md:pt-52">
          <ProjectCard
            img="/argos2.png"
            title={home.projects.argos.title}
            description={home.projects.argos.text}
            techs="Vue, Quasar, Leaflet, Tailwindcss, Pinia, Axios"
            link="https://play.google.com/store/apps/details?id=video.argos.app"
          />
          <ProjectCard
            img="/mob.png"
            title={home.projects.mob.title}
            description={home.projects.mob.text}
            techs="Vue, Quasar, Socket IO, Vuex"
            link=""
          />
          <ProjectCard
            img="/fixit.png"
            title={home.projects.fixit.title}
            description={home.projects.fixit.text}
            techs="React, Styled Components, Axios"
            link=""
          />
        </div>
        <a
          href="#contact"
          data-scroll-to
          className="relative block w-fit pb-20 font-display text-2xl ease-in-out after:absolute after:block after:h-[1px] after:w-full after:origin-left after:scale-x-50 after:bg-slate-100 after:transition after:duration-500 after:content-[''] after:hover:scale-x-100 md:pb-52"
        >
          {home.cta}
        </a>
      </section>
      <section id="experience" className="px-4 md:px-[16vw]">
        <h1 className="text-6xl font-bold">{home.experience.title}</h1>
        <span className="text-xl">{home.experience.subtitle}</span>
        <Timeline items={timeline} />
        <a
          href={cc}
          download="Renan Brayner CV"
          className="group mx-auto flex w-fit items-center gap-1 overflow-hidden rounded-xl border border-blue-300/50 bg-blue-500/50 p-4 text-xl brightness-90 transition-all duration-500 ease-in-out hover:scale-[1.02] md:hover:shadow-xl md:hover:brightness-100"
        >
          <FiDownload />
          {home.experience.download}
          <div className="z-5 absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40 md:group-hover:animate-shine" />
        </a>
        <a
          href="#contact"
          data-scroll-to
          className="relative block w-fit pb-20 font-display text-2xl ease-in-out after:absolute after:block after:h-[1px] after:w-full after:origin-left after:scale-x-50 after:bg-slate-100 after:transition after:duration-500 after:content-[''] after:hover:scale-x-100 md:pb-52"
        >
          {home.cta}
        </a>
      </section>
      <section id="about" className="px-4 md:px-[16vw]">
        <h1 className="text-6xl font-bold">{home.about.title}</h1>
        <span className="text-xl">{home.about.subtitle}</span>

        <div className="flex flex-col gap-10 pt-20 md:flex-row">
          <div className="basis-1/2">
            <img src="/me.png" className="bg-transparent" />
          </div>
          <div className="flex basis-1/2 flex-col justify-center text-base leading-relaxed md:text-2xl">
            <p>{home.about.text[1]}</p>
            <p>{home.about.text[2]}</p>
            <p>{home.about.text[3]}</p>
            <p>{home.about.text[4]}</p>
          </div>
        </div>
        <div className="flex justify-center pt-32 text-6xl">
          <a data-scroll-to href="#contact">
            <FiChevronsDown className="animate-bounce" />
          </a>
        </div>
      </section>
      <section className="flex flex-col md:h-[120vh] md:justify-end">
        <ContactForm dictionary={dictionary} />
      </section>
    </main>
  );
}
