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

const TeamStats = ({ params }) => {
  const teamName = params?.name;
  const teamId = params?.id;
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

  const onSelectSwitch = (value) => {
    setDetailsTab(value);
  };

  const teamInfoData = teamInfo.response[0];

  const leftCard = (
    <View>
      {/* left card */}
      <Image
        style={styles.teamLogo}
        source={require("../../../assets/teamLogo3.png")}
      />
    </View>
  );
  const rightCard = (
    <View style={styles.rightCard}>
      {/* right card */}
      <Text style={styles.teamName}>{teamInfoData.team.name}</Text>
      <View style={styles.teamDataWrapper}>
        <Text style={styles.teamDescriptionTitle}>
          Fondat:{" "}
          <Text style={styles.teamDescriptionValue}>
            {teamInfoData.team.founded}
          </Text>
        </Text>
      </View>
      <View style={styles.teamDataWrapper}>
        <Text style={styles.teamDescriptionTitle}>
          Cod:{" "}
          <Text style={styles.teamDescriptionValue}>
            {teamInfoData.team.code}
          </Text>
        </Text>
      </View>

      <View style={styles.teamDataWrapper}>
        <Text style={styles.teamDescriptionTitle}>
          Stadion:{" "}
          <Text style={styles.teamDescriptionValue}>
            {teamInfoData.venue.name}, {teamInfoData.venue.city} aaaaaaaaaaaa
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
      <View style={styles.teamDataWrapper}>
        <Text style={styles.teamDescriptionTitle}>
          Forma:{" "}
          <Text style={styles.teamDescriptionValue}>
            {teamInfoData.team.founded}
          </Text>
        </Text>
      </View>
      {/* <Text>Cod: {teamInfoData.team.code}</Text>
      <Text>
        Stadion: {teamInfoData.venue.name}, {teamInfoData.venue.city}{" "}
        aaaaaaaaaaaa
      </Text>
      <Text>Capacitate: {teamInfoData.venue.capacity}</Text>
      <Text>Forma : wwwLL</Text> */}
    </View>
  );

  const StatsTab = <Graphs />;
  const StatsTab2 = <StatsLineup />;
  const StatsTab3 = <StatsTransfers />;
  // const StatsTab4 = <Head2Head />;
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
            {/* {detailsTab == 3 && <Text>{StatsTab3}</Text>}
            {detailsTab == 4 && <Text>'test tabs 4'</Text>} */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TeamStats;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
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
    paddingTop: 15,
    // backgroundColor: "pink",+
  },

  rightCard: {
    marginLeft: 15,
  },

  teamName: {
    fontSize: 26,
    fontWeight: "800",
    color: COLORS.purple,
    marginBottom: 10,
    width: Dimensions.get("window").width - 180,
  },

  teamDataWrapper: {
    // backgroundColor: "lightgray",
    flexDirection: "row",
    width: Dimensions.get("window").width - 180,
  },

  teamDescriptionTitle: {
    color: "red",
    fontSize: 15,
    fontWeight: "500",
  },

  teamDescriptionValue: {
    color: "black",
    fontWeight: "400",
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
