import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../utils/colors";
import apiSports from "../api/api-sports";
import SmallScoreCard from "./SmallScoreCard";

const NextMatches = () => {
  const [loading, setLoading] = useState(true);
  const [nextMatches, setNextMatches] = useState(null);
  const [isError, setIsError] = useState("");

  const data = {
    response: [
      {
        fixture: {
          id: 8829564,
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
      },
      {
        fixture: {
          id: 8829565,
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
      },
      {
        fixture: {
          id: 8829566,
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
      },
      {
        fixture: {
          id: 8829567,
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
      },
      {
        fixture: {
          id: 8,
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
      },
      {
        fixture: {
          id: 8829561,
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
      },
      {
        fixture: {
          id: 882957,
          referee: "M. Bîrsan",
          timezone: "UTC",
          date: "2022-07-16T15:30:00+00:00",
          timestamp: 1657985400,
          periods: {
            first: 1657985400,
            second: 1657989000,
          },
          venue: {
            id: 2824,
            name: "Stadionul Municipal Nicolae Dobrin",
            city: "Piteşti",
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
            id: 2592,
            name: "Arges Pitesti",
            logo: "https://media-3.api-sports.io/football/teams/2592.png",
            winner: true,
          },
          away: {
            id: 2589,
            name: "Uta Arad",
            logo: "https://media-3.api-sports.io/football/teams/2589.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 2,
            away: 0,
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
          id: 882958,
          referee: "R. Petrescu",
          timezone: "UTC",
          date: "2022-07-15T18:30:00+00:00",
          timestamp: 1657909800,
          periods: {
            first: 1657909800,
            second: 1657913400,
          },
          venue: {
            id: 12282,
            name: "Complex Sportiv Craiova",
            city: "Craiova",
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
            id: 632,
            name: "Universitatea Craiova",
            logo: "https://media-2.api-sports.io/football/teams/632.png",
            winner: null,
          },
          away: {
            id: 2585,
            name: "Sepsi OSK Sfantu Gheorghe",
            logo: "https://media-3.api-sports.io/football/teams/2585.png",
            winner: null,
          },
        },
        goals: {
          home: 2,
          away: 2,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 2,
            away: 2,
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
          id: 882959,
          referee: "M. Barbu",
          timezone: "UTC",
          date: "2022-07-17T18:30:00+00:00",
          timestamp: 1658082600,
          periods: {
            first: 1658082600,
            second: 1658086200,
          },
          venue: {
            id: 1326,
            name: "Arena Naţională",
            city: "Bucureşti",
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
            id: 559,
            name: "FCSB",
            logo: "https://media-2.api-sports.io/football/teams/559.png",
            winner: null,
          },
          away: {
            id: 2599,
            name: "Universitatea Cluj",
            logo: "https://media-1.api-sports.io/football/teams/2599.png",
            winner: null,
          },
        },
        goals: {
          home: 1,
          away: 1,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 1,
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
      },
      {
        fixture: {
          id: 882960,
          referee: "S. Colțescu",
          timezone: "UTC",
          date: "2022-07-16T18:30:00+00:00",
          timestamp: 1657996200,
          periods: {
            first: 1657996200,
            second: 1657999800,
          },
          venue: {
            id: 1311,
            name: "Stadionul Dr. Constantin Rădulescu",
            city: "Cluj-Napoca",
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
            id: 2246,
            name: "CFR 1907 Cluj",
            logo: "https://media-2.api-sports.io/football/teams/2246.png",
            winner: true,
          },
          away: {
            id: 6231,
            name: "Rapid",
            logo: "https://media-2.api-sports.io/football/teams/6231.png",
            winner: false,
          },
        },
        goals: {
          home: 1,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 1,
            away: 0,
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

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 380;
  //Max Height of the Header
  const Header_Minimum_Height = 0;
  //Min Height of the Header

  const getNextMatches = async () => {
    try {
      const response = await apiSports.get("/fixtures", {
        params: {
          league: 283,
          season: 2023,
          next: 10,
        },
      });

      // console.log(
      //   "response?.data",
      //   response?.data.errors.requests.includes(
      //     "reached the request limit for the day"
      //   )
      // );
      response?.data.errors.requests.includes &&
        setIsError("Max limit for today been reached");
      response?.data.results > 0 && setNextMatches(response?.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNextMatches();
  }, []);

  const matchData = nextMatches?.response?.map((el) => {
    return <SmallScoreCard data={el} key={el?.fixture?.id} />;
  });

  return (
    <View style={styles.containerStyle}>
      {loading ? (
        // Show a loading spinner or message while waiting for data
        <Text>Loading...</Text>
      ) : nextMatches ? (
        // Render the data when it's available
        <ScrollView
          style={styles.scrollView}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: 0 } } }],
            { useNativeDriver: false }
          )}
        >
          {matchData}
        </ScrollView>
      ) : isError ? (
        // Handle the case when no data is available or an error occurred
        <Text>S-a atins limita pentru azi</Text>
      ) : (
        // Handle the case when no data is available or an error occurred
        <Text>Some other error</Text>
      )}
    </View>
  );
};

export default NextMatches;

const styles = StyleSheet.create({
  matchOutline: {
    margin: 5,
    borderWidth: 3,
    borderColor: "blue",
    // width: "90%",
    height: 270,
    flexDirection: "column",
    justifyContent: "center",

    flex: 1,
    bottom: 0,
  },

  containerStyle: {
    marginTop: 15,
    flexDirection: "column",
  },

  scrollView: {
    flexDirection: "column",
  },

  textHeader: {
    fontSize: 25,
    color: COLORS.titleDarkGray,
    fontWeight: "600",
    marginBottom: 15,
  },
});
