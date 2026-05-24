import type { Team } from "@/types";

export default function TeamHistory({ team }: { team: Team }) {
  return <div className="slot min-h-96">[TeamHistory: {team.name}]</div>;
}
