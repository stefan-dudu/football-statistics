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
import React, { useState, useEffect } from "react";
import CustomSwitch from "../../components/CustomSwitch";
import BigScoreCard from "../../components/BigScoreCard";
import { COLORS } from "../../utils/colors";
import Head2Head from "../homeTabsScreens/Head2Head";
import LineUp from "../homeTabsScreens/LineUp";
import Stats from "../homeTabsScreens/Stats";
import Summary from "../homeTabsScreens/Summary";
import ScreenHeader from "../../components/ScreenHeader";
import ScreenHeaderLeague from "../../components/ScreenHeaderLeague";
import apiSports from "../../api/api-sports";

const DetailsScreen = (params) => {
  const [detailsTab, setDetailsTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const [finishedFixtureData, setFinshedFixtureData] = useState(null);
  const [topCardData, setTopCardData] = useState(null);
  const [statisticsData, setStatisticsData] = useState(null);
  const [isError, setIsError] = useState("");

  const liveMatchFixtureID = params?.route?.params?.fixtureData?.fixture?.id;
  const finishedMatchFixtureID = params?.route?.params?.finishedMatchID;

  // console.log("liveMatchFixtureID", liveMatchFixtureID);
  // console.log("finishedMatchFixtureID", finishedMatchFixtureID);
  // console.log("params", params.route.params.fixtureData);

  const fetchFinishedFixtureData = async () => {
    try {
      // Use Promise.all to fetch data from multiple APIs concurrently
      const [response1, response2] = await Promise.all([
        apiSports.get(`/fixtures/?id=${finishedMatchFixtureID}`),
        apiSports.get(`/fixtures/statistics?fixture=${finishedMatchFixtureID}`),
      ]);

      response1?.data?.errors?.requests?.includes &&
        setIsError("Max limit for today been reached");
      // console.log("response1", response1.data.response[0]);
      // console.log("response2?.data.results", response2?.data);

      // console.log("response1", response1.data.response[0]);

      // Set the state variables with the fetched data
      response1?.data.results > 0 && setTopCardData(response1.data.response[0]);
      response2?.data.results > 0 && setStatisticsData(response2.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
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

  const dataForTopCardDummy = {
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

  const statsDataDummy = {
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

  // console.log("statisticsData", statisticsData);

  const StatsTab = <Stats data={statisticsData} />;
  const StatsTab2 = <Summary fixtureID={topCardData?.fixture?.id} />;
  const StatsTab3 = <LineUp fixtureID={topCardData?.fixture?.id} />;
  const StatsTab4 = (
    <Head2Head
      homeTeamId={topCardData?.teams?.home?.id}
      awayTeamId={topCardData?.teams?.away?.id}
    />
  );

  useEffect(() => {
    liveMatchFixtureID &&
      console.log("will fetch liveMatchFixtureID data", liveMatchFixtureID);
    finishedMatchFixtureID && fetchFinishedFixtureData();
    // console.log("will fetch finishedMatchFixtureID", finishedMatchFixtureID);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: headerHeight,
          width: SCREEN_WIDTH,
          // position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          padding: 10,
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

        {loading ? (
          // Show a loading spinner or message while waiting for data
          <Text>Loading...</Text>
        ) : topCardData ? (
          // Render the data when it's available
          <View>
            <ScreenHeaderLeague />
            <BigScoreCard data={topCardData} page={"details"} />
          </View>
        ) : // <Text> If all works fine</Text>
        isError ? (
          // Handle the case when no data is available or an error occurred
          <Text>{isError}</Text>
        ) : (
          // Handle the case when no data is available or an error occurred
          <Text>Some other error</Text>
        )}

        {loading ? (
          // Show a loading spinner or message while waiting for data
          <Text>Loading...</Text>
        ) : statisticsData ? (
          // Render the data when it's available
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
              {detailsTab == 1 && (
                <Text style={styles.content}>{StatsTab}</Text>
              )}
              {detailsTab == 2 && (
                <Text style={styles.content}>{StatsTab2}</Text>
              )}
              {detailsTab == 3 && (
                <Text style={styles.content}>{StatsTab3}</Text>
              )}
              {detailsTab == 4 && (
                <Text style={styles.content}>{StatsTab4}</Text>
              )}
            </View>
          </View>
        ) : // <Text> If all works fine</Text>
        isError ? (
          // Handle the case when no data is available or an error occurred
          <Text>{isError}</Text>
        ) : (
          // Handle the case when no data is available or an error occurred
          <Text>Some other error</Text>
        )}
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

    width: Dimensions.get("window").width * 0.94,
    // width: "100%",
  },

  resultsContainer: {
    display: "flex",
    width: Dimensions.get("window").width * 0.94,
    // backgroundColor: "lightblue",
    // position: "relative",
    // marginHorizontal: 5,
  },
});
