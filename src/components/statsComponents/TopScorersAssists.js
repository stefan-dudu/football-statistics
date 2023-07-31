import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";

const TopScorersAssists = ({ data, playerType }) => {
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
        <Text>
          Goals:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].goals.total || "-"}
          </Text>
        </Text>
        <Text>
          Assists:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].goals.assists || "-"}
          </Text>
        </Text>
        <Text>
          Meciuri:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].games.appearences || "-"}
          </Text>
        </Text>
      </View>
    ) : (
      <View style={styles.playerMatchDetails}>
        <Text>
          Cartonase:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].cards.yellow || "-"}
          </Text>
        </Text>
        <Text>
          Faulturi:{" "}
          <Text style={styles.detailsHighlighted}>
            {el.statistics[0].fouls.committed || "-"}
          </Text>
        </Text>
        <Text>
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
              style={styles.profilePicStyle}
              source={require("../../../assets/topScorer.png")}
            />
          </View>
          <View style={styles.playerNamePosition}>
            <Text style={styles.nume}>{el.player.firstname}</Text>
            <Text style={styles.prenume}>{el.player.lastname}</Text>
            <Text>{el.statistics[0].games.position}</Text>
          </View>
          <MatchDetails el={el} />
          <View>
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

export default TopScorersAssists;

const styles = StyleSheet.create({
  // wrappers
  parentWrapper: {
    // backgroundColor: "pink",
  },

  playerCardWrapper: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: "lightgreen",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "auto",
  },

  playerPicture: {
    // backgroundColor: "red",
    flex: 1,
  },
  playerNamePosition: {
    //  backgroundColor: "yellow",
    flex: 2,
  },
  playerMatchDetails: {
    // backgroundColor: "blue",
    flex: 2,
  },
  playerRating: {
    // backgroundColor: "green",
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: "50% 50% 50% 50% / 12% 12% 88% 88%",
  },

  //   components

  profilePicStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // resizeMode: "stretch",
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
    color: "black",
    fontWeight: "600",
    fontSize: 18,
  },

  nume: {
    fontSize: 25,
    fontWeight: "800",
  },

  prenume: {
    fontSize: 20,
    fontWeight: "500",
  },

  detailsHighlighted: {
    fontSize: 25,
    fontWeight: "800",
  },
});
