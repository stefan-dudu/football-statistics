import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../../../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const PlayerStatsTab = ({ data }) => {
  CardType = ({ rating }) => {
    if (rating >= 7.5) {
      return (
        <View style={styles.GoldRatingWrapper}>
          {/* <Text>Gold</Text> */}
          <Text style={styles.ratingGoldSilverTextStyle}>
            {rating?.slice(0, -4) || "-"}
          </Text>
        </View>
      );
    } else if (rating >= 7 && rating < 7.5) {
      return (
        <View style={styles.SilverRatingWrapper}>
          <Text style={styles.ratingGoldSilverTextStyle}>
            {rating?.slice(0, -4) || "-"}
          </Text>
        </View>
      );
    } else if (rating < 7) {
      return (
        <View style={styles.BronzeRatingWrapper}>
          <Text style={styles.ratingBronzeTextStyle}>
            {rating?.slice(0, -4) || "-"}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.BronzeRatingWrapper}>
          <Text style={styles.ratingBronzeTextStyle}>
            {rating?.slice(0, -4) || "-"}
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.parentWrapper}>
      <View style={styles.leftSide}>
        <View style={styles.rowWrapper}>
          <MaterialCommunityIcons
            name="soccer-field"
            size={24}
            color={COLORS.mainGreen}
          />
          <Text style={styles.textStyle}>
            Meciuri Jucate:{" "}
            <Text style={styles.accentText}>{data[0].games.appearences}</Text>
          </Text>
        </View>
        <View style={styles.rowWrapper}>
          <Ionicons name="timer-outline" size={24} color={COLORS.mainGreen} />
          <Text style={styles.textStyle}>
            Total minute:{" "}
            <Text style={styles.accentText}>{data[0].games.minutes}</Text>
          </Text>
        </View>
        <View style={styles.rowWrapper}>
          <Feather name="percent" size={24} color={COLORS.mainGreen} />
          <Text style={styles.textStyle}>
            Acuratete pase:{" "}
            <Text style={styles.accentText}>
              {data[0].passes.accuracy + "%" || "-"}
            </Text>
          </Text>
        </View>
        <View style={styles.rowWrapper}>
          <MaterialCommunityIcons
            name="sword-cross"
            size={24}
            color={COLORS.mainGreen}
          />
          <Text style={styles.textStyle}>
            Dueluri castigate:{" "}
            <Text style={styles.accentText}>{data[0].duels.won || "-"}</Text>
          </Text>
        </View>
        <View style={styles.rowWrapper}>
          <Text style={styles.textStyle}>
            <MaterialCommunityIcons
              name="cards"
              size={24}
              color={COLORS.mainGreen}
            />
            Cartonase galbene:{" "}
            <Text style={styles.accentText}>{data[0].cards.yellow || "-"}</Text>
          </Text>
        </View>
        <View style={styles.rowWrapper}>
          <MaterialCommunityIcons
            name="cards"
            size={24}
            color={COLORS.mainGreen}
          />
          <Text style={styles.textStyle}>
            Cartonase rosii:{" "}
            <Text style={styles.accentText}>{data[0].cards.red || "-"}</Text>
          </Text>
        </View>
        <View style={styles.rowWrapper}>
          <Ionicons name="football" size={24} color={COLORS.mainGreen} />
          <Text style={styles.textStyle}>
            Penalty-uri transformate:{" "}
            <Text style={styles.accentText}>
              {data[0].penalty.scored || "-"}
            </Text>
          </Text>
        </View>
        <View style={styles.rowWrapper}>
          <Octicons name="no-entry" size={24} color={COLORS.mainGreen} />
          <Text style={styles.textStyle}>
            Penalty-uri ratate:{" "}
            <Text style={styles.accentText}>
              {data[0].penalty.missed || "-"}
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.rightSide}>
        <View style={styles.middleSide}>
          <Text style={styles.ratingStyleTitle}>Rating: </Text>
          <CardType rating={data[0].games.rating} style={styles.cardStyle} />
        </View>
        <View style={styles.bottomRightSide}>
          <View style={styles.rowWrapper}>
            <Ionicons name="football" size={24} color={COLORS.mainGreen} />
            <Text style={styles.textStyle}>
              Goluri marcate:{" "}
              <Text style={styles.accentText}>{data[0].goals.total}</Text>
            </Text>
          </View>
          <View style={styles.rowWrapper}>
            <FontAwesome
              name="handshake-o"
              size={24}
              color={COLORS.mainGreen}
            />
            <Text style={styles.textStyle}>
              Assisturi:{" "}
              <Text style={styles.accentText}>
                {data[0].games.assists || "-"}
              </Text>
            </Text>
          </View>
          <View style={styles.rowWrapper}>
            <Ionicons name="locate" size={24} color={COLORS.mainGreen} />
            <Text style={styles.textStyle}>
              Deposedari:{" "}
              <Text style={styles.accentText}>
                {data[0].tackles.total || "-"}
              </Text>
            </Text>
          </View>
          <View style={styles.rowWrapper}>
            <Entypo
              name="align-horizontal-middle"
              size={24}
              color={COLORS.mainGreen}
            />
            <Text style={styles.textStyle}>
              Interceptii:{" "}
              <Text style={styles.accentText}>
                {data[0].tackles.interceptions || "-"}
              </Text>
            </Text>
          </View>
          <View style={styles.rowWrapper}>
            <Feather name="percent" size={24} color={COLORS.mainGreen} />
            <Text style={styles.textStyle}>
              Driblinguri reusite:{" "}
              <Text style={styles.accentText}>
                {(data[0].dribbles.attempts &&
                  Math.floor(
                    (data[0].dribbles.success / data[0].dribbles.attempts) * 100
                  ) + "%") ||
                  "-"}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerStatsTab;

const styles = StyleSheet.create({
  parentWrapper: {
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.94,
    paddingHorizontal: 5,
  },

  leftSide: {
    flex: 2,
    zIndex: 1,
    // backgroundColor: "lightyellow",
    width: Dimensions.get("window").width * 0.45,
  },

  middleSide: {
    // backgroundColor: "pink",
    marginBottom: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  rightSide: {
    flex: 2,
    zIndex: 1,
    width: Dimensions.get("window").width * 0.45,
    // backgroundColor: "lightblue",
    // alignItems: "flex-end",
  },

  textStyle: {
    fontWeight: "500",
    fontSize: 16,
    color: COLORS.mediumGray,
    marginLeft: 5,
    // marginBottom: 20,
    paddingVertical: 10,
    // backgroundColor: "lightgreen",
  },

  accentText: {
    color: "black",
    fontSize: 18,
  },

  GoldRatingWrapper: {
    backgroundColor: COLORS.goldCard,
    trasparent: true,
    height: Dimensions.get("window").height * 0.25,
    width: Dimensions.get("window").width * 0.3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EBC678",
    justifyContent: "center",
    alignItems: "center",
  },
  SilverRatingWrapper: {
    backgroundColor: COLORS.silverCard,
    trasparent: true,
    height: Dimensions.get("window").height * 0.25,
    width: Dimensions.get("window").width * 0.3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B4B9C1",
    justifyContent: "center",
    alignItems: "center",
  },
  BronzeRatingWrapper: {
    backgroundColor: COLORS.bronzeCard,
    trasparent: true,
    height: Dimensions.get("window").height * 0.25,
    width: Dimensions.get("window").width * 0.3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C6A48A",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingGoldSilverTextStyle: {
    color: "white",
    fontWeight: "600",
    fontSize: 28,
  },

  ratingBronzeTextStyle: {
    color: COLORS.darkGray,
    fontWeight: "600",
    fontSize: 28,
  },

  ratingStyleTitle: {
    fontWeight: "500",
    fontSize: 18,
    color: COLORS.mainGreen,
    marginLeft: 5,
    // marginBottom: 20,
    paddingVertical: 10,
    // backgroundColor: "lightgreen",
  },

  rowWrapper: {
    // backgroundColor: COLORS.lightGray,
    flexDirection: "row",
    alignItems: "center",
    // alignContent: "center",
    // textAlign: "center",
    // verticalAlign: "center",
    width: Dimensions.get("window").width * 0.43,
    // width: Dimensions.get("window").width * 0.32,
    borderWidth: 1,
    borderColor: COLORS.lightGreen,
    borderRadius: 16,
    marginVertical: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    flexWrap: "wrap",
  },
  bottomRightSide: {
    // backgroundColor: "pink",
    alignItems: "flex-end",
  },
});
