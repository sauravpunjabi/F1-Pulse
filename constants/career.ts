export type TimelineEntry = {
  year: string
  desc: string
  teamId: string
}

export type CareerData = {
  teams: string[]
  timeline: TimelineEntry[]
}

export const CAREER: Record<string, CareerData> = {
  hamilton: {
    teams: ['mclaren', 'mercedes', 'ferrari'],
    timeline: [
      { year: '2007', desc: 'McLaren debut — P2 in championship in rookie season, the best debut in F1 history', teamId: 'mclaren' },
      { year: '2008', desc: 'First World Championship, won by one point at Interlagos on the final lap', teamId: 'mclaren' },
      { year: '2013', desc: 'Joins Mercedes-AMG Petronas for a new era in silver', teamId: 'mercedes' },
      { year: '2014–20', desc: 'Six titles with Silver Arrows, tying Schumacher\'s all-time record', teamId: 'mercedes' },
      { year: '2025', desc: 'Joins Scuderia Ferrari HP — fulfilling a lifelong dream in Maranello', teamId: 'ferrari' },
    ],
  },
  verstappen: {
    teams: ['rbulls', 'redbull'],
    timeline: [
      { year: '2015', desc: 'Toro Rosso debut at 17 — youngest driver in Formula 1 history at the time', teamId: 'rbulls' },
      { year: '2016', desc: 'First race win at Spanish GP in Red Bull debut — youngest race winner ever in F1', teamId: 'redbull' },
      { year: '2021', desc: 'First World Championship in last-lap drama at Abu Dhabi Yas Marina', teamId: 'redbull' },
      { year: '2022–23', desc: 'Back-to-back dominant titles; 2023 season produced 19 wins from 22 races', teamId: 'redbull' },
      { year: '2024', desc: 'Fourth consecutive title, holding off McLaren\'s mid-season championship charge', teamId: 'redbull' },
    ],
  },
  norris: {
    teams: ['mclaren'],
    timeline: [
      { year: '2019', desc: 'McLaren debut at 19 — immediate top-10 pace and fan favourite from race one', teamId: 'mclaren' },
      { year: '2024', desc: 'First Formula 1 victory at the Miami Grand Prix — ending a long wait', teamId: 'mclaren' },
      { year: '2024', desc: 'Central figure in McLaren\'s Constructors\' Championship-winning season', teamId: 'mclaren' },
    ],
  },
  leclerc: {
    teams: ['audi', 'ferrari'],
    timeline: [
      { year: '2018', desc: 'Sauber debut — points finishes on debut showcased raw qualifying brilliance', teamId: 'audi' },
      { year: '2019', desc: 'Ferrari debut; consecutive pole-to-win victories at Spa and Monza', teamId: 'ferrari' },
      { year: '2022', desc: 'Title contender — led the championship for 8 rounds in Ferrari\'s SF-22', teamId: 'ferrari' },
      { year: '2025', desc: 'Hamilton joins Ferrari; Leclerc adapts to sharing the Prancing Horse spotlight', teamId: 'ferrari' },
    ],
  },
  piastri: {
    teams: ['mclaren'],
    timeline: [
      { year: '2023', desc: 'McLaren debut after back-to-back F2 and F3 titles — immediate race-winning pace', teamId: 'mclaren' },
      { year: '2024', desc: 'First victory at the Hungarian GP; two race wins in McLaren\'s championship season', teamId: 'mclaren' },
      { year: '2025', desc: 'Multiple wins and podiums as McLaren\'s primary title challenger', teamId: 'mclaren' },
    ],
  },
  russell: {
    teams: ['williams', 'mercedes'],
    timeline: [
      { year: '2019', desc: 'Williams debut — qualified every car to Q2 in a backmarker package', teamId: 'williams' },
      { year: '2020', desc: 'Stepped in for Hamilton at Sakhir GP — fastest in qualifying, near-win stolen by pit stop', teamId: 'mercedes' },
      { year: '2022', desc: 'Full Mercedes seat — won Brazilian GP on debut season with the Silver Arrows', teamId: 'mercedes' },
      { year: '2025', desc: 'Mercedes team leader after Hamilton\'s departure to Ferrari', teamId: 'mercedes' },
    ],
  },
  antonelli: {
    teams: ['mercedes'],
    timeline: [
      { year: '2025', desc: 'Mercedes debut at 18 — replaced seven-time champion Hamilton; three race wins', teamId: 'mercedes' },
      { year: '2026', desc: 'Continues with Mercedes as the sport\'s brightest young prospect', teamId: 'mercedes' },
    ],
  },
  sainz: {
    teams: ['rbulls', 'mclaren', 'ferrari', 'williams'],
    timeline: [
      { year: '2015', desc: 'Toro Rosso debut alongside Verstappen — Carlos held his own against Max', teamId: 'rbulls' },
      { year: '2019', desc: 'McLaren move — drove the team\'s resurgence back toward the front', teamId: 'mclaren' },
      { year: '2021', desc: 'Ferrari signing — four seasons as team leader alongside Leclerc', teamId: 'ferrari' },
      { year: '2024', desc: 'Singapore GP victory; four race wins in final Ferrari season', teamId: 'ferrari' },
      { year: '2025', desc: 'Williams signing — leading the British team\'s return to competitiveness', teamId: 'williams' },
    ],
  },
  albon: {
    teams: ['rbulls', 'redbull', 'williams'],
    timeline: [
      { year: '2019', desc: 'Toro Rosso debut; promoted to Red Bull mid-season for 2 years', teamId: 'redbull' },
      { year: '2022', desc: 'Williams return after a year as Red Bull reserve driver', teamId: 'williams' },
      { year: '2025', desc: 'Williams ace — consistent points scorer and team cornerstone in Grove', teamId: 'williams' },
    ],
  },
  alonso: {
    teams: ['alpine', 'mclaren', 'aston'],
    timeline: [
      { year: '2003', desc: 'Renault debut — youngest points scorer in F1 history at the time (19 years)', teamId: 'alpine' },
      { year: '2005', desc: 'First World Championship — youngest F1 champion ever at just 24 years old', teamId: 'alpine' },
      { year: '2006', desc: 'Second consecutive title with Renault, cementing a dynasty', teamId: 'alpine' },
      { year: '2007', desc: 'McLaren move — intense, infamous rivalry with rookie Hamilton', teamId: 'mclaren' },
      { year: '2023', desc: 'Aston Martin renaissance — 8 podiums in a single season comeback at 41', teamId: 'aston' },
    ],
  },
  stroll: {
    teams: ['williams', 'aston'],
    timeline: [
      { year: '2017', desc: 'Williams debut at 18 — Monza podium in rookie season, youngest podium finisher', teamId: 'williams' },
      { year: '2020', desc: 'Racing Point; pole position at wet Turkish Grand Prix in stunning fashion', teamId: 'aston' },
      { year: '2023', desc: 'Aston Martin post-rebrand, racing alongside two-time champion Alonso', teamId: 'aston' },
    ],
  },
  gasly: {
    teams: ['rbulls', 'redbull', 'alpine'],
    timeline: [
      { year: '2017', desc: 'Toro Rosso debut — consistent midfield pace earned Red Bull promotion', teamId: 'rbulls' },
      { year: '2019', desc: 'Red Bull stint and demotion; bounced back to win Monza with Toro Rosso', teamId: 'rbulls' },
      { year: '2022', desc: 'Alpine move as senior driver representing France in Formula 1', teamId: 'alpine' },
    ],
  },
  colapinto: {
    teams: ['williams', 'alpine'],
    timeline: [
      { year: '2024', desc: 'Williams mid-season debut — immediate pace from first weekend impressed entire paddock', teamId: 'williams' },
      { year: '2025', desc: 'Alpine signing — first full Formula 1 season with the French manufacturer', teamId: 'alpine' },
    ],
  },
  ocon: {
    teams: ['aston', 'alpine', 'haas'],
    timeline: [
      { year: '2016', desc: 'Force India debut after Manor — battled Pérez as a rookie with fire', teamId: 'aston' },
      { year: '2021', desc: 'Hungarian GP victory with Alpine — career breakthrough in chaotic conditions', teamId: 'alpine' },
      { year: '2025', desc: 'Haas signing — fresh chapter away from Alpine after seven years in France', teamId: 'haas' },
    ],
  },
  bearman: {
    teams: ['haas'],
    timeline: [
      { year: '2024', desc: 'Ferrari substitute debut in Saudi Arabia — P7 in first Formula 1 race ever', teamId: 'haas' },
      { year: '2025', desc: 'Full Haas seat — maiden podium at Bahrain Grand Prix in sophomore outing', teamId: 'haas' },
    ],
  },
  lawson: {
    teams: ['rbulls', 'redbull'],
    timeline: [
      { year: '2023', desc: 'AlphaTauri substitute — impressive points debut at Singapore, catching every eye', teamId: 'rbulls' },
      { year: '2025', desc: 'Red Bull promotion alongside Verstappen for the second half of the season', teamId: 'redbull' },
      { year: '2026', desc: 'Full season at Visa Cash App RB as undisputed team leader alongside Lindblad', teamId: 'rbulls' },
    ],
  },
  lindblad: {
    teams: ['rbulls'],
    timeline: [
      { year: '2026', desc: 'Formula 1 debut with Visa Cash App RB — youngest driver on the 2026 grid', teamId: 'rbulls' },
    ],
  },
  hulkenberg: {
    teams: ['williams', 'alpine', 'haas', 'audi'],
    timeline: [
      { year: '2010', desc: 'Williams debut — pole position at Interlagos in first ever Formula 1 season', teamId: 'williams' },
      { year: '2012', desc: 'Renault and Force India stints; renowned for consistent midfield excellence', teamId: 'alpine' },
      { year: '2023', desc: 'Haas return after two years as Aston Martin reserve — multiple top-6 results', teamId: 'haas' },
      { year: '2026', desc: 'Leads Audi\'s factory F1 debut as team\'s senior driver and anchor', teamId: 'audi' },
    ],
  },
  bortoleto: {
    teams: ['audi'],
    timeline: [
      { year: '2024', desc: 'F2 World Champion — dominant title performance earned Audi factory seat', teamId: 'audi' },
      { year: '2026', desc: 'Formula 1 debut with Audi — first Brazilian on the F1 grid since Nasr in 2016', teamId: 'audi' },
    ],
  },
  perez: {
    teams: ['audi', 'mclaren', 'aston', 'redbull', 'cadillac'],
    timeline: [
      { year: '2011', desc: 'Sauber debut — P7 at Australian GP on his very first Formula 1 start', teamId: 'audi' },
      { year: '2013', desc: 'McLaren stint — three podium finishes with the Woking outfit', teamId: 'mclaren' },
      { year: '2020', desc: 'Bahrain podium with Racing Point; signed by Red Bull Racing for 2021', teamId: 'aston' },
      { year: '2023', desc: 'Career peak — 9 race wins, P2 in World Drivers\' Championship', teamId: 'redbull' },
      { year: '2026', desc: 'Cadillac move — leads GM\'s historic Formula 1 debut season', teamId: 'cadillac' },
    ],
  },
  bottas: {
    teams: ['williams', 'mercedes', 'audi', 'cadillac'],
    timeline: [
      { year: '2013', desc: 'Williams debut — consistent points scorer and fan favourite from season one', teamId: 'williams' },
      { year: '2017', desc: 'Mercedes move — 10 race victories alongside Hamilton in era of dominance', teamId: 'mercedes' },
      { year: '2022', desc: 'Alfa Romeo/Sauber team leader — senior statesman role in Hinwil', teamId: 'audi' },
      { year: '2026', desc: 'Cadillac signing — brings championship experience to GM\'s new F1 programme', teamId: 'cadillac' },
    ],
  },
  hadjar: {
    teams: ['redbull'],
    timeline: [
      { year: '2026', desc: 'Red Bull debut — junior promotion after F2 runner-up; partnered with Verstappen', teamId: 'redbull' },
    ],
  },
}
