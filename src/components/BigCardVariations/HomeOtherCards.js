import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const HomeOtherCards = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.parentWrapper}>
      <View>
        <Text style={styles.headerCompetitionWrapper}>
          Competitie : {data?.league?.name}
        </Text>

        <Text style={styles.weekSideStyle}>{data?.league?.round}</Text>

        <View style={styles.teamsWrapper}>
          <TouchableOpacity
            onPress={() => {
              // console.log("team name : ", data.team.name);
              navigation.navigate("Statistici", {
                screen: "StatisticsStack",
                params: data.teams.home,
              });
            }}
          >
            <View style={styles.homeWrapper}>
              {/* home */}
              <Image
                style={styles.teamLogoStyle}
                source={{ uri: data.teams.home.logo }}
              />
              <Text style={styles.teamNameStyle}>
                {data?.teams?.home?.name}
              </Text>
              <Text style={styles.underTeamType}>Home</Text>
            </View>
          </TouchableOpacity>

          {/* middle ( score and time) */}
          <View style={styles.middleWrapper}>
            <View style={styles.scoreWrapper}>
              <Text style={styles.scoreStyle}> {data?.goals?.home} :</Text>
              <Text style={styles.scoreStyle}> {data?.goals?.away}</Text>
            </View>
            <Text style={styles.matchTimePassedStyle}>
              {data?.fixture?.status?.elapsed}'
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Statistici", {
                screen: "StatisticsStack",
                params: data.teams.away,
              });
            }}
          >
            <View style={styles.awayWrapper}>
              {/* away */}
              <Image
                style={styles.teamLogoStyle}
                source={{ uri: data.teams.away.logo }}
              />
              <Text style={styles.teamNameStyle}>
                {data?.teams?.away?.name}
              </Text>
              <Text style={styles.underTeamType}>Away</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeOtherCards;

const styles = StyleSheet.create({
  parentWrapper: {
    margin: 5,
    backgroundColor: COLORS.lightGray,
    text: "white",
    width: 300,
    height: 300,
    flexDirection: "column",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    // left: 200,
  },

  headerCompetitionWrapper: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.darkGreen,
  },

  scoreStyle: {
    fontSize: 50,
    marginTop: 10,
    textAlign: "center",
    // fontSize: 20,
    fontWeight: "700",
    color: "white",
  },

  teamNameStyle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.mainGreen,
    color: COLORS.darkGreen,
    color: COLORS.mainGreen,
    // width: 50,
    flexWrap: "wrap",
    // flexWrap: "wrap",
  },

  matchTimePassedStyle: {
    textAlign: "center",
    color: COLORS.lightGreen,
    marginTop: 30,
    // backgroundColor: COLORS.lightPurple,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 17,
    borderColor: "white",
    borderWidth: 1.5,
    fontSize: 18,
  },

  teamLogoStyle: {
    width: 70,
    height: 70,
    // resizeMode: "stretch",
  },

  weekSideStyle: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
    fontSize: 15,
    // fontWeight: "700",
    color: COLORS.darkGray,
  },

  underTeamType: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
    fontSize: 15,
    color: COLORS.darkGray,
  },

  homeWrapper: {
    // flex: 2,
    // width: "30%",
    width: 110,
    height: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },

  awayWrapper: {
    // flex: 2,
    // width: "30%",
    width: 110,
    height: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  middleWrapper: {
    // flex: 1,
    // width: "10%",
    width: 80,
    height: 200,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
  },

  scoreWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  teamsWrapper: {
    // borderWidth: 3,
    // borderColor: "red",
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // alignContent: "center",
    alignSelf: "center",
    // height: "70%",
  },
});
