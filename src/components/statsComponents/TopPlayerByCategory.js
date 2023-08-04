import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";

const TopPlayerByCategory = ({ data, playerType }) => {
  // console.log("type", playerType);

  const CardType = ({ el }) => {
    switch (playerType) {
      case "scorer":
        return (
          <ImageBackground
            source={require("../../../assets/ratingCardGreen.png")}
            style={styles.cardStyling}
          >
            <View style={styles.cardTextWrapper}>
              <Text style={styles.ratingTextStyle}>
                {el?.statistics[0]?.games?.rating?.slice(0, -4) || "-"}
              </Text>
            </View>
          </ImageBackground>
        );

      case "assists":
        return (
          <ImageBackground
            source={require("../../../assets/ratingTopAssist.png")}
            style={styles.cardStyling}
          >
            <View style={styles.cardTextWrapper}>
              <Text style={styles.ratingBronzeTextStyle}>
                {el?.statistics[0]?.games?.rating?.slice(0, -4) || "-"}
              </Text>
            </View>
          </ImageBackground>
        );

      case "cards":
        return (
          <ImageBackground
            source={require("../../../assets/ratingCardSilver.png")}
            style={styles.cardStyling}
          >
            <View style={styles.cardTextWrapper}>
              <Text style={styles.ratingBronzeTextStyle}>
                {el?.statistics[0]?.games?.rating?.slice(0, -4) || "-"}
              </Text>
            </View>
          </ImageBackground>
        );
    }
  };

  const MatchDetails = ({ el }) => {
    return playerType !== "cards" ? (
      <View style={styles.playerMatchDetails}>
        <Text style={styles.playerMatchDetailTitles}>
          Goals:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].goals.total || "-"}
          </Text>
        </Text>
        <Text style={styles.playerMatchDetailTitles}>
          Assists:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].goals.assists || "-"}
          </Text>
        </Text>
        <Text style={styles.playerMatchDetailTitles}>
          Meciuri:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].games.appearences || "-"}
          </Text>
        </Text>
      </View>
    ) : (
      <View style={styles.playerMatchDetails}>
        <Text style={styles.playerMatchDetailTitles}>
          Cartonase:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].cards.yellow || "-"}
          </Text>
        </Text>
        <Text style={styles.playerMatchDetailTitles}>
          Faulturi:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].fouls.committed || "-"}
          </Text>
        </Text>
        <Text style={styles.playerMatchDetailTitles}>
          Meciuri:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].games.appearences || "-"}
          </Text>
        </Text>
      </View>
    );
  };

  const PlayerCard = () => {
    return data.response.slice(0, 3).map((el, i) => {
      // console.log(el);
      //   console.log("el", el.statistics[0].games.position);
      return (
        <View style={styles.playerCardWrapper} key={el.player.id}>
          <View style={styles.playerPicture}>
            {/* <Text>{i + 1}</Text> */}
            <Image
              style={styles.clubPicStyle}
              source={require("../../../assets/teamLogo2.png")}
            />
            <Image
              style={styles.profilePicStyle}
              source={require("../../../assets/topScorer.png")}
            />
          </View>
          <View style={styles.playerNamePosition}>
            <Text style={styles.nume}>{el.player.firstname}</Text>
            <Text style={styles.prenume}>{el.player.lastname}</Text>
            <Text style={styles.playerPosition}>
              {el.statistics[0].games.position}
            </Text>
          </View>
          <MatchDetails el={el} />
          <View style={styles.playerRating}>
            <CardType el={el} />
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.parentWrapper}>
      <PlayerCard />
    </View>
  );
};

export default TopPlayerByCategory;

const styles = StyleSheet.create({
  // wrappers
  parentWrapper: {
    marginBottom: 20,
    // backgroundColor: "pink",
  },

  playerCardWrapper: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGreen,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "auto",
    width: Dimensions.get("window").width * 0.95,
  },

  playerPicture: {
    // backgroundColor: "red",
    // flex: 1,
    height: 120,
    width: Dimensions.get("window").width * 0.18,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: 5,
  },
  playerNamePosition: {
    // backgroundColor: "yellow",
    // flex: 2,
    marginRight: 10,
    width: Dimensions.get("window").width * 0.3,
  },
  playerMatchDetails: {
    // backgroundColor: "blue",
    // flex: 2,
    width: Dimensions.get("window").width * 0.3,
  },

  playerRating: {
    // backgroundColor: "green",
    // flex: 1,
    width: Dimensions.get("window").width * 0.17,
  },

  playerMatchDetailTitles: {
    color: COLORS.darkGray,
    fontSize: 16,
  },

  //   components

  profilePicStyle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    // resizeMode: "stretch",
  },

  clubPicStyle: {
    width: 40,
    height: 40,
    // borderRadius: 50,
    resizeMode: "contain",
  },

  cardStyling: {
    width: 60,
    height: 80,
    resizeMode: "center",
  },

  cardTextWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  ratingTextStyle: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },

  ratingBronzeTextStyle: {
    color: COLORS.darkGreen,
    fontWeight: "600",
    fontSize: 18,
  },

  nume: {
    fontSize: 25,
    fontWeight: "800",
    color: COLORS.darkGreen,
  },

  prenume: {
    fontSize: 20,
    fontWeight: "500",
    color: COLORS.darkGreen,
  },

  detailsHighlighted: {
    fontSize: 25,
    fontWeight: "800",
    color: COLORS.darkGreen,
  },

  playerPosition: {
    color: COLORS.mediumGray,
    fontSize: 18,
  },
});
