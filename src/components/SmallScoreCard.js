import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../utils/colors";

const SmallScoreCard = ({ data }) => {
  //   console.log("data", data);
  return (
    <View>
      <View style={styles.matchOutline}>
        {/* left */}
        <View style={styles.left}>
          <Text style={styles.teamName}>Man City</Text>
          <Image
            style={styles.teamLogo}
            // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            source={require("../../assets/teamLogo.png")}
          />
        </View>

        {/* middle */}
        <View style={styles.middle}>
          <Text style={styles.hour}>06:30</Text>
          <Text style={styles.date}>30 Oct</Text>
        </View>

        {/* right */}
        <View style={styles.right}>
          <Image
            style={styles.teamLogo}
            // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            source={require("../../assets/teamLogo2.png")}
          />
          <Text style={styles.teamName}> Palace</Text>
        </View>
      </View>
    </View>
  );
};

export default SmallScoreCard;

const styles = StyleSheet.create({
  matchOutline: {
    margin: 5,
    // borderWidth: 1,
    // borderColor: "blue",
    height: 100,
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

  left: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    // flexWrap: "wrap",
  },
  teamLogo: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },

  teamName: {
    fontWeight: "500",
  },

  hour: {
    fontWeight: "600",
    color: COLORS.orange,
    fontSize: 20,
  },

  date: {
    color: COLORS.gray,
  },
});
