import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
export const metadata = {
  title: "Umair Khan | Portfolio",
  description:
    "Umair Khan is a senior developer with 4 years of experience building enterprise-grade platforms across healthcare, logistics, and compliance sectors. Specialized in designing and deploying conversational AI systems, RAG pipelines, and agentic workflows. Proven track record of owning full backend lifecycles, leading development teams, and delivering scalable, production-ready solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/app/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
