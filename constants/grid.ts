import type { Team, Driver } from '@/types'

/* ─── Teams ───────────────────────────────────────────────────── */
export const TEAMS: Team[] = [
  {
    id: 'ferrari', name: 'Scuderia Ferrari HP', color: '#E8002D',
    founded: 1950, base: 'Maranello, Italy', constructorTitles: 16, driverTitles: 15,
    drivers: ['hamilton', 'leclerc'], engine: 'Ferrari', teamPrincipal: 'Fred Vasseur',
    history: 'The only team to have competed in every Formula 1 season since 1950.',
  },
  {
    id: 'mclaren', name: 'McLaren F1 Team', color: '#FF8000',
    founded: 1966, base: 'Woking, England', constructorTitles: 8, driverTitles: 13,
    drivers: ['norris', 'piastri'], engine: 'Mercedes', teamPrincipal: 'Andrea Stella',
    history: 'Founded by Bruce McLaren in 1963. Back-to-back Constructors titles 2024–2025.',
  },
  {
    id: 'mercedes', name: 'Mercedes-AMG Petronas', color: '#27F4D2',
    founded: 2010, base: 'Brackley, England', constructorTitles: 8, driverTitles: 9,
    drivers: ['russell', 'antonelli'], engine: 'Mercedes', teamPrincipal: 'Toto Wolff',
    history: 'Eight consecutive Constructors Championships 2014–2021.',
  },
  {
    id: 'redbull', name: 'Oracle Red Bull Racing', color: '#3671C6',
    founded: 2005, base: 'Milton Keynes, England', constructorTitles: 6, driverTitles: 7,
    drivers: ['verstappen', 'hadjar'], engine: 'Honda RBPT', teamPrincipal: 'Laurent Mekies',
    history: 'Verstappen won four consecutive championships 2021–2024.',
  },
  {
    id: 'williams', name: 'Atlassian Williams Racing', color: '#005AFF',
    founded: 1977, base: 'Grove, England', constructorTitles: 9, driverTitles: 7,
    drivers: ['sainz', 'albon'], engine: 'Mercedes', teamPrincipal: 'James Vowles',
    history: 'All 9 Constructors Championships came between 1980–1997.',
  },
  {
    id: 'aston', name: 'Aston Martin Aramco', color: '#358C75',
    founded: 1991, base: 'Silverstone, England', constructorTitles: 0, driverTitles: 0,
    drivers: ['alonso', 'stroll'], engine: 'Honda', teamPrincipal: 'Mike Krack',
    history: 'Lineage: Jordan → Midland → Spyker → Force India → Racing Point → Aston Martin.',
  },
  {
    id: 'alpine', name: 'BWT Alpine F1 Team', color: '#FF87BC',
    founded: 1986, base: 'Enstone, England', constructorTitles: 2, driverTitles: 2,
    drivers: ['gasly', 'colapinto'], engine: 'Mercedes', teamPrincipal: 'Oliver Oakes',
    history: 'Lineage: Toleman → Benetton → Renault → Alpine. Switched to Mercedes PU for 2026.',
  },
  {
    id: 'haas', name: 'MoneyGram Haas F1 Team', color: '#B6BABD',
    founded: 2016, base: 'Kannapolis, USA', constructorTitles: 0, driverTitles: 0,
    drivers: ['ocon', 'bearman'], engine: 'Ferrari', teamPrincipal: 'Ayao Komatsu',
    history: 'First American-owned F1 team since 1986. Best result: P5 in 2018.',
  },
  {
    id: 'rbulls', name: 'Visa Cash App RB', color: '#6692FF',
    founded: 2005, base: 'Faenza, Italy', constructorTitles: 0, driverTitles: 0,
    drivers: ['lawson', 'lindblad'], engine: 'Honda RBPT', teamPrincipal: 'Laurent Mekies',
    history: 'Lineage: Minardi → Toro Rosso → AlphaTauri → RB. Red Bull junior team.',
  },
  {
    id: 'audi', name: 'Audi F1 Team', color: '#C0C0C0',
    founded: 2026, base: 'Hinwil, Switzerland', constructorTitles: 0, driverTitles: 0,
    drivers: ['hulkenberg', 'bortoleto'], engine: 'Audi', teamPrincipal: 'Jonathan Wheatley',
    history: 'Lineage: Sauber → BMW Sauber → Alfa Romeo → Audi. First factory season in 2026.',
  },
  {
    id: 'cadillac', name: 'Cadillac F1 Team', color: '#CC0033',
    founded: 2026, base: 'Pryor, Oklahoma, USA', constructorTitles: 0, driverTitles: 0,
    drivers: ['perez', 'bottas'], engine: 'Ferrari', teamPrincipal: 'Graeme Lowdon',
    history: 'Brand new team for 2026 — first new entry since Haas joined in 2016.',
  },
]

