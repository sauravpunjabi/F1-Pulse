import { TEAM_MAP } from "@/constants/grid";

export function getTeamColor(teamId: string): string {
  return TEAM_MAP[teamId]?.color ?? "#ffffff";
}

export function formatPoints(points: number): string {
  return points === 1 ? "1 pt" : `${points} pts`;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
