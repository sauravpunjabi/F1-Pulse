import { notFound } from "next/navigation";
import { DRIVER_MAP } from "@/constants/grid";
import {
  DRIVER_WIKI,
  getDriverCareerStats,
  getDriverSeasons,
  getDriverStandings,
  getCurrentRound,
  getWikiData,
} from "@/lib/api";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DriverHero from "@/components/sections/DriverHero";
import DriverStats from "@/components/sections/DriverStats";
import DriverCareer from "@/components/sections/DriverCareer";

export function generateStaticParams() {
  return Object.keys(DRIVER_WIKI).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const driver = DRIVER_MAP[slug];
  if (!driver) return {};
  return {
    title: `${driver.name} — F1Pulse`,
    description: `${driver.name} career stats, history, and 2026 season data.`,
  };
}

export default async function DriverPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const wikiTitle = DRIVER_WIKI[slug];
  if (!wikiTitle) notFound();

  const driver = DRIVER_MAP[slug];
  if (!driver) notFound();

  const [career, seasons, wiki, allStandings, racesCompleted] = await Promise.all([
    getDriverCareerStats(slug),
    getDriverSeasons(slug),
    getWikiData(wikiTitle),
    getDriverStandings(),
    getCurrentRound(),
  ]);

  const currentStanding = allStandings.find((s) => s.driver.slug === slug) ?? null;

  return (
    <>
      <Navbar />
      <main>
        <DriverHero driver={driver} wiki={wiki} />
        <DriverStats career={career} currentStanding={currentStanding} racesCompleted={racesCompleted} />
        <DriverCareer driver={driver} seasons={seasons} wiki={wiki} />
      </main>
      <Footer />
    </>
  );
}
