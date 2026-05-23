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
  {/* <Head>
        <title>Events & Activites. Here you can get the events to join </title>
        <meta
          name="description"
          content="Discover your interested events & activities . Find and join events to enjoy your day"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
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
