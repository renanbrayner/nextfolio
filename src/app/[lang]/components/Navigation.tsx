import { Locale } from "@/i18n.config";
import AnimatedLink from "./Menu/AnimatedLink";
// import { useEffect } from "react";
// import { getDictionary } from "@/lib/dictionary";

// { lang }: { lang: Locale }
export default function Navigation() {
  // let navigation: Record<string, unknown> | null = null;

  // useEffect(() => {
  //   async function loadText() {
  //     const { navigation: text } = await getDictionary(lang);
  //     navigation = text;
  //   }
  // }, [lang]);
  return (
    <>
      <AnimatedLink
        heading="Projetos"
        subheading="Experiências web memoráveis"
        href="/fizz"
        imgSrc="/foo.jpeg"
      />
      <AnimatedLink
        heading="Experiência"
        subheading="Um desenvolvedor em constante evolução"
        href="/fizz"
        imgSrc="/foo.jpeg"
      />
      <AnimatedLink
        heading="Contato"
        subheading="Vamos transformar ideias em realidade juntos"
        href="/fizz"
        imgSrc="/foo.jpeg"
      />
      <AnimatedLink
        heading="Sobre"
        subheading="Comprometivo com a excelência e inovação"
        href="/fizz"
        imgSrc="/foo.jpeg"
      />
    </>
  );
}
