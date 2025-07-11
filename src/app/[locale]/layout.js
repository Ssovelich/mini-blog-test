import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getDictionary } from "@/lib/i18n";

export async function generateStaticParams() {
  return ["en", "uk"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  return {
    title: `Mini Blog - ${params.locale.toUpperCase()}`,
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      locale: params.locale,
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <Header dictionary={dictionary} locale={locale} />
      <main>{children}</main>
      <Footer dictionary={dictionary} />
    </>
  );
}
