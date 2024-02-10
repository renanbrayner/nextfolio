export default function Timeline() {
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
      <Card side="left" title="Começo Autodidata" date="mai de 2019">
        Iniciei minha jornada na programação de forma autodidata, explorando
        HTML, CSS e JavaScript por meio dos cursos do Gustavo Guanabara e dos
        eventos promovidos pela Rocketseat.
      </Card>
      <Card side="right" title="Estágio na FixIt" date="out de 2020">
        Entrei como estagiário em desenvolvimento frontend na FixIt, onde tive a
        oportunidade de criar aplicações web utilizando tecnologias como React,
        Styled Components e Axios.
      </Card>
      <Card
        side="left"
        title="Freelancer pela PanOps Solutions"
        date="fev 2022"
      >
        Ingressei como freelancer na PanOps Solutions, colaborando no
        desenvolvimento de aplicações utilizando Vue.js e Quasar.
      </Card>
      <Card
        side="left"
        title="Contratado pela PanOps Solutions"
        date="fev 2022"
      >
        Mais tarde, fui contratado como desenvolvedor frontend pela PanOps
        Solutions, onde trabalho até hoje, expandindo meu conhecimento em Vue.js
        e explorando novas tecnologias como Nuxt, Tailwind CSS e diversas outras
        para criar soluções ainda mais robustas e inovadoras.
      </Card>
      <Card side="right" title="Rumo a Novas Conquistas" date="fev 2022">
        Estou pronto para novos desafios e oportunidades de crescimento.
        Comprometido em aprimorar minhas habilidades e expandir meu
        conhecimento, estou aberto a explorar novas tecnologias e metodologias.
        Cada passo adiante nesta jornada contribuirá para meu desenvolvimento
        profissional contínuo.
      </Card>
    </div>
  );
}
