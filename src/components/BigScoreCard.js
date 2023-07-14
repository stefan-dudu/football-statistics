import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { purple, lightPurple, pink } from "../utils/files";

const BigScoreCard = ({ data }) => {
  //   console.log(data.teams.away.logo);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerStyle}>Competitie : {data.league.name}</Text>
      <Text style={styles.weekSideStyle}>{data.league.round}</Text>

      <View style={styles.teamsWrapper}>
        <View style={styles.homeWrapper}>
          {/* home */}
          <Image
            style={styles.teamLogo}
            // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            source={require("../../assets/teamLogo.png")}
          />
          <Text style={styles.teamName}>{data.teams.home.name}</Text>
          <Text style={styles.homeAway}>Home</Text>
        </View>

        {/* middle ( score and time) */}
        <View style={styles.middleWrapper}>
          <View style={styles.scoreWrapper}>
            <Text style={styles.score}> {data.goals.home} :</Text>
            <Text style={styles.score}> {data.goals.away}</Text>
          </View>
          <Text style={styles.time}>{data.fixture.status.elapsed}'</Text>
        </View>

        <View style={styles.awayWrapper}>
          {/* away */}
          <Image
            style={styles.teamLogo}
            // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            source={require("../../assets/teamLogo2.png")}
          />
          <Text style={styles.teamName}>{data.teams.away.name}</Text>
          <Text style={styles.homeAway}>Away</Text>
        </View>
      </View>
    </View>
  );
};

export default BigScoreCard;

const styles = StyleSheet.create({
  wrapper: {
    margin: 5,
    backgroundColor: purple,
    text: "white",
    width: 330,
    height: 300,
    flexDirection: "column",
    borderRadius: 17,
    display: "flex",
    justifyContent: "center",
  },

  headerStyle: {
    textAlign: "center",
    // backgroundColor: "white",
    fontSize: 20,
    fontWeight: 700,
    color: "white",
  },
  weekSideStyle: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
    fontSize: 15,
    // fontWeight: 700,
    color: "gray",
  },

  homeAway: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
    fontSize: 15,
    color: "gray",
  },

  homeWrapper: {
    // backgroundColor: "yellow",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  awayWrapper: {
    // backgroundColor: "lightblue",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  scoreWrapper: {
    // backgroundColor: "white",
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  score: {
    fontSize: 30,
    marginTop: 10,
    textAlign: "center",
    // fontSize: 20,
    fontWeight: 700,
    color: "white",
  },

  middleWrapper: {
    // backgroundColor: "red",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
  },

  teamsWrapper: {
    // borderWidth: 3,
    // borderColor: "red",
    display: "flex",
    flexDirection: "row",
    height: "70%",
  },

  teamLogo: {
    width: "68%",
    height: "35%",
    resizeMode: "stretch",
  },

  textMarginTop: {
    marginTop: 10,
  },

  teamName: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    color: "white",
  },

  time: {
    textAlign: "center",
    color: "white",
    marginTop: 30,
    backgroundColor: lightPurple,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 17,
    borderColor: pink,
    borderWidth: 1.5,
  },
});
