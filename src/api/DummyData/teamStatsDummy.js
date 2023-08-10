export default teamStatsDummy = {
  get: "teams/statistics",
  parameters: {
    season: "2023",
    team: "559",
    league: "283",
  },
  errors: [],
  results: 11,
  paging: {
    current: 1,
    total: 1,
  },
  response: {
    league: {
      id: 283,
      name: "Liga I",
      country: "Romania",
      logo: "https://media-1.api-sports.io/football/leagues/283.png",
      flag: "https://media-3.api-sports.io/flags/ro.svg",
      season: 2023,
    },
    team: {
      id: 559,
      name: "FCSB",
      logo: "https://media-3.api-sports.io/football/teams/559.png",
    },
    form: "WWWW",
    fixtures: {
      played: {
        home: 2,
        away: 2,
        total: 4,
      },
      wins: {
        home: 2,
        away: 2,
        total: 4,
      },
      draws: {
        home: 0,
        away: 0,
        total: 0,
      },
      loses: {
        home: 0,
        away: 0,
        total: 0,
      },
    },
    goals: {
      for: {
        total: {
          home: 3,
          away: 5,
          total: 8,
        },
        average: {
          home: "1.5",
          away: "2.5",
          total: "2.0",
        },
        minute: {
          "0-15": {
            total: 1,
            percentage: "12.50%",
          },
          "16-30": {
            total: 2,
            percentage: "25.00%",
          },
          "31-45": {
            total: 2,
            percentage: "25.00%",
          },
          "46-60": {
            total: 1,
            percentage: "12.50%",
          },
          "61-75": {
            total: 1,
            percentage: "12.50%",
          },
          "76-90": {
            total: null,
            percentage: null,
          },
          "91-105": {
            total: 1,
            percentage: "12.50%",
          },
          "106-120": {
            total: null,
            percentage: null,
          },
        },
      },
      against: {
        total: {
          home: 1,
          away: 1,
          total: 2,
        },
        average: {
          home: "0.5",
          away: "0.5",
          total: "0.5",
        },
        minute: {
          "0-15": {
            total: null,
            percentage: null,
          },
          "16-30": {
            total: null,
            percentage: null,
          },
          "31-45": {
            total: null,
            percentage: null,
          },
          "46-60": {
            total: null,
            percentage: null,
          },
          "61-75": {
            total: 1,
            percentage: "50.00%",
          },
          "76-90": {
            total: 1,
            percentage: "50.00%",
          },
          "91-105": {
            total: null,
            percentage: null,
          },
          "106-120": {
            total: null,
            percentage: null,
          },
        },
      },
    },
    biggest: {
      streak: {
        wins: 4,
        draws: 0,
        loses: 0,
      },
      wins: {
        home: "2-1",
        away: "1-3",
      },
      loses: {
        home: null,
        away: null,
      },
      goals: {
        for: {
          home: 2,
          away: 3,
        },
        against: {
          home: 1,
          away: 1,
        },
      },
    },
    clean_sheet: {
      home: 1,
      away: 1,
      total: 2,
    },
    failed_to_score: {
      home: 0,
      away: 0,
      total: 0,
    },
    penalty: {
      scored: {
        total: 2,
        percentage: "100.00%",
      },
      missed: {
        total: 0,
        percentage: "0%",
      },
      total: 2,
    },
    lineups: [
      {
        formation: "4-3-3",
        played: 4,
      },
    ],
    cards: {
      yellow: {
        "0-15": {
          total: 1,
          percentage: "9.09%",
        },
        "16-30": {
          total: 1,
          percentage: "9.09%",
        },
        "31-45": {
          total: 1,
          percentage: "9.09%",
        },
        "46-60": {
          total: 1,
          percentage: "9.09%",
        },
        "61-75": {
          total: 2,
          percentage: "18.18%",
        },
        "76-90": {
          total: 3,
          percentage: "27.27%",
        },
        "91-105": {
          total: 2,
          percentage: "18.18%",
        },
        "106-120": {
          total: null,
          percentage: null,
        },
      },
      red: {
        "0-15": {
          total: null,
          percentage: null,
        },
        "16-30": {
          total: null,
          percentage: null,
        },
        "31-45": {
          total: null,
          percentage: null,
        },
        "46-60": {
          total: null,
          percentage: null,
        },
        "61-75": {
          total: null,
          percentage: null,
        },
        "76-90": {
          total: null,
          percentage: null,
        },
        "91-105": {
          total: null,
          percentage: null,
        },
        "106-120": {
          total: null,
          percentage: null,
        },
      },
    },
  },
};
