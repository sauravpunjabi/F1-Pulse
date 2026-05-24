import type { Team } from "@/types";

export default function TeamDrivers({ team }: { team: Team }) {
  return <div className="slot min-h-64">[TeamDrivers: {team.name}]</div>;
}
