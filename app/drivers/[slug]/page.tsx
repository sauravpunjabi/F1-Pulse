import { notFound } from "next/navigation";
import { DRIVER_MAP, DRIVER_SLUGS } from "@/constants/data";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DriverHero from "@/components/sections/DriverHero";
import DriverStats from "@/components/sections/DriverStats";
import DriverCareer from "@/components/sections/DriverCareer";

export function generateStaticParams() {
  return DRIVER_SLUGS.map((slug) => ({ slug }));
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
  const driver = DRIVER_MAP[slug];
  if (!driver) notFound();

  return (
    <>
      <Navbar />
      <main>
        <DriverHero driver={driver} />
        <DriverStats driver={driver} />
        <DriverCareer driver={driver} />
      </main>
      <Footer />
    </>
  );
}
