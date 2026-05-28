// jolpi.ca mirrors Ergast with identical JSON — ergast.com shut down end of 2024
const ERGAST = 'https://api.jolpi.ca/ergast/f1'
const WIKI = 'https://en.wikipedia.org/api/rest_v1/page/summary'

/* ─── Team colors ─────────────────────────────────────────────── */

export const TEAM_COLORS: Record<string, string> = {
  ferrari:      '#E8002D',
  mclaren:      '#FF8000',
  mercedes:     '#27F4D2',
  red_bull:     '#3671C6',
  williams:     '#005AFF',
  aston_martin: '#358C75',
  alpine:       '#FF87BC',
  haas:         '#B6BABD',
  rb:           '#6692FF',
  sauber:       '#C0C0C0',
  cadillac:     '#CC0033',
}

/* ─── Wiki name mappings ──────────────────────────────────────── */

export const DRIVER_WIKI: Record<string, string> = {
  hamilton:   'Lewis_Hamilton',
  leclerc:    'Charles_Leclerc',
  norris:     'Lando_Norris',
  piastri:    'Oscar_Piastri',
  russell:    'George_Russell_(racing_driver)',
  antonelli:  'Kimi_Antonelli',
  verstappen: 'Max_Verstappen',
  hadjar:     'Isack_Hadjar',
  sainz:      'Carlos_Sainz_Jr.',
  albon:      'Alexander_Albon',
  alonso:     'Fernando_Alonso',
  stroll:     'Lance_Stroll',
  gasly:      'Pierre_Gasly',
  colapinto:  'Franco_Colapinto',
  ocon:       'Esteban_Ocon',
  bearman:    'Oliver_Bearman',
  lawson:     'Liam_Lawson_(racing_driver)',
  lindblad:   'Arvid_Lindblad',
  hulkenberg: 'Nico_Hülkenberg',
  bortoleto:  'Gabriel_Bortoleto',
  perez:      'Sergio_Pérez',
  bottas:     'Valtteri_Bottas',
}

export const TEAM_WIKI: Record<string, string> = {
  ferrari:      'Scuderia_Ferrari',
  mclaren:      'McLaren',
  mercedes:     'Mercedes-AMG_Petronas_F1_Team',
  red_bull:     'Red_Bull_Racing',
  williams:     'Williams_Racing',
  aston_martin: 'Aston_Martin_in_Formula_One',
  alpine:       'Alpine_F1_Team',
  haas:         'Haas_F1_Team',
  rb:           'RB_Formula_One_Team',
  sauber:       'Stake_F1_Team_Kick_Sauber',
  cadillac:     'Cadillac_Formula_One_Team',
}

export const CIRCUIT_WIKI: Record<string, string> = {
  bahrain:       'Bahrain_International_Circuit',
  jeddah:        'Jeddah_Street_Circuit',
  albert_park:   'Albert_Park_Circuit',
  suzuka:        'Suzuka_International_Racing_Course',
  shanghai:      'Shanghai_International_Circuit',
  miami:         'Miami_International_Autodrome',
  imola:         'Autodromo_Enzo_e_Dino_Ferrari',
  monaco:        'Circuit_de_Monaco',
  villeneuve:    'Circuit_Gilles_Villeneuve',
  catalunya:     'Circuit_de_Barcelona-Catalunya',
  red_bull_ring: 'Red_Bull_Ring',
  silverstone:   'Silverstone_Circuit',
  hungaroring:   'Hungaroring',
  spa:           'Circuit_de_Spa-Francorchamps',
  zandvoort:     'Circuit_Zandvoort',
  monza:         'Autodromo_Nazionale_Monza',
  baku:          'Baku_City_Circuit',
  marina_bay:    'Marina_Bay_Street_Circuit',
  cota:          'Circuit_of_the_Americas',
  rodriguez:     'Autodromo_Hermanos_Rodriguez',
  interlagos:    'Autodromo_Jose_Carlos_Pace',
  vegas:         'Las_Vegas_Street_Circuit',
  losail:        'Losail_International_Circuit',
  yas_marina:    'Yas_Marina_Circuit',
}

/* ─── Driver standings ────────────────────────────────────────── */

export async function getDriverStandings() {
  try {
    const res = await fetch(
      `${ERGAST}/current/driverStandings.json`,
      { next: { revalidate: 60 } }
    )
    const data = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const list: any[] = data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings ?? []

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return list.map((s: any) => ({
      position: parseInt(s.position),
      points:   parseFloat(s.points),
      wins:     parseInt(s.wins),
      driver: {
        id:          s.Driver.driverId,
        number:      s.Driver.permanentNumber ?? '0',
        code:        s.Driver.code ?? '',
        firstName:   s.Driver.givenName,
        lastName:    s.Driver.familyName,
        nationality: s.Driver.nationality,
        slug:        (s.Driver.familyName as string)
          .toLowerCase()
          .normalize('NFD')
          .replace(/[̀-ͯ]/g, ''),
      },
      team: {
        id:    s.Constructors[0]?.constructorId ?? '',
        name:  s.Constructors[0]?.name ?? '',
        color: TEAM_COLORS[s.Constructors[0]?.constructorId ?? ''] ?? '#ffffff',
      },
    }))
  } catch {
    return []
  }
}

