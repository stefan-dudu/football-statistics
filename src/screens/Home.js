import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import LiveMatches from "../components/LiveMatches";
import { COLORS } from "../utils/colors";
import SmallScoreCard from "../components/SmallScoreCard";
import NextMatches from "../components/NextMatches";

const Home = ({ navigation }) => {
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

  const scrollY = new Animated.Value(0);

  const HEADER_EXPANDED_HEIGHT = 0;
  const HEADER_COLLAPSED_HEIGHT = 0;
  const { width: SCREEN_WIDTH } = Dimensions.get("screen");

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: "clamp",
  });

  const matchData = data.response.map((el) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            fixtureID: el?.fixture?.id,
            typeOfMatch: "to be played",
          })
        }
        key={el?.fixture?.id}
      >
        <SmallScoreCard data={el} />
      </TouchableOpacity>
    );
  });

  return (
    // <SafeAreaView style={styles.containerCollapse}>
    //   <View style={styles.containerCollapse}>
    //     <Animated.View
    //       style={[
    //         styles.headerCollapse,
    //         {
    //           height: animateHeaderHeight,
    //         },
    //       ]}
    //     >
    //       <View style={styles.containerWrapper}>
    //         <LiveMatches navigation={navigation} />
    //       </View>
    //     </Animated.View>

    //     {/* my scrollable thing */}
    //     <View style={styles.containerStyle}>
    //       <Text style={styles.textHeader}>Next matches</Text>
    //       <ScrollView
    //         style={styles.scrollView}
    //         scrollEventThrottle={16}
    //         onScroll={Animated.event(
    //           [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
    //           { useNativeDriver: false }
    //         )}
    //       >
    //         {matchData}
    //       </ScrollView>
    //     </View>
    //   </View>
    // </SafeAreaView>

    <View style={styles.container}>
      <Animated.View
        style={{
          height: headerHeight,
          width: SCREEN_WIDTH,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          paddingTop: HEADER_EXPANDED_HEIGHT,
        }}
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
        scrollEventThrottle={16}
      >
        <View style={styles.containerWrapper}>
          <LiveMatches navigation={navigation} />
        </View>

        <View style={styles.containerStyle}>
          <Text style={styles.textHeader}>Next matches</Text>
          <ScrollView>{matchData}</ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  // new strucutre

  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginVertical: 16,
  },

  //

  containerWrapper: {
    marginTop: 30,
    marginLeft: 10,
    backgroundColor: COLORS.backgroundGray,
  },

  matchOutline: {
    margin: 5,
    borderWidth: 3,
    borderColor: "blue",
    // width: "90%",
    height: 270,
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "lightblue",
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
    fontWeight: 600,
    marginBottom: 15,
  },

  // collapse
  containerCollapse: {
    flex: 1,
  },
  headerCollapse: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  //
});
