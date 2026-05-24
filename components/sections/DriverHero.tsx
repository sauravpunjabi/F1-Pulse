import type { Driver } from "@/types";

export default function DriverHero({ driver }: { driver: Driver }) {
  return <div className="slot min-h-64">[DriverHero: {driver.name}]</div>;
}