/* ─── Constructor standings ───────────────────────────────────── */

export async function getConstructorStandings() {
  try {
    const res = await fetch(
      `${ERGAST}/current/constructorStandings.json`,
      { next: { revalidate: 60 } }
    )
    const data = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const list: any[] = data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings ?? []

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return list.map((s: any) => ({
      position: parseInt(s.position),
      points:   parseFloat(s.points),
      wins:     parseInt(s.wins),
      team: {
        id:          s.Constructor.constructorId,
        name:        s.Constructor.name,
        nationality: s.Constructor.nationality,
        color:       TEAM_COLORS[s.Constructor.constructorId] ?? '#ffffff',
      },
    }))
  } catch {
    return []
  }
}

/* ─── Race schedule ───────────────────────────────────────────── */

export async function getRaceSchedule() {
  try {
    const res = await fetch(
      `${ERGAST}/current.json`,
      { next: { revalidate: 3600 } }
    )
    const data = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const races: any[] = data.MRData.RaceTable.Races
    const today = new Date()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return races.map((r: any) => {
      const raceDate = new Date(r.date)
      const diff = (raceDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)

      let status: 'finished' | 'live' | 'next' | 'upcoming'
      if (diff < -1)              status = 'finished'
      else if (diff >= -1 && diff < 0) status = 'live'
      else if (diff >= 0 && diff <= 7) status = 'next'
      else                        status = 'upcoming'

      return {
        round:     parseInt(r.round),
        name:      r.raceName,
        circuit:   r.Circuit.circuitName,
        circuitId: r.Circuit.circuitId,
        city:      r.Circuit.Location.locality,
        country:   r.Circuit.Location.country,
        date:      r.date,
        time:      r.time ?? null,
        status,
        slug:      r.Circuit.circuitId,
        fp1:       r.FirstPractice ?? null,
        fp2:       r.SecondPractice ?? null,
        qualifying: r.Qualifying ?? null,
        sprint:    r.Sprint ?? null,
      }
    })
  } catch {
    return []
  }
}

/* ─── Last race result ────────────────────────────────────────── */

export async function getLastRaceResult() {
  try {
    const res = await fetch(
      `${ERGAST}/current/last/results.json`,
      { next: { revalidate: 60 } }
    )
    const data = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const race: any = data.MRData.RaceTable.Races[0]
    if (!race) return null

    return {
      name:    race.raceName,
      date:    race.date,
      circuit: race.Circuit.circuitName,
      city:    race.Circuit.Location.locality,
      country: race.Circuit.Location.country,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      results: (race.Results as any[]).slice(0, 10).map((r: any) => ({
        position:  parseInt(r.position),
        driver:    `${r.Driver.givenName} ${r.Driver.familyName}`,
        driverId:  r.Driver.driverId,
        team:      r.Constructor.name,
        teamId:    r.Constructor.constructorId,
        points:    parseFloat(r.points),
        time:      r.Time?.time ?? r.status,
        grid:      parseInt(r.grid),
        laps:      parseInt(r.laps),
        teamColor: TEAM_COLORS[r.Constructor.constructorId] ?? '#ffffff',
      })),
    }
  } catch {
    return null
  }
}

/* ─── Driver career stats ─────────────────────────────────────── */

export async function getDriverCareerStats(driverId: string) {
  try {
    const [seasonsRes, polesRes, p1Res, p2Res, p3Res] = await Promise.all([
      fetch(`${ERGAST}/drivers/${driverId}/driverStandings.json?limit=100`,  { next: { revalidate: 86400 } }),
      fetch(`${ERGAST}/drivers/${driverId}/qualifying/1.json?limit=1`,        { next: { revalidate: 86400 } }),
      fetch(`${ERGAST}/drivers/${driverId}/results/1.json?limit=1`,           { next: { revalidate: 86400 } }),
      fetch(`${ERGAST}/drivers/${driverId}/results/2.json?limit=1`,           { next: { revalidate: 86400 } }),
      fetch(`${ERGAST}/drivers/${driverId}/results/3.json?limit=1`,           { next: { revalidate: 86400 } }),
    ])

    const [sData, pData, p1, p2, p3] = await Promise.all([
      seasonsRes.json(), polesRes.json(),
      p1Res.json(), p2Res.json(), p3Res.json(),
    ])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const seasons: any[] = sData.MRData.StandingsTable.StandingsLists ?? []
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const titles  = seasons.filter((s: any) => s.DriverStandings[0]?.position === '1').length
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wins    = seasons.reduce((acc: number, s: any) => acc + parseInt(s.DriverStandings[0]?.wins ?? 0), 0)
    const poles   = parseInt(pData.MRData.total ?? 0)
    const podiums =
      parseInt(p1.MRData.total ?? 0) +
      parseInt(p2.MRData.total ?? 0) +
      parseInt(p3.MRData.total ?? 0)

    return {
      titles,
      wins,
      poles,
      podiums,
      seasons:    seasons.length,
      debutYear:  seasons[0]?.season ?? null,
      latestYear: seasons[seasons.length - 1]?.season ?? null,
    }
  } catch {
    return { titles: 0, wins: 0, poles: 0, podiums: 0, seasons: 0, debutYear: null, latestYear: null }
  }
}

