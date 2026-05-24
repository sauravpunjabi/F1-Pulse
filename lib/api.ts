import type {
  DriverStanding,
  ConstructorStanding,
  Race,
  RaceResult,
  Session,
  LivePosition,
  LiveInterval,
  LiveDriver,
} from "@/types";
import { TEAMS, DRIVERS } from "@/constants/data";

const ERGAST = "https://ergast.com/api/f1";
const OPENF1 = "https://api.openf1.org/v1";

/* ─── Ergast helpers ─────────────────────────────────────────── */

export async function getDriverStandings(): Promise<DriverStanding[]> {
  try {
    const res = await fetch(`${ERGAST}/current/driverStandings.json`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Ergast driver standings failed");
    const json = await res.json();
    const list =
      json.MRData.StandingsTable.StandingsLists[0]?.DriverStandings ?? [];
    return list.map((s: Record<string, unknown>) => ({
      position: Number((s as { position: string }).position),
      driverId: ((s as { Driver: { driverId: string } }).Driver.driverId),
      driverName: `${(s as { Driver: { givenName: string } }).Driver.givenName} ${(s as { Driver: { familyName: string } }).Driver.familyName}`,
      nationality: (s as { Driver: { nationality: string } }).Driver.nationality,
      teamId: (s as { Constructors: { constructorId: string }[] }).Constructors[0]?.constructorId ?? "",
      teamName: (s as { Constructors: { name: string }[] }).Constructors[0]?.name ?? "",
      points: Number((s as { points: string }).points),
      wins: Number((s as { wins: string }).wins),
    }));
  } catch {
    return DRIVERS.map((d, i) => ({
      position: i + 1,
      driverId: d.slug,
      driverName: d.name,
      nationality: d.nationality,
      teamId: d.teamId,
      teamName: TEAMS.find((t) => t.id === d.teamId)?.name ?? "",
      points: 0,
      wins: 0,
    }));
  }
}

export async function getConstructorStandings(): Promise<ConstructorStanding[]> {
  try {
    const res = await fetch(`${ERGAST}/current/constructorStandings.json`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Ergast constructor standings failed");
    const json = await res.json();
    const list =
      json.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings ?? [];
    return list.map((s: Record<string, unknown>) => ({
      position: Number((s as { position: string }).position),
      teamId: (s as { Constructor: { constructorId: string } }).Constructor.constructorId,
      teamName: (s as { Constructor: { name: string } }).Constructor.name,
      nationality: (s as { Constructor: { nationality: string } }).Constructor.nationality,
      points: Number((s as { points: string }).points),
      wins: Number((s as { wins: string }).wins),
    }));
  } catch {
    return TEAMS.map((t, i) => ({
      position: i + 1,
      teamId: t.id,
      teamName: t.name,
      nationality: "",
      points: 0,
      wins: 0,
    }));
  }
}

export async function getRaceSchedule(): Promise<Race[]> {
  try {
    const res = await fetch(`${ERGAST}/current.json`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Ergast schedule failed");
    const json = await res.json();
    const races = json.MRData.RaceTable.Races ?? [];
    return races.map((r: Record<string, unknown>) => ({
      round: Number((r as { round: string }).round),
      raceName: (r as { raceName: string }).raceName,
      circuitId: (r as { Circuit: { circuitId: string } }).Circuit.circuitId,
      circuitName: (r as { Circuit: { circuitName: string } }).Circuit.circuitName,
      country: (r as { Circuit: { Location: { country: string } } }).Circuit.Location.country,
      locality: (r as { Circuit: { Location: { locality: string } } }).Circuit.Location.locality,
      date: (r as { date: string }).date,
      time: (r as { time?: string }).time,
      season: (r as { season: string }).season,
      url: (r as { url?: string }).url,
    }));
  } catch {
    return [];
  }
}

export async function getLastRaceResults(): Promise<RaceResult[]> {
  try {
    const res = await fetch(`${ERGAST}/current/last/results.json`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Ergast last results failed");
    const json = await res.json();
    const results =
      json.MRData.RaceTable.Races[0]?.Results ?? [];
    return results.map((r: Record<string, unknown>) => ({
      position: Number((r as { position: string }).position),
      driverId: (r as { Driver: { driverId: string } }).Driver.driverId,
      driverName: `${(r as { Driver: { givenName: string } }).Driver.givenName} ${(r as { Driver: { familyName: string } }).Driver.familyName}`,
      teamId: (r as { Constructor: { constructorId: string } }).Constructor.constructorId,
      teamName: (r as { Constructor: { name: string } }).Constructor.name,
      grid: Number((r as { grid: string }).grid),
      laps: Number((r as { laps: string }).laps),
      status: (r as { status: string }).status,
      time: (r as { Time?: { time: string } }).Time?.time,
      points: Number((r as { points: string }).points),
      fastestLap: (r as { FastestLap?: { rank: string } }).FastestLap?.rank === "1",
    }));
  } catch {
    return [];
  }
}

/* ─── OpenF1 helpers ─────────────────────────────────────────── */

export async function getLiveSessions(): Promise<Session[]> {
  try {
    const res = await fetch(
      `${OPENF1}/sessions?session_type=Race&year=2026`,
      { next: { revalidate: 0 } }
    );
    if (!res.ok) throw new Error("OpenF1 sessions failed");
    return res.json();
  } catch {
    return [];
  }
}

export async function getLiveDrivers(): Promise<LiveDriver[]> {
  try {
    const res = await fetch(`${OPENF1}/drivers?session_key=latest`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error("OpenF1 drivers failed");
    return res.json();
  } catch {
    return [];
  }
}

export async function getLivePositions(): Promise<LivePosition[]> {
  try {
    const res = await fetch(`${OPENF1}/position?session_key=latest`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error("OpenF1 positions failed");
    return res.json();
  } catch {
    return [];
  }
}

export async function getLiveIntervals(): Promise<LiveInterval[]> {
  try {
    const res = await fetch(`${OPENF1}/intervals?session_key=latest`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error("OpenF1 intervals failed");
    return res.json();
  } catch {
    return [];
  }
}