/* ─── Drivers ─────────────────────────────────────────────────── */
export const DRIVERS: Driver[] = [
  { number: 44, name: 'Lewis Hamilton',   firstName: 'Lewis',   lastName: 'Hamilton',   nationality: 'British',       flag: '🇬🇧', teamId: 'ferrari',  driverTitles: 7, slug: 'hamilton'   },
  { number: 16, name: 'Charles Leclerc',  firstName: 'Charles', lastName: 'Leclerc',    nationality: 'Monégasque',    flag: '🇲🇨', teamId: 'ferrari',  driverTitles: 0, slug: 'leclerc'    },
  { number:  4, name: 'Lando Norris',     firstName: 'Lando',   lastName: 'Norris',     nationality: 'British',       flag: '🇬🇧', teamId: 'mclaren',  driverTitles: 0, slug: 'norris'     },
  { number: 81, name: 'Oscar Piastri',    firstName: 'Oscar',   lastName: 'Piastri',    nationality: 'Australian',    flag: '🇦🇺', teamId: 'mclaren',  driverTitles: 0, slug: 'piastri'    },
  { number: 63, name: 'George Russell',   firstName: 'George',  lastName: 'Russell',    nationality: 'British',       flag: '🇬🇧', teamId: 'mercedes', driverTitles: 0, slug: 'russell'    },
  { number: 12, name: 'Kimi Antonelli',   firstName: 'Kimi',    lastName: 'Antonelli',  nationality: 'Italian',       flag: '🇮🇹', teamId: 'mercedes', driverTitles: 0, slug: 'antonelli', isRookie: false },
  { number:  1, name: 'Max Verstappen',   firstName: 'Max',     lastName: 'Verstappen', nationality: 'Dutch',         flag: '🇳🇱', teamId: 'redbull',  driverTitles: 4, slug: 'verstappen' },
  { number:  6, name: 'Isack Hadjar',     firstName: 'Isack',   lastName: 'Hadjar',     nationality: 'French',        flag: '🇫🇷', teamId: 'redbull',  driverTitles: 0, slug: 'hadjar',    isRookie: true },
  { number: 55, name: 'Carlos Sainz',     firstName: 'Carlos',  lastName: 'Sainz',      nationality: 'Spanish',       flag: '🇪🇸', teamId: 'williams', driverTitles: 0, slug: 'sainz'      },
  { number: 23, name: 'Alexander Albon',  firstName: 'Alexander',lastName:'Albon',      nationality: 'Thai',          flag: '🇹🇭', teamId: 'williams', driverTitles: 0, slug: 'albon'      },
  { number: 14, name: 'Fernando Alonso',  firstName: 'Fernando',lastName: 'Alonso',     nationality: 'Spanish',       flag: '🇪🇸', teamId: 'aston',    driverTitles: 2, slug: 'alonso'     },
  { number: 18, name: 'Lance Stroll',     firstName: 'Lance',   lastName: 'Stroll',     nationality: 'Canadian',      flag: '🇨🇦', teamId: 'aston',    driverTitles: 0, slug: 'stroll'     },
  { number: 10, name: 'Pierre Gasly',     firstName: 'Pierre',  lastName: 'Gasly',      nationality: 'French',        flag: '🇫🇷', teamId: 'alpine',   driverTitles: 0, slug: 'gasly'      },
  { number: 43, name: 'Franco Colapinto', firstName: 'Franco',  lastName: 'Colapinto',  nationality: 'Argentine',     flag: '🇦🇷', teamId: 'alpine',   driverTitles: 0, slug: 'colapinto'  },
  { number: 31, name: 'Esteban Ocon',     firstName: 'Esteban', lastName: 'Ocon',       nationality: 'French',        flag: '🇫🇷', teamId: 'haas',     driverTitles: 0, slug: 'ocon'       },
  { number: 87, name: 'Oliver Bearman',   firstName: 'Oliver',  lastName: 'Bearman',    nationality: 'British',       flag: '🇬🇧', teamId: 'haas',     driverTitles: 0, slug: 'bearman'    },
  { number: 30, name: 'Liam Lawson',      firstName: 'Liam',    lastName: 'Lawson',     nationality: 'New Zealander', flag: '🇳🇿', teamId: 'rbulls',   driverTitles: 0, slug: 'lawson'     },
  { number: 45, name: 'Arvid Lindblad',   firstName: 'Arvid',   lastName: 'Lindblad',   nationality: 'British',       flag: '🇬🇧', teamId: 'rbulls',   driverTitles: 0, slug: 'lindblad',  isRookie: true },
  { number: 27, name: 'Nico Hülkenberg',  firstName: 'Nico',    lastName: 'Hülkenberg', nationality: 'German',        flag: '🇩🇪', teamId: 'audi',     driverTitles: 0, slug: 'hulkenberg' },
  { number:  5, name: 'Gabriel Bortoleto',firstName: 'Gabriel', lastName: 'Bortoleto',  nationality: 'Brazilian',     flag: '🇧🇷', teamId: 'audi',     driverTitles: 0, slug: 'bortoleto'  },
  { number: 11, name: 'Sergio Pérez',     firstName: 'Sergio',  lastName: 'Pérez',      nationality: 'Mexican',       flag: '🇲🇽', teamId: 'cadillac', driverTitles: 0, slug: 'perez'      },
  { number: 77, name: 'Valtteri Bottas',  firstName: 'Valtteri',lastName: 'Bottas',     nationality: 'Finnish',       flag: '🇫🇮', teamId: 'cadillac', driverTitles: 0, slug: 'bottas'     },
]

/* ─── Lookup maps ─────────────────────────────────────────────── */
export const TEAM_MAP   = Object.fromEntries(TEAMS.map(t => [t.id, t]))   as Record<string, Team>
export const DRIVER_MAP = Object.fromEntries(DRIVERS.map(d => [d.slug, d])) as Record<string, Driver>
export const TEAM_SLUGS   = TEAMS.map(t => t.id)
export const DRIVER_SLUGS = DRIVERS.map(d => d.slug)
