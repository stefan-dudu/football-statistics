import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const BigScoreCard = ({ data }) => {
  //   console.log(typeof data.teams.away.logo);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerStyle}>Competitie : {data.league.name}</Text>
      <Text style={styles.weekSideStyle}>Etapa : {data.league.round}</Text>

      <View style={styles.teamsWrapper}>
        <View style={styles.homeWrapper}>
          {/* home */}
          <Image
            style={styles.teamLogo}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <Text>{data.teams.home.name}</Text>
          <Text>Home</Text>
        </View>

        {/* middle ( score and time) */}
        <View style={styles.middleWrapper}>
          <View style={styles.scoreWrapper}>
            <Text> {data.goals.home} : </Text>
            <Text> {data.goals.away}</Text>
          </View>
          <Text style={{ textAlign: "center" }}>
            {data.fixture.status.elapsed}'
          </Text>
        </View>

        <View style={styles.awayWrapper}>
          {/* away */}
          <Text>{data.teams.away.name}</Text>
          <Text>Away</Text>
        </View>
      </View>
    </View>
  );
};

export default BigScoreCard;

const styles = StyleSheet.create({
  wrapper: {
    margin: 5,
    backgroundColor: "lightgreen",
    text: "white",
    width: 280,
    height: 250,
    flexDirection: "column",
    borderRadius: 17,
    display: "flex",
    justifyContent: "center",
  },
  headerStyle: {
    textAlign: "center",
    backgroundColor: "white",
    fontSize: 18,
  },
  weekSideStyle: {
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "lightgray",
  },

  homeWrapper: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  awayWrapper: {
    backgroundColor: "lightblue",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  scoreWrapper: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  middleWrapper: {
    backgroundColor: "red",
    width: "20%",
    justifyContent: "center",
  },

  teamsWrapper: {
    borderWidth: 3,
    borderColor: "red",
    display: "flex",
    flexDirection: "row",
    height: "80%",
  },

  teamLogo: {
    width: "100%",
    height: 100,
    // backgroundColor: "red",
    resizeMode: "stretch",
    zIndex: 2,
    elevation: 3,
  },
});
