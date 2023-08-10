import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomSwitch from "../../components/CustomSwitch";
import Graphs from "../statisticsTabsScreens/Graphs";
import StatsLineup from "../statisticsTabsScreens/StatsLineup";
import StatsTransfers from "../statisticsTabsScreens/StatsTransfers";
import { COLORS } from "../../utils/colors";
import ScreenHeader from "../../components/ScreenHeader";
import apiSports from "../../api/api-sports";
import teamStatsDummy from "../../api/DummyData/teamStatsDummy";

const TeamStats = ({ params }) => {
  const teamInfoData = params[0];
  // console.log("teamInfoData", teamInfoData);
  const [detailsTab, setDetailsTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [teamStats, setTeamStats] = useState(null);
  const [isError, setIsError] = useState("");

  const scrollY = new Animated.Value(0);

  const HEADER_EXPANDED_HEIGHT = 0;
  const HEADER_COLLAPSED_HEIGHT = 0;
  const { width: SCREEN_WIDTH } = Dimensions.get("screen");

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: "clamp",
  });

  const getTeamStats = async () => {
    try {
      const response = await apiSports.get("/teams/statistics", {
        params: {
          season: 2023,
          team: teamInfoData.team.id,
          league: 283,
        },
      });
      response?.data?.errors?.requests?.includes &&
        setIsError("Max limit for today been reached");

      response?.data.results > 0 && setTeamStats(response?.data);
      setLoading(false);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  useEffect(() => {
    // getTeamStats();
  }, [teamInfoData]);

  const onSelectSwitch = (value) => {
    setDetailsTab(value);
  };

  const TeamForm = teamStatsDummy?.response?.form.slice(-5).split("");
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

  const StatsTab = <Graphs teamStatsData={teamStatsDummy} />;
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
        {loading ? (
          // Show a loading spinner or message while waiting for data
          <Text>Loading...</Text>
        ) : teamStatsDummy ? (
          // Render the data when it's available
          <View>
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
