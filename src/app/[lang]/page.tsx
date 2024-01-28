import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-80"> {page.home.title} </div>
      <div className="h-80"> {page.home.title} </div>
      <div className="h-80"> {page.home.title} </div>
      <div className="h-80"> {page.home.title} </div>
      <div className="h-80"> {page.home.title} </div>
    </main>
  );
}
