export default TopAssistsData = {
  get: "players/topassists",
  parameters: {
    league: "283",
    season: "2023",
  },
  errors: [],
  results: 2,
  paging: {
    current: 0,
    total: 1,
  },
  response: [
    {
      player: {
        id: 43033,
        name: "F. Coman",
        firstname: "Florinel Teodor",
        lastname: "Coman",
        age: 25,
        birth: {
          date: "1998-04-10",
          place: "Brăila",
          country: "Romania",
        },
        nationality: "Romania",
        height: "182 cm",
        weight: "72 kg",
        injured: false,
        photo: "https://media-2.api-sports.io/football/players/43033.png",
      },
      statistics: [
        {
          team: {
            id: 559,
            name: "FCSB",
            logo: "https://media-3.api-sports.io/football/teams/559.png",
          },
          league: {
            id: 283,
            name: "Liga I",
            country: "Romania",
            logo: "https://media-3.api-sports.io/football/leagues/283.png",
            flag: "https://media-1.api-sports.io/flags/ro.svg",
            season: 2023,
          },
          games: {
            appearences: 2,
            lineups: 2,
            minutes: 123,
            number: null,
            position: "Attacker",
            rating: "8.000000",
            captain: false,
          },
          substitutes: {
            in: 0,
            out: 2,
            bench: 0,
          },
          shots: {
            total: 2,
            on: 2,
          },
          goals: {
            total: 2,
            conceded: 0,
            assists: 1,
            saves: null,
          },
          passes: {
            total: 17,
            key: 1,
            accuracy: 14,
          },
          tackles: {
            total: null,
            blocks: null,
            interceptions: null,
          },
          duels: {
            total: 9,
            won: 3,
          },
          dribbles: {
            attempts: 3,
            success: null,
            past: null,
          },
          fouls: {
            drawn: 3,
            committed: 1,
          },
          cards: {
            yellow: 0,
            yellowred: 0,
            red: 0,
          },
          penalty: {
            won: null,
            commited: null,
            scored: 1,
            missed: 0,
            saved: null,
          },
        },
      ],
    },
    {
      player: {
        id: 42569,
        name: "V. Țicu",
        firstname: "Valentin Constantin",
        lastname: "Țicu",
        age: 23,
        birth: {
          date: "2000-09-19",
          place: "Ploieşti",
          country: "Romania",
        },
        nationality: "Romania",
        height: null,
        weight: null,
        injured: false,
        photo: "https://media-2.api-sports.io/football/players/42569.png",
      },
      statistics: [
        {
          team: {
            id: 2598,
            name: "Petrolul Ploiesti",
            logo: "https://media-3.api-sports.io/football/teams/2598.png",
          },
          league: {
            id: 283,
            name: "Liga I",
            country: "Romania",
            logo: "https://media-2.api-sports.io/football/leagues/283.png",
            flag: "https://media-3.api-sports.io/flags/ro.svg",
            season: 2023,
          },
          games: {
            appearences: 1,
            lineups: 1,
            minutes: 90,
            number: null,
            position: "Defender",
            rating: "7.700000",
            captain: false,
          },
          substitutes: {
            in: 0,
            out: 0,
            bench: 0,
          },
          shots: {
            total: null,
            on: null,
          },
          goals: {
            total: 0,
            conceded: 0,
            assists: 1,
            saves: null,
          },
          passes: {
            total: 43,
            key: 3,
            accuracy: 37,
          },
          tackles: {
            total: 3,
            blocks: null,
            interceptions: 1,
          },
          duels: {
            total: 11,
            won: 6,
          },
          dribbles: {
            attempts: 3,
            success: 1,
            past: null,
          },
          fouls: {
            drawn: 2,
            committed: 2,
          },
          cards: {
            yellow: 0,
            yellowred: 0,
            red: 0,
          },
          penalty: {
            won: null,
            commited: null,
            scored: 0,
            missed: 0,
            saved: null,
          },
        },
      ],
    },
  ],
};
