import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Oswald } from "next/font/google";
import "@/styles/globals.css";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Mini Blog",
  description: "Mini Blog",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}