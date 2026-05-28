export { TEAM_COLORS, DRIVER_WIKI, TEAM_WIKI, CIRCUIT_WIKI } from '@/lib/api'

// Re-exported so page files (app/drivers/[slug], app/teams/[slug]) compile without modification
export { TEAMS, DRIVERS, TEAM_MAP, DRIVER_MAP, TEAM_SLUGS, DRIVER_SLUGS } from '@/constants/grid'

/* ─── Team histories ──────────────────────────────────────────── */

export const TEAM_HISTORIES = {
  ferrari: {
    founded: '1929', base: 'Maranello, Italy',
    principal: 'Fred Vasseur', engine: 'Ferrari',
    fullName: 'Scuderia Ferrari HP',
    milestones: [
      { year: '1950', event: 'Enter F1 at Monaco GP — only team in every season since' },
      { year: '1952', event: 'Ascari wins first Drivers Championship', driver: 'Alberto Ascari' },
      { year: '1953', event: 'Ascari defends — back-to-back champion', driver: 'Alberto Ascari' },
      { year: '1975', event: 'Lauda wins first title', driver: 'Niki Lauda' },
      { year: '1976', event: 'Lauda survives Nürburgring inferno, loses title by one point', driver: 'Niki Lauda' },
      { year: '1977', event: 'Lauda wins second title', driver: 'Niki Lauda' },
      { year: '1979', event: 'Scheckter wins Drivers title', driver: 'Jody Scheckter' },
      { year: '2000', event: 'Schumacher ends 21-year title drought', driver: 'Michael Schumacher' },
      { year: '2002', event: 'Most dominant season — 11 wins from 17 races', driver: 'Michael Schumacher' },
      { year: '2004', event: 'Fifth consecutive title — 13 wins from 18 races', driver: 'Michael Schumacher' },
      { year: '2007', event: 'Räikkönen wins on final lap of final race', driver: 'Kimi Räikkönen' },
      { year: '2025', event: 'Hamilton joins alongside Leclerc', driver: 'Lewis Hamilton' },
    ],
  },
  mclaren: {
    founded: '1963', base: 'Woking, England',
    principal: 'Andrea Stella', engine: 'Mercedes',
    fullName: 'McLaren F1 Team',
    milestones: [
      { year: '1966', event: 'Bruce McLaren founds team, F1 debut' },
      { year: '1974', event: 'Fittipaldi wins first Drivers title', driver: 'Emerson Fittipaldi' },
      { year: '1984', event: 'Lauda beats Prost by half a point — closest title ever', driver: 'Niki Lauda' },
      { year: '1988', event: 'Senna and Prost win 15 of 16 races', driver: 'Ayrton Senna' },
      { year: '1991', event: 'Senna wins fourth and final title with McLaren', driver: 'Ayrton Senna' },
      { year: '1998', event: 'Häkkinen wins first title — McLaren return to glory', driver: 'Mika Häkkinen' },
      { year: '1999', event: 'Häkkinen defends title', driver: 'Mika Häkkinen' },
      { year: '2024', event: 'First Constructors Championship since 1998' },
      { year: '2025', event: 'Back-to-back Constructors Championships' },
    ],
  },
  mercedes: {
    founded: '1954', base: 'Brackley, England',
    principal: 'Toto Wolff', engine: 'Mercedes',
    fullName: 'Mercedes-AMG Petronas F1 Team',
    milestones: [
      { year: '1954', event: 'Mercedes enter F1 — Fangio wins', driver: 'Juan Manuel Fangio' },
      { year: '1955', event: 'Fangio wins again, Mercedes withdraw after Le Mans disaster' },
      { year: '2010', event: 'Mercedes return — buy Brawn GP' },
      { year: '2014', event: 'Hybrid era begins — Hamilton wins first title', driver: 'Lewis Hamilton' },
      { year: '2016', event: 'Rosberg wins title, retires 5 days later', driver: 'Nico Rosberg' },
      { year: '2020', event: 'Hamilton wins seventh — equals Schumacher record', driver: 'Lewis Hamilton' },
      { year: '2021', event: 'Eight consecutive Constructors Championships — all-time record' },
    ],
  },
  red_bull: {
    founded: '2005', base: 'Milton Keynes, England',
    principal: 'Laurent Mekies', engine: 'Honda RBPT',
    fullName: 'Oracle Red Bull Racing',
    milestones: [
      { year: '2005', event: 'Red Bull buy Jaguar Racing from Ford — F1 debut' },
      { year: '2009', event: 'First win — Vettel at Chinese GP', driver: 'Sebastian Vettel' },
      { year: '2010', event: 'Vettel wins — youngest champion ever at 23', driver: 'Sebastian Vettel' },
      { year: '2013', event: 'Vettel wins 13 consecutive races — all-time record', driver: 'Sebastian Vettel' },
      { year: '2021', event: 'Verstappen wins on final lap at Abu Dhabi', driver: 'Max Verstappen' },
      { year: '2023', event: '19 wins from 22 races — most dominant season ever', driver: 'Max Verstappen' },
      { year: '2024', event: 'Verstappen wins fourth consecutive title', driver: 'Max Verstappen' },
      { year: '2025', event: 'Horner sacked — Mekies appointed TP' },
    ],
  },
  williams: {
    founded: '1977', base: 'Grove, England',
    principal: 'James Vowles', engine: 'Mercedes',
    fullName: 'Atlassian Williams Racing',
    milestones: [
      { year: '1977', event: 'Frank Williams and Patrick Head found the team' },
      { year: '1980', event: 'Jones wins Drivers, Williams win first Constructors', driver: 'Alan Jones' },
      { year: '1992', event: 'Mansell wins 9 of 16 races — record at the time', driver: 'Nigel Mansell' },
      { year: '1993', event: 'Prost wins final title before retirement', driver: 'Alain Prost' },
      { year: '1997', event: 'Villeneuve wins — last Williams title to date', driver: 'Jacques Villeneuve' },
      { year: '2020', event: 'Frank Williams steps down — Dorilton Capital buy team' },
      { year: '2023', event: 'James Vowles appointed TP — revival begins' },
    ],
  },
  aston_martin: {
    founded: '1991', base: 'Silverstone, England',
    principal: 'Mike Krack', engine: 'Honda',
    fullName: 'Aston Martin Aramco F1 Team',
    milestones: [
      { year: '1991', event: 'Enters as Jordan Grand Prix' },
      { year: '1998', event: 'Damon Hill wins in wet Belgium', driver: 'Damon Hill' },
      { year: '2018', event: 'Lawrence Stroll buys team — Racing Point era' },
      { year: '2021', event: 'Rebrands as Aston Martin F1 Team' },
      { year: '2023', event: 'Alonso joins — strong start fades', driver: 'Fernando Alonso' },
      { year: '2026', event: 'Honda power unit partnership begins' },
    ],
  },
  alpine: {
    founded: '1981', base: 'Enstone, England',
    principal: 'Oliver Oakes', engine: 'Mercedes',
    fullName: 'BWT Alpine F1 Team',
    milestones: [
      { year: '1981', event: 'Enters as Toleman — Senna drives in 1984' },
      { year: '1986', event: 'Becomes Benetton Formula' },
      { year: '1994', event: 'Schumacher wins first title', driver: 'Michael Schumacher' },
      { year: '2000', event: 'Becomes Renault F1 Team' },
      { year: '2005', event: 'Alonso defeats Schumacher — first title', driver: 'Fernando Alonso' },
      { year: '2006', event: 'Alonso wins second title', driver: 'Fernando Alonso' },
      { year: '2021', event: 'Rebrands as Alpine F1 Team' },
      { year: '2026', event: 'Switches to Mercedes power — Gasly and Colapinto' },
    ],
  },
  haas: {
    founded: '2016', base: 'Kannapolis, USA',
    principal: 'Ayao Komatsu', engine: 'Ferrari',
    fullName: 'MoneyGram Haas F1 Team',
    milestones: [
      { year: '2016', event: 'First American team since 1986 — scores points on debut' },
      { year: '2018', event: 'Best season — 5th in Constructors' },
      { year: '2021', event: 'Schumacher Jr joins', driver: 'Mick Schumacher' },
      { year: '2024', event: 'Komatsu replaces Steiner as TP' },
      { year: '2026', event: 'Ocon and Bearman lineup' },
    ],
  },
  rb: {
    founded: '1985', base: 'Faenza, Italy',
    principal: 'Laurent Mekies', engine: 'Honda RBPT',
    fullName: 'Visa Cash App RB F1 Team',
    milestones: [
      { year: '1985', event: 'Enters as Minardi — Italian independent' },
      { year: '2006', event: 'Red Bull buys — rebrands as Toro Rosso' },
      { year: '2008', event: 'Vettel wins Monza — youngest winner ever at the time', driver: 'Sebastian Vettel' },
      { year: '2016', event: 'Verstappen promoted to Red Bull after one race', driver: 'Max Verstappen' },
      { year: '2020', event: 'Rebrands as AlphaTauri' },
      { year: '2024', event: 'Rebrands as Visa Cash App RB' },
      { year: '2026', event: 'Lawson and Lindblad lineup' },
    ],
  },
  sauber: {
    founded: '1993', base: 'Hinwil, Switzerland',
    principal: 'Mattia Binotto', engine: 'Audi',
    fullName: 'Audi F1 Team',
    milestones: [
      { year: '1993', event: 'Sauber enters F1 — Swiss independent' },
      { year: '2006', event: 'Becomes BMW Sauber — factory era' },
      { year: '2008', event: 'Kubica wins Canadian GP — first victory', driver: 'Robert Kubica' },
      { year: '2010', event: 'BMW withdraw — Sauber buys back' },
      { year: '2019', event: 'Rebrands as Alfa Romeo Racing' },
      { year: '2024', event: 'Audi acquires team' },
      { year: '2026', event: 'Full Audi factory debut — own power unit' },
    ],
  },
  cadillac: {
    founded: '2026', base: 'Pryor, Oklahoma, USA',
    principal: 'Graeme Lowdon', engine: 'Ferrari',
    fullName: 'Cadillac F1 Team',
    milestones: [
      { year: '2022', event: 'Andretti applies to enter F1 — rejected' },
      { year: '2023', event: 'GM partners with Andretti — Cadillac confirmed' },
      { year: '2024', event: 'FIA and F1 approve entry for 2026' },
      { year: '2025', event: 'Perez and Bottas confirmed as drivers' },
      { year: '2026', event: 'Cadillac debut — first new team since Haas 2016' },
    ],
  },
}

