import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React from "react";
import { COLORS } from "../utils/colors";

const BigScoreCard = ({ data, page }) => {
  // console.log(data.fixture.venue.name);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  // console.log("windowWidth", windowWidth);
  // console.log("windowHeight", windowHeight);

  return (
    <View
      style={[
        page === "home" ? styles.wrapperHomePage : styles.wrapperDetailPage,
      ]}
    >
      {page === "home" ? (
        <Text style={styles.headerStyleHomePage}>
          Competitie : {data?.league?.name}
        </Text>
      ) : (
        <Text style={styles.headerStyleDetailPage}>
          {data?.fixture?.venue?.name}
        </Text>
      )}

      <Text style={styles.weekSideStyle}>{data?.league?.round}</Text>

      <View style={styles.teamsWrapper}>
        <View style={styles.homeWrapper}>
          {/* home */}
          <Image
            style={[
              page === "home"
                ? styles.teamLogoHomePage
                : styles.teamLogoDetailPage,
            ]}
            // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            source={require("../../assets/teamLogo.png")}
          />
          <Text
            style={[
              page === "home"
                ? styles.teamNameHomePage
                : styles.teamNameDetailPage,
            ]}
          >
            {data?.teams?.home?.name}
          </Text>
          <Text style={styles.homeAway}>Home</Text>
        </View>

        {/* middle ( score and time) */}
        <View style={styles.middleWrapper}>
          <View style={styles.scoreWrapper}>
            <Text
              style={[
                page === "home" ? styles.scoreHomePage : styles.scoreDetailPage,
              ]}
            >
              {" "}
              {data?.goals?.home} :
            </Text>
            <Text
              style={[
                page === "home" ? styles.scoreHomePage : styles.scoreDetailPage,
              ]}
            >
              {" "}
              {data?.goals?.away}
            </Text>
          </View>
          <Text
            style={[
              page === "home" ? styles.timeHomePage : styles.timeDetailPage,
            ]}
          >
            {data?.fixture?.status?.elapsed}'
          </Text>
        </View>

        <View style={styles.awayWrapper}>
          {/* away */}
          <Image
            style={[
              page === "home"
                ? styles.teamLogoHomePage
                : styles.teamLogoDetailPage,
            ]}
            // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            source={require("../../assets/teamLogo2.png")}
          />
          <Text
            style={[
              page === "home"
                ? styles.teamNameHomePage
                : styles.teamNameDetailPage,
            ]}
          >
            {data?.teams?.away?.name}
          </Text>
          <Text style={styles.homeAway}>Away</Text>
        </View>
      </View>
    </View>
  );
};

export default BigScoreCard;

const styles = StyleSheet.create({
  // home page
  wrapperHomePage: {
    margin: 5,
    backgroundColor: COLORS.purple,
    text: "white",
    width: Dimensions.get("window").width - 100,
    height: 300,
    flexDirection: "column",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    // left: 200,
  },

  headerStyleHomePage: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },

  scoreHomePage: {
    fontSize: 30,
    marginTop: 10,
    textAlign: "center",
    // fontSize: 20,
    fontWeight: "700",
    color: "white",
  },

  teamNameHomePage: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },

  timeHomePage: {
    textAlign: "center",
    color: "white",
    marginTop: 30,
    backgroundColor: COLORS.lightPurple,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 17,
    borderColor: COLORS.pink,
    borderWidth: 1.5,
  },

  teamLogoHomePage: {
    width: "68%",
    height: "35%",
    resizeMode: "stretch",
  },

  // detail page

  wrapperDetailPage: {
    marginTop: 50,
    backgroundColor: "white",
    width: Dimensions.get("window").width - 30,
    height: 220,
    flexDirection: "column",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
  },

  headerStyleDetailPage: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
    color: "black",
  },

  scoreDetailPage: {
    fontSize: 30,
    marginTop: 10,
    textAlign: "center",
    // fontSize: 20,
    fontWeight: "700",
    color: "black",
  },

  teamNameDetailPage: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "black",
  },

  timeDetailPage: {
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

  teamLogoDetailPage: {
    width: "38%",
    height: "35%",
    resizeMode: "stretch",
  },

  // GENERAL items non dynamic

  weekSideStyle: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
    fontSize: 15,
    // fontWeight: "700",
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  awayWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  scoreWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  middleWrapper: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  teamsWrapper: {
    // borderWidth: 3,
    // borderColor: "red",
    display: "flex",
    flexDirection: "row",
    height: "70%",
  },

  textMarginTop: {
    marginTop: 10,
  },
});
