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
import ScreenHeader from "../../components/ScreenHeader";
import { COLORS } from "../../utils/colors";
import playerDetaliedDataDummy from "../../api/DummyData/playerDetaliedDataDummy";
import OverviewTab from "./PlayerStats/OverviewTab";
import PlayerStatsTab from "./PlayerStats/PlayerStatsTab";

const DetailedPlayerScreen = (params) => {
  const playerData = params.route.params.params;

  // console.log("playerData", playerData);
  // console.log("playerData.statistics[0]", playerData.statistics[0]);
  // console.log("playerDetaliedDataDummy", playerDetaliedDataDummy);

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

  const StatsTab = <OverviewTab data={playerData.player} />;
  const StatsTab2 = <PlayerStatsTab data={playerData.statistics} />;
  const TopComponent = () => {
    return (
      <View style={styles.topComponentWrapper}>
        <View style={styles.topLeftWrapper}>
          <Image
            style={styles.playerPicture}
            // source={require("../../../assets/neymar.png")}
            source={{ uri: playerData.player.photo }}
          />
        </View>
        <View style={styles.topRightWrapper}>
          <Text style={styles.playerNameTopCard}>{playerData.player.name}</Text>
          <Text style={styles.playerPositionTopCard}>
            {playerData.statistics[0].games.position}
          </Text>
        </View>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.teamLogo}
            // source={require("../../../assets/neymar.png")}
            source={{ uri: playerData.statistics[0].team.logo }}
          />
        </View>
      </View>
    );
  };

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
          <TopComponent />
        </View>
        <View style={styles.bottomWrapper}>
          <CustomSwitch
            selectionMode={1}
            option1={"General"}
            option2={"Statistici"}
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

export default DetailedPlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
  },

  playerPicture: {
    width: 130,
    height: 200,
    // borderRadius: 90,
    resizeMode: "contain",
  },

  topCard: {
    flexDirection: "row",
    // paddingTop: 15,
    width: Dimensions.get("window").width * 0.95,
    // backgroundColor: "pink",
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

  topComponentWrapper: {
    // backgroundColor: "lightblue",
    width: Dimensions.get("window").width,
    height: 200,
    marginHorizontal: -8,
    flexDirection: "row",
  },

  topRightWrapper: {
    // backgroundColor: "lightblue",
    flex: 1,
    height: 200,
  },
  topLeftWrapper: {
    // backgroundColor: "lightblue",
    // flex: 1,
    marginHorizontal: 10,
  },

  playerNameTopCard: {
    fontSize: 40,
    fontWeight: "700",
    color: COLORS.mainGreen,
  },
  playerPositionTopCard: {
    fontSize: 30,
    fontWeight: "600",
    // color: COLORS.mainGreen,
  },

  teamLogo: {
    width: 110,
    height: 110,
    // borderRadius: 90,
    resizeMode: "contain",
    // backgroundColor: "red",
    opacity: 0.5,
  },

  logoWrapper: {
    // backgroundColor: "green",
    zIndex: -1,
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
