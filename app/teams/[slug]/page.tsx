import { notFound } from "next/navigation";
import { TEAM_MAP, TEAM_SLUGS } from "@/constants/data";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TeamHero from "@/components/sections/TeamHero";
import TeamHistory from "@/components/sections/TeamHistory";
import TeamDrivers from "@/components/sections/TeamDrivers";

export function generateStaticParams() {
  return TEAM_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const team = TEAM_MAP[slug];
  if (!team) return {};
  return {
    title: `${team.name} — F1Pulse`,
    description: `${team.name} team history, statistics, and 2026 lineup.`,
  };
}

export default async function TeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const team = TEAM_MAP[slug];
  if (!team) notFound();

  return (
    <>
      <Navbar />
      <main>
        <TeamHero team={team} />
        <TeamHistory team={team} />
        <TeamDrivers team={team} />
      </main>
      <Footer />
    </>
  );
}
