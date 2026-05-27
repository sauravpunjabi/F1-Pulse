export interface Milestone {
  year: string
  event: string
  driver?: string
}

export interface TeamHistoryData {
  wins: number
  podiums: number
  firstSeason: number
  milestones: Milestone[]
  icons: string[]
}

export const TEAM_HISTORIES: Record<string, TeamHistoryData> = {
  ferrari: {
    wins: 244,
    podiums: 800,
    firstSeason: 1950,
    milestones: [
      { year: '1950', event: 'Ferrari enters the inaugural Formula 1 World Championship. José Froilán González gives the Scuderia their first Grand Prix victory at Silverstone.' },
      { year: '1952', event: 'Alberto Ascari wins the first of two consecutive Drivers\' Championships.', driver: 'Alberto Ascari' },
      { year: '1953', event: 'Ascari defends his title — Ferrari\'s first back-to-back championship double.', driver: 'Alberto Ascari' },
      { year: '1975', event: 'Niki Lauda ends a 22-year drought for the Scuderia.', driver: 'Niki Lauda' },
      { year: '1977', event: 'Lauda claims his second title despite a near-fatal crash at the Nürburgring the prior year.', driver: 'Niki Lauda' },
      { year: '1979', event: 'Jody Scheckter wins the championship — Ferrari sweep both the Drivers\' and Constructors\' titles.', driver: 'Jody Scheckter' },
      { year: '2000', event: 'Michael Schumacher ends Ferrari\'s 21-year drought — the first of five consecutive Drivers\' Championships.', driver: 'Michael Schumacher' },
      { year: '2004', event: 'Schumacher wins his 7th world title. Ferrari claim their 6th consecutive Constructors\' Championship — a record for any team.', driver: 'Michael Schumacher' },
      { year: '2007', event: 'Kimi Räikkönen clinches the title on the final lap at Interlagos — Ferrari\'s most recent Drivers\' Championship.', driver: 'Kimi Räikkönen' },
      { year: '2026', event: 'Lewis Hamilton joins on a landmark deal, reuniting the most decorated driver with the most historic constructor.', driver: 'Lewis Hamilton' },
    ],
    icons: ['Niki Lauda', 'Michael Schumacher', 'Kimi Räikkönen', 'Gilles Villeneuve'],
  },

  mclaren: {
    wins: 186,
    podiums: 514,
    firstSeason: 1966,
    milestones: [
      { year: '1966', event: 'Bruce McLaren founds the team and enters Formula 1 for the first time.' },
      { year: '1974', event: 'Emerson Fittipaldi wins the Drivers\' Championship. McLaren take their first Constructors\' title.', driver: 'Emerson Fittipaldi' },
      { year: '1984', event: 'Niki Lauda beats Alain Prost by half a championship point — the tightest title fight in F1 history.', driver: 'Niki Lauda' },
      { year: '1988', event: 'Senna and Prost win 15 of 16 races — the most dominant single season McLaren has produced.', driver: 'Ayrton Senna' },
      { year: '1991', event: 'Senna wins his fourth and final Drivers\' Championship with McLaren.', driver: 'Ayrton Senna' },
      { year: '1998', event: 'Mika Häkkinen ends McLaren\'s championship drought with a dominant campaign.', driver: 'Mika Häkkinen' },
      { year: '1999', event: 'Häkkinen defends his title — McLaren\'s last back-to-back championship pair.', driver: 'Mika Häkkinen' },
      { year: '2024', event: 'McLaren win their first Constructors\' Championship in 26 years under Andrea Stella.' },
      { year: '2025', event: 'Back-to-back Constructors\' Championships — the most dominant McLaren era since the Senna years.' },
    ],
    icons: ['Ayrton Senna', 'Alain Prost', 'Mika Häkkinen', 'Lewis Hamilton'],
  },

  mercedes: {
    wins: 125,
    podiums: 290,
    firstSeason: 2010,
    milestones: [
      { year: '1954', event: 'Mercedes-Benz competes in their first F1 season, winning 9 of 12 races with Juan Manuel Fangio.' },
      { year: '1955', event: 'Fangio defends his title in silver. Mercedes withdraw from all motorsport following the Le Mans disaster.' },
      { year: '2010', event: 'Mercedes return to F1 as a full works team, signing Michael Schumacher and Nico Rosberg.' },
      { year: '2014', event: 'The turbo-hybrid era begins. Hamilton wins his second championship; Mercedes take their first Constructors\' title.', driver: 'Lewis Hamilton' },
      { year: '2016', event: 'Nico Rosberg wins the Drivers\' Championship — then retires five days after the season finale.', driver: 'Nico Rosberg' },
      { year: '2019', event: 'Mercedes win their 6th consecutive Constructors\' title. Hamilton claims his 6th Drivers\' championship.', driver: 'Lewis Hamilton' },
      { year: '2020', event: 'Hamilton equals Schumacher\'s record of 7 world championships. Dominant season despite COVID disruption.', driver: 'Lewis Hamilton' },
      { year: '2021', event: '8 consecutive Constructors\' Championships — a record in Formula 1 that may never be beaten.' },
    ],
    icons: ['Lewis Hamilton', 'Nico Rosberg', 'Michael Schumacher', 'Valtteri Bottas'],
  },

  redbull: {
    wins: 119,
    podiums: 293,
    firstSeason: 2005,
    milestones: [
      { year: '2005', event: 'Red Bull Racing enters Formula 1 after purchasing the Jaguar Racing team from Ford.' },
      { year: '2009', event: 'Vettel takes Red Bull\'s first race win at the Chinese Grand Prix — a future champion announces himself.' },
      { year: '2010', event: 'Sebastian Vettel wins Red Bull\'s first Drivers\' Championship at 23 — the youngest ever world champion.', driver: 'Sebastian Vettel' },
      { year: '2011', event: 'Vettel dominates with 15 wins from 19 races in the most complete season Red Bull had produced.', driver: 'Sebastian Vettel' },
      { year: '2013', event: 'Vettel wins 13 consecutive races and completes four back-to-back Drivers\' and Constructors\' titles.', driver: 'Sebastian Vettel' },
      { year: '2021', event: 'Verstappen wins a title decided on the final lap in Abu Dhabi — the most controversial championship of the hybrid era.', driver: 'Max Verstappen' },
      { year: '2022', event: 'Verstappen dominates from mid-season, winning 15 of 22 races.', driver: 'Max Verstappen' },
      { year: '2023', event: '19 wins from 22 races — statistically the greatest single season in Formula 1 history.', driver: 'Max Verstappen' },
      { year: '2024', event: 'Fourth consecutive Drivers\' Championship despite McLaren claiming the Constructors\' title.', driver: 'Max Verstappen' },
    ],
    icons: ['Sebastian Vettel', 'Max Verstappen', 'Mark Webber', 'Daniel Ricciardo'],
  },

  williams: {
    wins: 114,
    podiums: 313,
    firstSeason: 1977,
    milestones: [
      { year: '1977', event: 'Frank Williams and Patrick Head found Williams Grand Prix Engineering in Didcot.' },
      { year: '1979', event: 'Clay Regazzoni wins Williams\' first Grand Prix at Silverstone. Alan Jones follows with the Drivers\' title.' },
      { year: '1980', event: 'Alan Jones wins the Drivers\' Championship. Williams take their first Constructors\' title.', driver: 'Alan Jones' },
      { year: '1986', event: 'Nelson Piquet wins the championship in the Honda-powered FW11 — the Williams machine at its raw peak.', driver: 'Nelson Piquet' },
      { year: '1992', event: 'Nigel Mansell wins 9 of 16 races in the FW14B — one of the most dominant cars in F1 history.', driver: 'Nigel Mansell' },
      { year: '1993', event: 'Alain Prost claims his fourth and final world title with Williams.', driver: 'Alain Prost' },
      { year: '1996', event: 'Damon Hill wins the championship — completing a unique father-son legacy with Graham Hill.', driver: 'Damon Hill' },
      { year: '1997', event: 'Jacques Villeneuve wins the Drivers\' Championship — the last Williams title to date.', driver: 'Jacques Villeneuve' },
      { year: '2023', event: 'James Vowles joins as Team Principal, beginning a long-term strategic rebuild of the team.' },
    ],
    icons: ['Nigel Mansell', 'Alain Prost', 'Damon Hill', 'Jacques Villeneuve'],
  },

  aston: {
    wins: 4,
    podiums: 25,
    firstSeason: 1991,
    milestones: [
      { year: '1991', event: 'Jordan Grand Prix makes their debut. A young Michael Schumacher takes his first F1 start at Spa.', driver: 'Michael Schumacher' },
      { year: '1998', event: 'Damon Hill wins at Spa — Jordan\'s first Formula 1 victory. Ralf Schumacher takes second on the same lap.', driver: 'Damon Hill' },
      { year: '1999', event: 'Heinz-Harald Frentzen leads the championship mid-season. Jordan finish 3rd in the Constructors\'.', driver: 'Heinz-Harald Frentzen' },
      { year: '2003', event: 'Giancarlo Fisichella wins the Brazilian Grand Prix for Jordan in chaotic, rain-soaked conditions.', driver: 'Giancarlo Fisichella' },
      { year: '2018', event: 'Lawrence Stroll leads a consortium buyout of Force India. Team enters 2019 as Racing Point.' },
      { year: '2021', event: 'Rebranded as Aston Martin — the name\'s return to F1 for the first time since 1960. Vettel joins.', driver: 'Sebastian Vettel' },
      { year: '2023', event: 'Fernando Alonso joins and scores 8 podiums in the opening half of the season alone.', driver: 'Fernando Alonso' },
    ],
    icons: ['Michael Schumacher', 'Damon Hill', 'Ralf Schumacher', 'Fernando Alonso'],
  },

  alpine: {
    wins: 35,
    podiums: 97,
    firstSeason: 1981,
    milestones: [
      { year: '1981', event: 'Toleman Motorsport makes their Formula 1 debut at the San Marino Grand Prix.' },
      { year: '1984', event: 'A young Ayrton Senna drives the Toleman TG184 to near-victory in the Monaco Grand Prix rain.', driver: 'Ayrton Senna' },
      { year: '1986', event: 'Team rebrands as Benetton Formula following acquisition by the Benetton Group.' },
      { year: '1994', event: 'Michael Schumacher wins the first of two consecutive Drivers\' Championships with Benetton.', driver: 'Michael Schumacher' },
      { year: '1995', event: 'Schumacher and Benetton win back-to-back Drivers\' and Constructors\' titles.', driver: 'Michael Schumacher' },
      { year: '2001', event: 'Team transitions to Renault F1. A young Fernando Alonso signs as test driver.' },
      { year: '2005', event: 'Fernando Alonso becomes the youngest world champion at 24 years old.', driver: 'Fernando Alonso' },
      { year: '2006', event: 'Alonso defends his title. Renault win the Constructors\' Championship for the second consecutive year.', driver: 'Fernando Alonso' },
      { year: '2021', event: 'Team rebrands as Alpine F1. Alonso returns to the team that gave him both world titles.', driver: 'Fernando Alonso' },
      { year: '2026', event: 'Switch to Mercedes power units. Gasly and Colapinto head into the new regulations era.' },
    ],
    icons: ['Michael Schumacher', 'Fernando Alonso', 'Ayrton Senna', 'Jarno Trulli'],
  },

  haas: {
    wins: 0,
    podiums: 1,
    firstSeason: 2016,
    milestones: [
      { year: '2016', event: 'Haas becomes the first American-owned F1 team since 1986. Romain Grosjean scores points on debut in Australia.' },
      { year: '2018', event: 'Best Constructors\' Championship result — 5th place. Magnussen and Grosjean form a competitive midfield pairing.' },
      { year: '2021', event: 'A deliberate rebuild year. Mick Schumacher and Nikita Mazepin join as the team eyes the 2022 regulations reset.' },
      { year: '2022', event: 'Kevin Magnussen returns from a year away and scores a shock pole at the São Paulo Sprint Qualifying.' },
      { year: '2023', event: 'Nico Hülkenberg brings veteran consistency — scores points regularly and raises technical feedback quality.', driver: 'Nico Hülkenberg' },
      { year: '2026', event: 'Ocon and Bearman form the youngest Haas lineup to date, beginning a new generation for the team.' },
    ],
    icons: ['Romain Grosjean', 'Kevin Magnussen', 'Nico Hülkenberg', 'Mick Schumacher'],
  },

  rbulls: {
    wins: 2,
    podiums: 4,
    firstSeason: 1985,
    milestones: [
      { year: '1985', event: 'Minardi makes their Formula 1 debut at the Brazilian Grand Prix in Rio.' },
      { year: '2006', event: 'Red Bull acquires Minardi and relaunches the team as Scuderia Toro Rosso — their junior driver programme.' },
      { year: '2008', event: 'Sebastian Vettel wins the Italian Grand Prix at Monza aged 21 — the youngest F1 race winner in history at the time.', driver: 'Sebastian Vettel' },
      { year: '2016', event: 'Max Verstappen makes his F1 debut at 17 — the youngest driver in the sport\'s history.', driver: 'Max Verstappen' },
      { year: '2020', event: 'Pierre Gasly wins the Italian Grand Prix for AlphaTauri — the team\'s second race victory.', driver: 'Pierre Gasly' },
      { year: '2024', event: 'Rebranded as Visa Cash App RB — a new identity for Red Bull\'s evolving junior programme.' },
    ],
    icons: ['Sebastian Vettel', 'Max Verstappen', 'Pierre Gasly', 'Carlos Sainz'],
  },

  audi: {
    wins: 1,
    podiums: 4,
    firstSeason: 1993,
    milestones: [
      { year: '1993', event: 'Peter Sauber enters Formula 1 with the Sauber C12 — powered by a Ford Cosworth engine.' },
      { year: '2001', event: 'Sauber becomes a fully independent constructor. Kimi Räikkönen drives his first full F1 season.', driver: 'Kimi Räikkönen' },
      { year: '2006', event: 'BMW acquires the team, rebranding as BMW Sauber for a factory push backed by German engineering.' },
      { year: '2008', event: 'Robert Kubica wins the Canadian Grand Prix — the only Formula 1 win for a Polish driver.', driver: 'Robert Kubica' },
      { year: '2019', event: 'Becomes Alfa Romeo Racing — the biggest identity overhaul in the team\'s three-decade history.' },
      { year: '2024', event: 'Audi AG acquires majority stake. The team prepares for full factory status under the 2026 regulations.' },
      { year: '2026', event: 'Audi makes their Formula 1 debut as a manufacturer, competing with their own power unit for the first time.' },
    ],
    icons: ['Kimi Räikkönen', 'Robert Kubica', 'Felipe Massa', 'Nick Heidfeld'],
  },

  cadillac: {
    wins: 0,
    podiums: 0,
    firstSeason: 2026,
    milestones: [
      { year: '2023', event: 'Andretti Global submits application to the FIA for a new team entry starting 2025.' },
      { year: '2024', event: 'FIA grants an official entry licence. General Motors confirms Cadillac as the manufacturer partner.' },
      { year: '2026', event: 'Cadillac F1 Team makes their debut at the Australian Grand Prix — the first new team since Haas in 2016.' },
    ],
    icons: ['Sergio Pérez', 'Valtteri Bottas'],
  },
}
