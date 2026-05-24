"use client";

import { useState } from "react";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Calendar from "@/components/sections/Calendar";
import Standings from "@/components/sections/Standings";
import Teams from "@/components/sections/Teams";
import Drivers from "@/components/sections/Drivers";
import History from "@/components/sections/History";
import Compare from "@/components/sections/Compare";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      {!loaderDone && <Loader onDone={() => setLoaderDone(true)} />}

      <div style={{ visibility: loaderDone ? "visible" : "hidden" }}>
        <Navbar />
        <main>
          <Hero />
          <Calendar />
          <Standings />
          <Teams />
          <Drivers />
          <History />
          <Compare />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
