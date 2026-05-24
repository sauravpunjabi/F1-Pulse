import type { Team } from "@/types";

export default function TeamHero({ team }: { team: Team }) {
  return <div className="slot min-h-64">[TeamHero: {team.name}]</div>;
}
