import TiltCard from "./TiltCard";

export default function ProjectCard({ title, description, link, techs, img }: { title: string, description: string, link: string, techs: string, img: string }) {
  return (
      <div className="md:w-4/6 w-full flex overflow-hidden relative bg-slate-900/50 rounded-3xl border-slate-900 border hover:shadow-xl transition-all duration-500 group hover:scale-[1.02] brightness-90 hover:brightness-100 ease-in-out aspect-video">
        <img src={img} className="basis-[50%] object-cover saturate-50 group-hover:saturate-100 transition-all duration-500" />
        <div className="basis-[50%] p-10 flex flex-col">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl">{description}</p>
          <a className="font-display pt-5 text-xl">Ver projeto</a>
          <div className="flex-1" />
          <p className="justify-self-end font-display">{techs}</p>
        </div>
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
      </div>
  );
}
