import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import CustomSwitch from "../../components/CustomSwitch";
import BigScoreCard from "../../components/BigScoreCard";
import { COLORS } from "../../utils/colors";
import Head2Head from "../homeTabsScreens/Head2Head";
import LineUp from "../homeTabsScreens/LineUp";
import Stats from "../homeTabsScreens/Stats";
import Summary from "../homeTabsScreens/Summary";
const DetailsScreen = (params) => {
  const [detailsTab, setDetailsTab] = useState(1);

  // console.log("params", params.route.params.fixtureData);

  const scrollY = new Animated.Value(0);

  const HEADER_EXPANDED_HEIGHT = 0;
  const HEADER_COLLAPSED_HEIGHT = 0;
  const { width: SCREEN_WIDTH } = Dimensions.get("screen");

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: "clamp",
  });

  const data = {
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

  const statsData = {
    get: "fixtures/statistics",
    parameters: {
      fixture: "1049765",
    },
    errors: [],
    results: 2,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        team: {
          id: 6886,
          name: "Oţelul",
          logo: "https://media-2.api-sports.io/football/teams/6886.png",
        },
        statistics: [
          {
            type: "Shots on Goal",
            value: 5,
          },
          {
            type: "Shots off Goal",
            value: 6,
          },
          {
            type: "Total Shots",
            value: 12,
          },
          {
            type: "Blocked Shots",
            value: 1,
          },
          {
            type: "Shots insidebox",
            value: 6,
          },
          {
            type: "Shots outsidebox",
            value: 6,
          },
          {
            type: "Fouls",
            value: 19,
          },
          {
            type: "Corner Kicks",
            value: 3,
          },
          {
            type: "Offsides",
            value: null,
          },
          {
            type: "Ball Possession",
            value: "44%",
          },
          {
            type: "Yellow Cards",
            value: 2,
          },
          {
            type: "Red Cards",
            value: null,
          },
          {
            type: "Goalkeeper Saves",
            value: 3,
          },
          {
            type: "Total passes",
            value: 308,
          },
          {
            type: "Passes accurate",
            value: 188,
          },
          {
            type: "Passes %",
            value: "61%",
          },
          {
            type: "expected_goals",
            value: "1.64",
          },
        ],
      },
      {
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-3.api-sports.io/football/teams/2589.png",
        },
        statistics: [
          {
            type: "Shots on Goal",
            value: 4,
          },
          {
            type: "Shots off Goal",
            value: 3,
          },
          {
            type: "Total Shots",
            value: 9,
          },
          {
            type: "Blocked Shots",
            value: 2,
          },
          {
            type: "Shots insidebox",
            value: 3,
          },
          {
            type: "Shots outsidebox",
            value: 6,
          },
          {
            type: "Fouls",
            value: 15,
          },
          {
            type: "Corner Kicks",
            value: 3,
          },
          {
            type: "Offsides",
            value: null,
          },
          {
            type: "Ball Possession",
            value: "56%",
          },
          {
            type: "Yellow Cards",
            value: 5,
          },
          {
            type: "Red Cards",
            value: null,
          },
          {
            type: "Goalkeeper Saves",
            value: 4,
          },
          {
            type: "Total passes",
            value: 386,
          },
          {
            type: "Passes accurate",
            value: 288,
          },
          {
            type: "Passes %",
            value: "75%",
          },
          {
            type: "expected_goals",
            value: "0.57",
          },
        ],
      },
    ],
  };

  const onSelectSwitch = (value) => {
    setDetailsTab(value);
  };

  const StatsTab = <Stats data={statsData} />;
  const StatsTab2 = <Summary />;
  const StatsTab3 = <LineUp />;
  const StatsTab4 = <Head2Head />;

  return (
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
        {/*  header view! */}
        <View>
          <BigScoreCard data={data} page={"details"} />
        </View>
        <View style={styles.bottomWrapper}>
          <CustomSwitch
            selectionMode={1}
            option1={"Stats"}
            option2={"Summary"}
            option3={"Line-up"}
            option4={"H2H"}
            onSelectSwitch={onSelectSwitch}
          />
          <View style={styles.resultsContainer}>
            {detailsTab == 1 && <Text style={styles.content}>{StatsTab}</Text>}
            {detailsTab == 2 && <Text style={styles.content}>{StatsTab2}</Text>}
            {detailsTab == 3 && <Text style={styles.content}>{StatsTab3}</Text>}
            {detailsTab == 4 && <Text style={styles.content}>{StatsTab4}</Text>}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

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
  pageWrapperStyle: {
    // position: "relative",
    flexDirection: "column",
    flex: 1,
    // justifyContent: "center",
    // top: 50,
    left: "3%",
    height: "auto",
  },
  topPartWrapper: {
    // position: "relative",
    width: "100%",
    height: 150,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    backgroundColor: COLORS.purple,
  },
  scoreCardWrapper: {
    top: 50,
    left: "3%",
    height: "auto",
    // position: "relative",
  },

  bottonHalfWrapper: {
    // top: 50,
    height: "auto",
    // width: "100%",
    borderRadius: 10,
    // position: "relative",
  },

  customSwitchStyle: {
    // position: "absolute",
    // marginTop: 800,
    // backgroundColor: "red",
    // borderRadius: 10,
    // width: "94%",
    // top: 25,
    // height: 500,
  },

  bottomContainer: {
    // position: "absolute",
    // marginTop: 20,
    width: "100%",
  },
  statRowWrapper: {
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  bottomWrapper: {
    marginTop: 20,
    backgroundColor: "white",
    // justifyContent: "center",
    borderRadius: 15,

    // width: Dimensions.get("window").width,
    // width: "100%",
  },

  resultsContainer: {
    display: "flex",
    // backgroundColor: "lightblue",
    position: "relative",
    // justifyContent: ,
    marginHorizontal: 5,
  },
});
