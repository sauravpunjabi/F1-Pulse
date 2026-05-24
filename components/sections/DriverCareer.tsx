import type { Driver } from "@/types";

export default function DriverCareer({ driver }: { driver: Driver }) {
  return <div className="slot min-h-96">[DriverCareer: {driver.name}]</div>;
}
