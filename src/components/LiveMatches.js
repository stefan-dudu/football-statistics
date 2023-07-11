import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LiveMatches = () => {
  const dummyResponse = {
    get: "fixtures",
    parameters: {
      live: "all",
    },
    errors: [],
    results: 4,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        fixture: {
          id: 239625,
          referee: null,
          timezone: "UTC",
          date: "2020-02-06T14:00:00+00:00",
          timestamp: 1580997600,
          periods: {
            first: 1580997600,
            second: null,
          },
          venue: {
            id: 1887,
            name: "Stade Municipal",
            city: "Oued Zem",
          },
          status: {
            long: "Halftime",
            short: "HT",
            elapsed: 45,
          },
        },
        league: {
          id: 200,
          name: "Botola Pro",
          country: "Morocco",
          logo: "https://media.api-sports.io/football/leagues/115.png",
          flag: "https://media.api-sports.io/flags/ma.svg",
          season: 2019,
          round: "Regular Season - 14",
        },
        teams: {
          home: {
            id: 967,
            name: "Rapide Oued ZEM",
            logo: "https://media.api-sports.io/football/teams/967.png",
            winner: false,
          },
          away: {
            id: 968,
            name: "Wydad AC",
            logo: "https://media.api-sports.io/football/teams/968.png",
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
            away: 1,
          },
          fulltime: {
            home: null,
            away: null,
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
      },
      {
        fixture: {
          id: 239625,
          referee: null,
          timezone: "UTC",
          date: "2020-02-06T14:00:00+00:00",
          timestamp: 1580997600,
          periods: {
            first: 1580997600,
            second: null,
          },
          venue: {
            id: 1887,
            name: "Stade Municipal",
            city: "Oued Zem",
          },
          status: {
            long: "Halftime",
            short: "HT",
            elapsed: 45,
          },
        },
        league: {
          id: 200,
          name: "Botola Pro",
          country: "Morocco",
          logo: "https://media.api-sports.io/football/leagues/115.png",
          flag: "https://media.api-sports.io/flags/ma.svg",
          season: 2019,
          round: "Regular Season - 14",
        },
        teams: {
          home: {
            id: 967,
            name: "test home",
            logo: "https://media.api-sports.io/football/teams/967.png",
            winner: false,
          },
          away: {
            id: 968,
            name: "test away",
            logo: "https://media.api-sports.io/football/teams/968.png",
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
            away: 1,
          },
          fulltime: {
            home: null,
            away: null,
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
      },
    ],
  };

  // console.log("test", dummyResponse.response[0].teams);
  const myObject = dummyResponse.response[0];
  console.log("myObject", myObject);
  console.log("test");

  return (
    <View>
      <Text>LiveMatches</Text>
    </View>
  );
};

export default LiveMatches;

const styles = StyleSheet.create({});
