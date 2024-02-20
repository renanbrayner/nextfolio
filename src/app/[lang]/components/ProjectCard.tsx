import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({
  title,
  description,
  link,
  techs,
  img,
}: {
  title: string;
  description: string;
  link: string;
  techs: string;
  img: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/50 brightness-90 transition-all duration-500 ease-in-out hover:scale-[1.02] md:aspect-video md:w-4/6 md:flex-row md:hover:shadow-xl md:hover:brightness-100"
    >
      <img
        src={img}
        className="aspect-square basis-[50%] object-cover transition-all duration-500 md:aspect-[unset] md:saturate-50 md:group-hover:saturate-100"
      />
      <div className="relative flex basis-[50%] flex-col gap-4 p-10">
        <a className="absolute right-5 top-5 text-xl">
          <FiExternalLink />
        </a>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl">{description}</p>
        <div className="flex-1" />
        <p className="justify-self-end font-display">{techs}</p>
      </div>
      <div className="z-5 absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40 md:group-hover:animate-shine" />
    </a>
  );
}
