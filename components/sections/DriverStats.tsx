import type { Driver } from "@/types";

export default function DriverStats({ driver }: { driver: Driver }) {
  return <div className="slot min-h-96">[DriverStats: {driver.name}]</div>;
}
