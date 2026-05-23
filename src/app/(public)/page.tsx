import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Hero from "@/components/section/Hero";
import Portfolio from "@/components/section/Portfolio";
import Process from "@/components/section/Process";
import Services from "@/components/section/Service";
import { ModeToggle } from "@/components/shared/Dark-theme";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
   <div >
  <Head>
        <title>ORBITRIX — Precision Digital Agency</title>
        <meta
          name="description"
          content="ORBITRIX is a precision-driven digital agency building high-performance web applications, automation systems, ERP solutions, and AI-powered products."
        />
          <meta
    name="keywords"
    content="web development agency, software agency, automation, ERP solutions, AI development, Next.js agency, UI UX design, full stack development"
  />

<meta name="author" content="ORBITRIX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>

      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Contact />
    </main>
   </div>
  );
}