/* ─── F1 eras ─────────────────────────────────────────────────── */

export const F1_ERAS = [
  {
    years: '1950–1958', title: 'The Fangio Epoch', color: '#9CA3AF',
    desc: 'Juan Manuel Fangio won five world championships in seven seasons for four different constructors. A record of adaptability and genius that may never be matched.',
    champion: 'Juan Manuel Fangio',
  },
  {
    years: '1988–1994', title: 'Senna & Prost', color: '#E8002D',
    desc: 'McLaren-Honda dominance saw Prost and Senna win four consecutive titles. Their rivalry — brutal, brilliant, and ending in tragedy at Imola 1994 — defined an era forever.',
    champion: 'Ayrton Senna',
  },
  {
    years: '2000–2004', title: 'Schumacher Unstoppable', color: '#DC0000',
    desc: 'Michael Schumacher and Ferrari won five consecutive Drivers and six consecutive Constructors titles. The most complete team ever assembled in Formula 1 history.',
    champion: 'Michael Schumacher',
  },
  {
    years: '2007–2008', title: "Hamilton's Arrival", color: '#C0C0C0',
    desc: 'Lewis Hamilton became World Champion in 2008 by a single point — overtaking Timo Glock on the final lap at Interlagos. The most dramatic title in modern F1 history.',
    champion: 'Lewis Hamilton',
  },
  {
    years: '2014–2021', title: 'Silver Arrows Supremacy', color: '#27F4D2',
    desc: 'Mercedes won eight consecutive Constructors Championships. Hamilton claimed six of his seven world titles, cementing his legacy as the greatest of all time.',
    champion: 'Lewis Hamilton',
  },
  {
    years: '2021–2025', title: 'The Verstappen Era', color: '#3671C6',
    desc: 'Max Verstappen won four consecutive championships. His 2023 season — 19 wins from 22 races — is statistically the greatest single season in Formula 1 history.',
    champion: 'Max Verstappen',
  },
]
