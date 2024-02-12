export type TimelineItem = {
  text: string;
  title: string;
  date: string;
  align: "left" | "right";
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const Card = ({
    side,
    title,
    children,
    date,
  }: {
    side: "left" | "right";
    title: string;
    children: React.ReactNode;
    date: string;
  }) => {
    if (side === "left") {
      return (
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 my-4 ml-auto rounded-xl bg-slate-500 p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">{title}</h3>
            <p className="text-justify leading-tight">{children}</p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-slate-800"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-slate-500 shadow"></div>
          </div>
        </div>
      );
    }

    if (side === "right") {
      return (
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-slate-800"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-slate-500 shadow"></div>
          </div>
          <div className="col-start-6 col-end-10 my-4 mr-auto rounded-xl bg-slate-500 p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">{title}</h3>
            <p className="text-justify leading-tight">{children}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="mx-auto flex grid-cols-9 flex-col p-2 py-20 text-slate-50 md:grid">
      {items.map((item) => (
        <Card
          key={item.title}
          side={item.align}
          title={item.title}
          date={item.date}
        >
          {item.text}
        </Card>
      ))}
    </div>
  );
}
