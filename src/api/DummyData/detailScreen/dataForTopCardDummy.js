export default dataForTopCardDummy = {
  fixture: {
    id: 1,
    referee: "G. Găman",
    timezone: "UTC",
    date: "2022-07-18T18:30:00+00:00",
    timestamp: 1658169000,
    periods: {
      first: 1658169000,
      second: 1658172600,
    },
    venue: {
      id: 1312,
      name: "Stadionul Ilie Oană",
      city: "Ploieşti",
    },
    status: {
      long: "Match Finished",
      short: "FT",
      elapsed: 90,
    },
  },
  league: {
    id: 283,
    name: "Liga I",
    country: "Romania",
    logo: "https://media-3.api-sports.io/football/leagues/283.png",
    flag: "https://media-2.api-sports.io/flags/ro.svg",
    season: 2022,
    round: "Regular Season - 1",
  },
  teams: {
    home: {
      id: 2598,
      name: "Petrolul Ploiesti",
      logo: "https://media-2.api-sports.io/football/teams/2598.png",
      winner: false,
    },
    away: {
      id: 2578,
      name: "FC Voluntari",
      logo: "https://media-3.api-sports.io/football/teams/2578.png",
      winner: true,
    },
  },
  goals: {
    home: 0,
    away: 1,
  },
  score: {
    halftime: {
      home: 0,
      away: 0,
    },
    fulltime: {
      home: 0,
      away: 1,
    },
    extratime: {
      home: null,
      away: null,
    },
    penalty: {
      home: null,
      away: null,
    },
  },
};
