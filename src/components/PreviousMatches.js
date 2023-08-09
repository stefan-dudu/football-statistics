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
import SmallScoreCardNextMatches from "./SmallScoreCardNextMatches";
import LimitAlert from "../screens/settingsScreens/LimitAlert";
import SmallScoreCardPreviousMatches from "./SmallScoreCardPreviousMatches";

const PreviousMatches = () => {
  const [loading, setLoading] = useState(true);
  const [previousMatches, setPreviousMatches] = useState(null);
  const [isError, setIsError] = useState("");
  const scrollY = new Animated.Value(0);

  const dummyData = {
    get: "fixtures",
    parameters: {
      league: "283",
      season: "2023",
      last: "10",
    },
    errors: [],
    results: 10,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        fixture: {
          id: 1049784,
          referee: "Istvan Kovacs, Romania",
          timezone: "UTC",
          date: "2023-07-31T18:30:00+00:00",
          timestamp: 1690828200,
          periods: {
            first: 1690828200,
            second: 1690831800,
          },
          venue: {
            id: 19612,
            name: "Stadionul Arcul de Triumf",
            city: "București",
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
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 3",
        },
        teams: {
          home: {
            id: 635,
            name: "Dinamo Bucuresti",
            logo: "https://media-3.api-sports.io/football/teams/635.png",
            winner: false,
          },
          away: {
            id: 2585,
            name: "Sepsi OSK Sfantu Gheorghe",
            logo: "https://media-1.api-sports.io/football/teams/2585.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 3,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 0,
            away: 3,
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
          id: 1049787,
          referee: "Bogdan Dumitrache, Romania",
          timezone: "UTC",
          date: "2023-07-31T15:30:00+00:00",
          timestamp: 1690817400,
          periods: {
            first: 1690817400,
            second: 1690821000,
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
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 3",
        },
        teams: {
          home: {
            id: 2598,
            name: "Petrolul Ploiesti",
            logo: "https://media-3.api-sports.io/football/teams/2598.png",
            winner: false,
          },
          away: {
            id: 2578,
            name: "FC Voluntari",
            logo: "https://media-1.api-sports.io/football/teams/2578.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 2,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 0,
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
          id: 1049782,
          referee: "Radu Marian Petrescu, Romania",
          timezone: "UTC",
          date: "2023-07-30T18:30:00+00:00",
          timestamp: 1690741800,
          periods: {
            first: 1690741800,
            second: 1690745400,
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
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 3",
        },
        teams: {
          home: {
            id: 2246,
            name: "CFR 1907 Cluj",
            logo: "https://media-2.api-sports.io/football/teams/2246.png",
            winner: null,
          },
          away: {
            id: 632,
            name: "Universitatea Craiova",
            logo: "https://media-3.api-sports.io/football/teams/632.png",
            winner: null,
          },
        },
        goals: {
          home: 1,
          away: 1,
        },
        score: {
          halftime: {
            home: 1,
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
          id: 1049788,
          referee: "Rares George Vidican, Romania",
          timezone: "UTC",
          date: "2023-07-30T15:30:00+00:00",
          timestamp: 1690731000,
          periods: {
            first: 1690731000,
            second: 1690734600,
          },
          venue: {
            id: 1324,
            name: "Stadionul Central",
            city: "Ovidiu",
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
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 3",
        },
        teams: {
          home: {
            id: 2596,
            name: "Farul Constanta",
            logo: "https://media-2.api-sports.io/football/teams/2596.png",
            winner: false,
          },
          away: {
            id: 2583,
            name: "Politehnica Iasi",
            logo: "https://media-1.api-sports.io/football/teams/2583.png",
            winner: true,
          },
        },
        goals: {
          home: 1,
          away: 3,
        },
        score: {
          halftime: {
            home: 1,
            away: 2,
          },
          fulltime: {
            home: 1,
            away: 3,
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
          id: 1049783,
          referee: "Iulian Dima, Romania",
          timezone: "UTC",
          date: "2023-07-29T18:30:00+00:00",
          timestamp: 1690655400,
          periods: {
            first: 1690655400,
            second: 1690659000,
          },
          venue: {
            id: 5026,
            name: "Stadionul Oţelul",
            city: "Galaţi",
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
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 3",
        },
        teams: {
          home: {
            id: 6886,
            name: "Oţelul",
            logo: "https://media-1.api-sports.io/football/teams/6886.png",
            winner: false,
          },
          away: {
            id: 559,
            name: "FCSB",
            logo: "https://media-2.api-sports.io/football/teams/559.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 2,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 0,
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
          id: 1049781,
          referee: "Marian Barbu, Romania",
          timezone: "UTC",
          date: "2023-07-29T15:30:00+00:00",
          timestamp: 1690644600,
          periods: {
            first: 1690644600,
            second: 1690648200,
          },
          venue: {
            id: 1894,
            name: "Stadionul Municipal",
            city: "Sibiu",
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
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 3",
        },
        teams: {
          home: {
            id: 2579,
            name: "AFC Hermannstadt",
            logo: "https://media-2.api-sports.io/football/teams/2579.png",
            winner: true,
          },
          away: {
            id: 2589,
            name: "Uta Arad",
            logo: "https://media-1.api-sports.io/football/teams/2589.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 1,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 2,
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
          id: 1049786,
          referee: "Sorin Antonie, Romania",
          timezone: "UTC",
          date: "2023-07-28T18:30:00+00:00",
          timestamp: 1690569000,
          periods: {
            first: 1690569000,
            second: 1690572600,
          },
          venue: {
            id: 19516,
            name: "Superbet Arena-Giulești",
            city: "București",
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
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 3",
        },
        teams: {
          home: {
            id: 6231,
            name: "Rapid",
            logo: "https://media-3.api-sports.io/football/teams/6231.png",
            winner: null,
          },
          away: {
            id: 2581,
            name: "FC Botosani",
            logo: "https://media-2.api-sports.io/football/teams/2581.png",
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
          id: 1049785,
          referee: "Szabolcs Kovacs, Romania",
          timezone: "UTC",
          date: "2023-07-28T15:30:00+00:00",
          timestamp: 1690558200,
          periods: {
            first: 1690558200,
            second: 1690561800,
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
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 3",
        },
        teams: {
          home: {
            id: 6910,
            name: "U Craiova 1948",
            logo: "https://media-1.api-sports.io/football/teams/6910.png",
            winner: false,
          },
          away: {
            id: 2599,
            name: "Universitatea Cluj",
            logo: "https://media-1.api-sports.io/football/teams/2599.png",
            winner: true,
          },
        },
        goals: {
          home: 3,
          away: 4,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 3,
            away: 4,
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
          id: 1049780,
          referee: "Ovidiu Hategan, Romania",
          timezone: "UTC",
          date: "2023-07-24T18:30:00+00:00",
          timestamp: 1690223400,
          periods: {
            first: 1690223400,
            second: 1690227000,
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
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 2",
        },
        teams: {
          home: {
            id: 632,
            name: "Universitatea Craiova",
            logo: "https://media-3.api-sports.io/football/teams/632.png",
            winner: null,
          },
          away: {
            id: 6886,
            name: "Oţelul",
            logo: "https://media-3.api-sports.io/football/teams/6886.png",
            winner: null,
          },
        },
        goals: {
          home: 0,
          away: 0,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 0,
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
          id: 1049779,
          referee: "Florin Andrei, Romania",
          timezone: "UTC",
          date: "2023-07-24T15:30:00+00:00",
          timestamp: 1690212600,
          periods: {
            first: 1690212600,
            second: 1690216200,
          },
          venue: {
            id: 1309,
            name: "Stadionul Municipal",
            city: "Botoşani",
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
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 2",
        },
        teams: {
          home: {
            id: 2581,
            name: "FC Botosani",
            logo: "https://media-1.api-sports.io/football/teams/2581.png",
            winner: null,
          },
          away: {
            id: 2598,
            name: "Petrolul Ploiesti",
            logo: "https://media-3.api-sports.io/football/teams/2598.png",
            winner: null,
          },
        },
        goals: {
          home: 1,
          away: 1,
        },
        score: {
          halftime: {
            home: 1,
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
    ],
  };

  const getPreviousMatches = async () => {
    try {
      const response = await apiSports.get("/fixtures", {
        params: {
          league: 283,
          season: 2023,
          last: 10,
        },
      });

      // console.log(
      //   "response?.data",
      //   response?.data.errors.requests.includes(
      //     "reached the request limit for the day"
      //   )
      // );
      response?.data?.errors?.requests?.includes &&
        setIsError("Max limit for today been reached");
      response?.data.results > 0 && setPreviousMatches(response?.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPreviousMatches();
  }, []);

  const matchData = previousMatches?.response?.map((el) => {
    return <SmallScoreCardPreviousMatches data={el} key={el?.fixture?.id} />;
  });

  return (
    <View style={styles.containerStyle}>
      {loading ? (
        // Show a loading spinner or message while waiting for data
        <Text>Loading...</Text>
      ) : previousMatches ? (
        // Render the data when it's available
        <ScrollView
          style={styles.scrollView}
          scrollEventThrottle={16}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { y: 0 } } }],
          //   { useNativeDriver: false }
          // )}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          {matchData}
        </ScrollView>
      ) : isError ? (
        // Handle the case when no data is available or an error occurred
        <LimitAlert />
      ) : (
        // <Text>S-a atins limita pentru azi</Text>
        // Handle the case when no data is available or an error occurred
        <Text>Some other error</Text>
      )}
    </View>
  );
};

export default PreviousMatches;

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
