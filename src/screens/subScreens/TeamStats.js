import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const TeamStats = ({ params }) => {
  const teamName = params?.name;
  const teamId = params?.id;

  // console.log("params team stats", params);
  // console.log("teamName", teamName);
  // console.log("teamId", teamId);

  const teamInfo = {
    get: "teams",
    parameters: {
      id: "33",
    },
    errors: [],
    results: 1,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          code: "MUN",
          country: "England",
          founded: 1878,
          national: false,
          logo: "https://media-3.api-sports.io/football/teams/33.png",
        },
        venue: {
          id: 556,
          name: "Old Trafford",
          address: "Sir Matt Busby Way",
          city: "Manchester",
          capacity: 76212,
          surface: "grass",
          image: "https://media-2.api-sports.io/football/venues/556.png",
        },
      },
    ],
  };

  const teamInfoData = teamInfo.response[0];

  const teamStat = {
    get: "teams/statistics",
    parameters: {
      season: "2022",
      team: "2598",
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
        season: 2022,
      },
      team: {
        id: 2598,
        name: "Petrolul Ploiesti",
        logo: "https://media-2.api-sports.io/football/teams/2598.png",
      },
      form: "LLDWWWDWWLLLLLWWWLWLDLLLWLLLLWWWWLDWWLL",
      fixtures: {
        played: {
          home: 20,
          away: 19,
          total: 39,
        },
        wins: {
          home: 9,
          away: 7,
          total: 16,
        },
        draws: {
          home: 3,
          away: 1,
          total: 4,
        },
        loses: {
          home: 8,
          away: 11,
          total: 19,
        },
      },
      goals: {
        for: {
          total: {
            home: 21,
            away: 16,
            total: 37,
          },
          average: {
            home: "1.1",
            away: "0.8",
            total: "0.9",
          },
          minute: {
            "0-15": {
              total: 7,
              percentage: "18.42%",
            },
            "16-30": {
              total: 7,
              percentage: "18.42%",
            },
            "31-45": {
              total: 3,
              percentage: "7.89%",
            },
            "46-60": {
              total: 7,
              percentage: "18.42%",
            },
            "61-75": {
              total: 5,
              percentage: "13.16%",
            },
            "76-90": {
              total: 7,
              percentage: "18.42%",
            },
            "91-105": {
              total: 2,
              percentage: "5.26%",
            },
            "106-120": {
              total: null,
              percentage: null,
            },
          },
        },
        against: {
          total: {
            home: 21,
            away: 32,
            total: 53,
          },
          average: {
            home: "1.1",
            away: "1.7",
            total: "1.4",
          },
          minute: {
            "0-15": {
              total: 10,
              percentage: "19.23%",
            },
            "16-30": {
              total: 6,
              percentage: "11.54%",
            },
            "31-45": {
              total: 2,
              percentage: "3.85%",
            },
            "46-60": {
              total: 7,
              percentage: "13.46%",
            },
            "61-75": {
              total: 9,
              percentage: "17.31%",
            },
            "76-90": {
              total: 9,
              percentage: "17.31%",
            },
            "91-105": {
              total: 9,
              percentage: "17.31%",
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
          draws: 1,
          loses: 5,
        },
        wins: {
          home: "2-0",
          away: "2-3",
        },
        loses: {
          home: "2-5",
          away: "5-0",
        },
        goals: {
          for: {
            home: 2,
            away: 3,
          },
          against: {
            home: 5,
            away: 5,
          },
        },
      },
      clean_sheet: {
        home: 8,
        away: 5,
        total: 13,
      },
      failed_to_score: {
        home: 6,
        away: 7,
        total: 13,
      },
      penalty: {
        scored: {
          total: 5,
          percentage: "100.00%",
        },
        missed: {
          total: 0,
          percentage: "0%",
        },
        total: 5,
      },
      lineups: [
        {
          formation: "3-4-2-1",
          played: 11,
        },
        {
          formation: "3-5-2",
          played: 10,
        },
        {
          formation: "3-4-3",
          played: 5,
        },
        {
          formation: "4-2-3-1",
          played: 4,
        },
        {
          formation: "3-5-1-1",
          played: 2,
        },
        {
          formation: "5-4-1",
          played: 2,
        },
        {
          formation: "3-4-1-2",
          played: 2,
        },
        {
          formation: "4-4-2",
          played: 1,
        },
      ],
      cards: {
        yellow: {
          "0-15": {
            total: 3,
            percentage: "3.75%",
          },
          "16-30": {
            total: 9,
            percentage: "11.25%",
          },
          "31-45": {
            total: 8,
            percentage: "10.00%",
          },
          "46-60": {
            total: 21,
            percentage: "26.25%",
          },
          "61-75": {
            total: 10,
            percentage: "12.50%",
          },
          "76-90": {
            total: 18,
            percentage: "22.50%",
          },
          "91-105": {
            total: 11,
            percentage: "13.75%",
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
            total: 1,
            percentage: "14.29%",
          },
          "61-75": {
            total: 3,
            percentage: "42.86%",
          },
          "76-90": {
            total: 2,
            percentage: "28.57%",
          },
          "91-105": {
            total: 1,
            percentage: "14.29%",
          },
          "106-120": {
            total: null,
            percentage: null,
          },
        },
      },
    },
  };

  return (
    <View>
      <Image
        style={styles.teamLogo}
        source={require("../../../assets/teamLogo3.png")}
      />
      <Text>{teamInfoData.team.name}</Text>
      <Text>Fondat: {teamInfoData.team.founded}</Text>
      <Text>Diminutiv: {teamInfoData.team.code}</Text>
      <Image
        style={styles.venueStyle}
        source={require("../../../assets/stadiumPhoto.png")}
      />
      <Text>
        Stadion: {teamInfoData.venue.name}, {teamInfoData.venue.city}
      </Text>
      <Text>Capacitate: {teamInfoData.venue.capacity}</Text>
    </View>
  );
};

export default TeamStats;

const styles = StyleSheet.create({
  teamLogo: {
    width: 60,
    height: 60,
    // borderRadius: 50,
    resizeMode: "stretch",
  },
  venueStyle: {
    // width: 60,
    // height: 60,
    // borderRadius: 50,
    resizeMode: "stretch",
  },
});