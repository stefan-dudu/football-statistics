import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const TeamsComparasionCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapperDetailPage}>
      <View>
        <Text style={styles.headerVenueStyle}>
          {data?.fixture?.venue?.name}
        </Text>

        <Text style={styles.roundOfSeasonStyle}>{data?.league?.round}</Text>

        <View style={styles.teamsWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Statistici", { params: data.teams.home });
            }}
          >
            <View style={styles.homeWrapper}>
              {/* home */}
              <Image
                style={styles.teamLogo}
                // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                // source={require("../../assets/teamLogo.png")}
                source={{ uri: data.teams.home.logo }}
              />
              <Text style={styles.teamName}>{data?.teams?.home?.name}</Text>
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
              // console.log("team name : ", data.team.name);
              navigation.navigate("Statistici", { params: data.teams.away });
            }}
          >
            <View style={styles.awayWrapper}>
              {/* away */}
              <Image
                style={styles.teamLogo}
                // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                // source={require("../../assets/teamLogo2.png")}
                source={{ uri: data.teams.away.logo }}
              />
              <Text style={styles.teamName}>{data?.teams?.away?.name}</Text>
              <Text style={styles.underTeamType}>Away</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TeamsComparasionCard;

const styles = StyleSheet.create({
  wrapperDetailPage: {
    marginTop: -120,
    zIndex: 5,
    // marginTop: 15,
    backgroundColor: "white",
    width: Dimensions.get("window").width * 0.94,
    height: 250,
    flexDirection: "column",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
  },

  headerVenueStyle: {
    // paddingHorizontal: 50,
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
    color: "black",
  },

  scoreStyle: {
    fontSize: 40,
    marginTop: 10,
    textAlign: "center",
    // fontSize: 20,
    fontWeight: "700",
    color: "black",
  },

  teamName: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "black",
  },

  matchTimePassedStyle: {
    textAlign: "center",
    color: COLORS.pink,
    marginTop: 30,
    backgroundColor: COLORS.lightPink,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 17,
    borderColor: COLORS.pink,
    borderWidth: 1.5,
  },

  teamLogo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },

  roundOfSeasonStyle: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
    fontSize: 15,
    // fontWeight: "700",
    color: "gray",
  },

  underTeamType: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
    fontSize: 15,
    color: "gray",
  },

  homeWrapper: {
    // flex: 2,
    // width: "30%",
    width: Dimensions.get("window").width * 0.38,
    height: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },

  awayWrapper: {
    // flex: 2,
    // width: "30%",
    width: Dimensions.get("window").width * 0.38,
    height: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  middleWrapper: {
    // flex: 1,
    // width: "10%",
    width: 40,
    width: Dimensions.get("window").width * 0.18,
    height: 150,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
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
