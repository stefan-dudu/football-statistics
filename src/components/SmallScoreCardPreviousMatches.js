import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../utils/colors";

const SmallScoreCardPreviousMatches = ({ data }) => {
  const ExtractDayOfEvent = () => {
    const date = new Date(data.fixture.date);
    const options = { month: "short", day: "numeric" };
    const dayOfEvent = date.toLocaleDateString("ro-RO", options);
    return dayOfEvent;
  };

  //   console.log("data", data);

  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.teamButtonStyle}
        onPress={() => {
          // console.log("team name : ", data.team.name);
          navigation.navigate("Details", {
            finishedMatchID: data.fixture.id,
          });
        }}
      >
        <View style={styles.matchOutline}>
          {/* left */}

          <View style={styles.teamWrapper}>
            <Image
              style={styles.teamLogo}
              // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
              source={{ uri: data.teams.home.logo }}
            />
            <Text style={styles.teamName}>{data.teams.home.name} </Text>
          </View>

          {/* middle */}
          <View style={styles.middle}>
            <Text style={styles.hour}>
              {data.score.fulltime.home} - {data.score.fulltime.away}
            </Text>
            <Text style={styles.date}>{ExtractDayOfEvent()}</Text>
          </View>

          {/* right */}

          <View style={styles.teamWrapper}>
            <Image
              style={styles.teamLogo}
              // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
              source={{ uri: data.teams.away.logo }}
            />
            <Text style={styles.teamName}> {data.teams.away.name} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SmallScoreCardPreviousMatches;

const styles = StyleSheet.create({
  matchOutline: {
    margin: 5,
    // borderWidth: 1,
    // borderColor: "blue",
    height: 100,
    width: Dimensions.get("window").width - 15,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
    borderRadius: 17,
    flexDirection: "row",
    // shadow
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  teamLogo: {
    width: 80,
    height: 80,
  },
  teamWrapper: {
    // flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: Dimensions.get("window").width * 0.42,
    height: 100,
    flexWrap: "wrap",
  },

  middle: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "lightyellow",
    width: Dimensions.get("window").width * 0.16,
    height: 100,
  },
  right: {
    // flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: Dimensions.get("window").width * 0.42,
    height: 100,
    flexWrap: "wrap",
  },

  teamLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  teamName: {
    marginTop: 5,
    fontWeight: "500",
  },

  hour: {
    fontWeight: "600",
    color: COLORS.mainGreen,
    fontSize: 26,
  },

  date: {
    color: COLORS.gray,
  },

  teamButtonStyle: {
    // backgroundColor: "lightgray",
  },
});
