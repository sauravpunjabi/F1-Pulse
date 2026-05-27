export type CareerStat = {
  titles: number
  wins: number
  podiums: number
  poles: number
  points: number
}

export const CAREER: Record<string, CareerStat> = {
  hamilton:   { titles: 7,  wins: 104, podiums: 197, poles: 104, points: 4639 },
  leclerc:    { titles: 0,  wins: 8,   podiums: 38,  poles: 28,  points: 1388 },
  norris:     { titles: 0,  wins: 6,   podiums: 28,  poles: 8,   points: 1024 },
  piastri:    { titles: 0,  wins: 5,   podiums: 19,  poles: 3,   points: 618  },
  russell:    { titles: 0,  wins: 5,   podiums: 24,  poles: 6,   points: 736  },
  antonelli:  { titles: 0,  wins: 3,   podiums: 8,   poles: 2,   points: 287  },
  verstappen: { titles: 4,  wins: 63,  podiums: 107, poles: 41,  points: 2586 },
  hadjar:     { titles: 0,  wins: 0,   podiums: 0,   poles: 0,   points: 0    },
  sainz:      { titles: 0,  wins: 6,   podiums: 45,  poles: 6,   points: 1536 },
  albon:      { titles: 0,  wins: 0,   podiums: 2,   poles: 0,   points: 349  },
  alonso:     { titles: 2,  wins: 32,  podiums: 106, poles: 22,  points: 2267 },
  stroll:     { titles: 0,  wins: 1,   podiums: 3,   poles: 1,   points: 386  },
  gasly:      { titles: 0,  wins: 1,   podiums: 4,   poles: 1,   points: 506  },
  colapinto:  { titles: 0,  wins: 0,   podiums: 0,   poles: 0,   points: 5    },
  ocon:       { titles: 0,  wins: 1,   podiums: 3,   poles: 0,   points: 441  },
  bearman:    { titles: 0,  wins: 0,   podiums: 1,   poles: 0,   points: 7    },
  lawson:     { titles: 0,  wins: 0,   podiums: 0,   poles: 0,   points: 21   },
  lindblad:   { titles: 0,  wins: 0,   podiums: 0,   poles: 0,   points: 0    },
  hulkenberg: { titles: 0,  wins: 0,   podiums: 0,   poles: 0,   points: 530  },
  bortoleto:  { titles: 0,  wins: 0,   podiums: 0,   poles: 0,   points: 0    },
  perez:      { titles: 0,  wins: 27,  podiums: 72,  poles: 4,   points: 1834 },
  bottas:     { titles: 0,  wins: 10,  podiums: 67,  poles: 20,  points: 1784 },
}
