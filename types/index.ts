/* ─── Team ───────────────────────────────────────────────────── */
export interface Team {
  id: string;
  name: string;
  color: string;
  founded: number;
  base: string;
  constructorTitles: number;
  driverTitles: number;
  drivers: string[];
  engine?: string;
  teamPrincipal?: string;
  history?: string;
}

/* ─── Driver ─────────────────────────────────────────────────── */
export interface Driver {
  number: number;
  name: string;
  firstName: string;
  lastName: string;
  nationality: string;
  flag: string;
  teamId: string;
  driverTitles: number;
  wins?: number;
  podiums?: number;
  poles?: number;
  slug: string;
  isRookie?: boolean;
}

/* ─── Race / Schedule ────────────────────────────────────────── */
export interface Race {
  round: number;
  raceName: string;
  circuitId: string;
  circuitName: string;
  country: string;
  locality: string;
  date: string;
  time?: string;
  season: string;
  url?: string;
  results?: RaceResult[];
}

export interface RaceResult {
  position: number;
  driverId: string;
  driverName: string;
  teamId: string;
  teamName: string;
  grid: number;
  laps: number;
  status: string;
  time?: string;
  points: number;
  fastestLap?: boolean;
}

/* ─── Standings ──────────────────────────────────────────────── */
export interface DriverStanding {
  position: number;
  driverId: string;
  driverName: string;
  nationality: string;
  teamId: string;
  teamName: string;
  points: number;
  wins: number;
}

export interface ConstructorStanding {
  position: number;
  teamId: string;
  teamName: string;
  nationality: string;
  points: number;
  wins: number;
}

/* ─── Live / OpenF1 ──────────────────────────────────────────── */
export interface Session {
  session_key: number;
  session_name: string;
  session_type: string;
  year: number;
  circuit_key: number;
  circuit_short_name: string;
  country_name: string;
  date_start: string;
  date_end: string;
}

export interface LivePosition {
  driver_number: number;
  position: number;
  date: string;
  session_key: number;
}

export interface LiveInterval {
  driver_number: number;
  gap_to_leader?: string;
  interval?: string;
  date: string;
  session_key: number;
}

export interface LiveDriver {
  driver_number: number;
  broadcast_name: string;
  full_name: string;
  name_acronym: string;
  team_name: string;
  team_colour: string;
  country_code: string;
  headshot_url?: string;
  session_key: number;
}

/* ─── API response wrappers ──────────────────────────────────── */
export interface ErgastResponse<T> {
  MRData: {
    total: string;
    [key: string]: unknown;
  } & T;
}