/* ─── Driver season-by-season ─────────────────────────────────── */

export async function getDriverSeasons(driverId: string) {
  try {
    const res = await fetch(
      `${ERGAST}/drivers/${driverId}/driverStandings.json?limit=100`,
      { next: { revalidate: 86400 } }
    )
    const data = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const seasons: any[] = data.MRData.StandingsTable.StandingsLists ?? []

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return seasons.map((s: any) => ({
      season:   s.season,
      position: parseInt(s.DriverStandings[0]?.position ?? 99),
      points:   parseFloat(s.DriverStandings[0]?.points ?? 0),
      wins:     parseInt(s.DriverStandings[0]?.wins ?? 0),
      team:     s.DriverStandings[0]?.Constructors?.[0]?.name ?? '',
      teamId:   s.DriverStandings[0]?.Constructors?.[0]?.constructorId ?? '',
      champion: s.DriverStandings[0]?.position === '1',
    }))
  } catch {
    return []
  }
}

/* ─── Team season history ─────────────────────────────────────── */

export async function getTeamSeasons(constructorId: string) {
  try {
    const res = await fetch(
      `${ERGAST}/constructors/${constructorId}/constructorStandings.json?limit=100`,
      { next: { revalidate: 86400 } }
    )
    const data = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const seasons: any[] = data.MRData.StandingsTable.StandingsLists ?? []

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return seasons.map((s: any) => ({
      season:   s.season,
      position: parseInt(s.ConstructorStandings[0]?.position ?? 99),
      points:   parseFloat(s.ConstructorStandings[0]?.points ?? 0),
      wins:     parseInt(s.ConstructorStandings[0]?.wins ?? 0),
      champion: s.ConstructorStandings[0]?.position === '1',
    }))
  } catch {
    return []
  }
}

/* ─── Team all-time stats ─────────────────────────────────────── */

export async function getTeamAllTimeStats(constructorId: string) {
  try {
    const [titlesRes, winsRes, polesRes] = await Promise.all([
      fetch(`${ERGAST}/constructors/${constructorId}/constructorStandings/1.json?limit=1`, { next: { revalidate: 86400 } }),
      fetch(`${ERGAST}/constructors/${constructorId}/results/1.json?limit=1`,              { next: { revalidate: 86400 } }),
      fetch(`${ERGAST}/constructors/${constructorId}/qualifying/1.json?limit=1`,           { next: { revalidate: 86400 } }),
    ])

    const [tData, wData, pData] = await Promise.all([
      titlesRes.json(), winsRes.json(), polesRes.json(),
    ])

    return {
      titles: parseInt(tData.MRData.total ?? 0),
      wins:   parseInt(wData.MRData.total ?? 0),
      poles:  parseInt(pData.MRData.total ?? 0),
    }
  } catch {
    return { titles: 0, wins: 0, poles: 0 }
  }
}

/* ─── Wikipedia image + bio ───────────────────────────────────── */

export async function getWikiData(wikiTitle: string) {
  try {
    const res = await fetch(
      `${WIKI}/${encodeURIComponent(wikiTitle)}`,
      { next: { revalidate: 86400 } }
    )
    const data = await res.json()
    return {
      image:     data.originalimage?.source ?? data.thumbnail?.source ?? null,
      thumbnail: data.thumbnail?.source ?? null,
      bio:       data.extract ?? null,
      url:       data.content_urls?.desktop?.page ?? null,
    }
  } catch {
    return { image: null, thumbnail: null, bio: null, url: null }
  }
}

/* ─── Live session (OpenF1) ───────────────────────────────────── */

export async function getLivePositions() {
  try {
    const res = await fetch(
      'https://api.openf1.org/v1/position?session_key=latest',
      { next: { revalidate: 0 } }
    )
    return await res.json()
  } catch { return [] }
}

export async function getLiveIntervals() {
  try {
    const res = await fetch(
      'https://api.openf1.org/v1/intervals?session_key=latest',
      { next: { revalidate: 0 } }
    )
    return await res.json()
  } catch { return [] }
}

export async function getLiveDrivers() {
  try {
    const res = await fetch(
      'https://api.openf1.org/v1/drivers?session_key=latest',
      { next: { revalidate: 0 } }
    )
    return await res.json()
  } catch { return [] }
}
