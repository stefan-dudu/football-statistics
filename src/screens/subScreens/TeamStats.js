import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import CustomSwitch from "../../components/CustomSwitch";
import Graphs from "../statisticsTabsScreens/Graphs";
import StatsLineup from "../statisticsTabsScreens/StatsLineup";
import StatsTransfers from "../statisticsTabsScreens/StatsTransfers";
import { COLORS } from "../../utils/colors";
import ScreenHeader from "../../components/ScreenHeader";

const TeamStats = ({ params }) => {
  const [detailsTab, setDetailsTab] = useState(1);

  const scrollY = new Animated.Value(0);

  const HEADER_EXPANDED_HEIGHT = 0;
  const HEADER_COLLAPSED_HEIGHT = 0;
  const { width: SCREEN_WIDTH } = Dimensions.get("screen");

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: "clamp",
  });

  const onSelectSwitch = (value) => {
    setDetailsTab(value);
  };

  const teamInfoData = params[0];
  // console.log("teamInfoData", teamInfoData.team.id);

  const teamStats = {
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
        logo: "https://media-2.api-sports.io/football/leagues/283.png",
        flag: "https://media-1.api-sports.io/flags/ro.svg",
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

  const TeamForm = teamStats?.response?.form.slice(-5).split("");
  const FromComponent = () => {
    return TeamForm.map((el, i) => {
      return (
        <View style={{ padding: 2 }} key={i}>
          <View
            style={[
              el == "W" && styles.winFormWrapper,
              el == "D" && styles.drawFormWrapper,
              el == "L" && styles.looseFormWrapper,
            ]}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "700",
              }}
            >
              {el}
            </Text>
          </View>
        </View>
      );
    });
  };

  // console.log("TeamForm", TeamForm);

  const leftCard = (
    <View style={styles.leftCard}>
      {/* left card */}
      <Image style={styles.teamLogo} source={{ uri: teamInfoData.team.logo }} />
    </View>
  );
  const rightCard = (
    <View style={styles.rightCard}>
      {/* right card */}
      <Text style={styles.teamName}>{teamInfoData.team.name}</Text>
      <View style={styles.teamDataWrapper}>
        {teamInfoData.team.founded && (
          <Text style={styles.teamDescriptionTitle}>
            Fondat:{" "}
            <Text style={styles.teamDescriptionValue}>
              {teamInfoData.team.founded}
            </Text>
          </Text>
        )}
      </View>
      <View style={styles.teamDataWrapper}>
        {teamInfoData.team.cod && (
          <Text style={styles.teamDescriptionTitle}>
            Cod:{" "}
            <Text style={styles.teamDescriptionValue}>
              {teamInfoData.team.code}
            </Text>
          </Text>
        )}
      </View>

      <View style={styles.teamDataWrapper}>
        <Text style={styles.teamDescriptionTitle}>
          Stadion:{" "}
          <Text style={styles.teamDescriptionValue}>
            {teamInfoData.venue.name}, {teamInfoData.venue.city}
          </Text>
        </Text>
      </View>
      <View style={styles.teamDataWrapper}>
        <Text style={styles.teamDescriptionTitle}>
          Capacitate:{" "}
          <Text style={styles.teamDescriptionValue}>
            {teamInfoData.venue.capacity} locuri
          </Text>
        </Text>
      </View>
      {params && (
        <View style={styles.teamDataWrapper}>
          <Text style={styles.teamDescriptionTitle}>Forma: </Text>
          <FromComponent />
        </View>
      )}
    </View>
  );

  const StatsTab = <Graphs teamStatsData={teamStats} />;
  const StatsTab2 = <StatsLineup teamID={teamInfoData.team.id} />;
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
          padding: 8,
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
        <ScreenHeader />
        <View style={styles.topCard}>
          {leftCard}
          {rightCard}
        </View>
        <View style={styles.bottomWrapper}>
          <CustomSwitch
            selectionMode={1}
            option1={"Stats"}
            option2={"Line-up"}
            // option3={"Transfers"}
            // option4={"?"}
            onSelectSwitch={onSelectSwitch}
          />
          <View style={styles.resultsContainer}>
            {detailsTab == 1 && <Text>{StatsTab}</Text>}
            {detailsTab == 2 && <Text>{StatsTab2}</Text>}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TeamStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
  },
  teamLogo: {
    width: 130,
    height: 130,
    // borderRadius: 50,
    resizeMode: "stretch",
  },
  venueStyle: {
    // width: 60,
    // height: 60,
    // borderRadius: 50,
    resizeMode: "stretch",
  },

  topCard: {
    flexDirection: "row",
    // paddingTop: 15,
    width: Dimensions.get("window").width * 0.95,
    // backgroundColor: "pink",
  },

  leftCard: {
    // backgroundColor: "green",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.35,
  },
  rightCard: {
    marginLeft: 15,
    width: Dimensions.get("window").width * 0.45,
    justifyContent: "flex-start",
  },

  teamName: {
    fontSize: 26,
    fontWeight: "800",
    color: COLORS.darkGray,
    marginBottom: 10,
    width: Dimensions.get("window").width - 180,
  },

  teamDataWrapper: {
    // backgroundColor: "lightgray",
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.55,
    // alignItems: "center",
    // alignContent: "center",
    // alignSelf: "center",
  },

  teamDescriptionTitle: {
    color: COLORS.mainGreen,
    fontSize: 17,
    fontWeight: "500",
    // marginBottom: 10,
    paddingVertical: 5,
    // backgroundColor: "green",
    // alignItems: "center",
    // alignContent: "center",
    // alignSelf: "center",
    // textAlign: "center",
    textAlignVertical: "center",
  },

  teamDescriptionValue: {
    color: COLORS.darkGray,
    fontWeight: "400",
  },

  bottomWrapper: {
    marginTop: 20,
    backgroundColor: "white",
    // backgroundColor: "blue",
    // justifyContent: "center",
    borderRadius: 15,

    width: Dimensions.get("window").width * 0.96,
    // width: "100%",
  },

  resultsContainer: {
    display: "flex",
    // backgroundColor: "lightblue",
    position: "relative",
    // justifyContent: ,
    marginHorizontal: 5,
  },

  formWrapper: {
    // backgroundColor: "lightblue",
  },

  winFormWrapper: {
    padding: 7,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: COLORS.lightGreen,
  },

  drawFormWrapper: {
    padding: 7,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: COLORS.formGrayDraw,
  },

  looseFormWrapper: {
    padding: 7,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: COLORS.formRedLoose,
  },
});
