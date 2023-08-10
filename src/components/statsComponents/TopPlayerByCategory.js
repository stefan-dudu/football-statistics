import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../utils/colors";
import CardType from "./CardType";

const TopPlayerByCategory = ({ data, playerType }) => {
  const navigation = useNavigation();

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
      // console.log("el", el.statistics[0].games.rating);
      //   console.log("el", el.statistics[0].games.position);
      return (
        <TouchableOpacity
          onPress={() => {
            // console.log("team name : ", data.team.name);
            navigation.navigate("PlayerDetailsStatistics", {
              params: el,
            });
          }}
          key={el.player.id}
        >
          <View style={styles.playerCardWrapper}>
            <View style={styles.playerPicture}>
              {/* <Text>{i + 1}</Text> */}
              <Image
                style={styles.clubPicStyle}
                // source={require("../../../assets/teamLogo2.png")}
                source={{ uri: el.statistics[0].team.logo }}
              />
              <Image
                style={styles.profilePicStyle}
                // source={require("../../../assets/topScorer.png")}
                source={{ uri: el.player.photo }}
              />
            </View>
            <View style={styles.playerNamePosition}>
              <Text style={styles.nume}>{el.player.lastname}</Text>
              <Text style={styles.prenume}>{el.player.firstname}</Text>
              <Text style={styles.playerPosition}>
                {el.statistics[0].games.position}
              </Text>
            </View>
            <MatchDetails el={el} />
            <View style={styles.playerRating}>
              <CardType rating={el.statistics[0].games.rating} />

              {/* <Text>2</Text> */}
            </View>
          </View>
        </TouchableOpacity>
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
    paddingRight: 10,
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

  nume: {
    fontSize: 25,
    fontWeight: "800",
    color: COLORS.darkGreen,
  },

  prenume: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.darkGreen,
  },

  detailsHighlighted: {
    fontSize: 23,
    fontWeight: "800",
    color: COLORS.darkGreen,
  },

  playerPosition: {
    color: COLORS.mediumGray,
    fontSize: 18,
  },

  GoldRatingWrapper: {
    backgroundColor: COLORS.goldCard,
    trasparent: true,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EBC678",
    justifyContent: "center",
    alignItems: "center",
  },
  SilverRatingWrapper: {
    backgroundColor: COLORS.silverCard,
    trasparent: true,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B4B9C1",
    justifyContent: "center",
    alignItems: "center",
  },
  BronzeRatingWrapper: {
    backgroundColor: COLORS.bronzeCard,
    trasparent: true,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C6A48A",
    justifyContent: "center",
    alignItems: "center",
  },

  ratingGoldSilverTextStyle: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },

  ratingBronzeTextStyle: {
    color: COLORS.darkGray,
    fontWeight: "600",
    fontSize: 18,
  },
});
