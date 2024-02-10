import TiltCard from "./TiltCard";

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
    <div className="group relative flex aspect-video w-full overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/50 brightness-90 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:brightness-100 md:w-4/6">
      <img
        src={img}
        className="basis-[50%] object-cover saturate-50 transition-all duration-500 group-hover:saturate-100"
      />
      <div className="flex basis-[50%] flex-col p-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl">{description}</p>
        <a className="pt-5 font-display text-xl">Ver projeto</a>
        <div className="flex-1" />
        <p className="justify-self-end font-display">{techs}</p>
      </div>
      <div className="z-5 absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
    </div>
  );
}
