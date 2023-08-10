import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";

CardType = ({ rating }) => {
  if (rating >= 8) {
    return (
      <View style={styles.GoldRatingWrapper}>
        {/* <Text>Gold</Text> */}
        <Text style={styles.ratingGoldSilverTextStyle}>
          {rating?.slice(0, -4) || "-"}
        </Text>
      </View>
    );
  } else if (rating >= 7 && rating < 8) {
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

export default CardType;

const styles = StyleSheet.create({
  GoldRatingWrapper: {
    backgroundColor: COLORS.goldCard,
    trasparent: true,
    height: 90,
    width: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EBC678",
    justifyContent: "center",
    alignItems: "center",
  },
  SilverRatingWrapper: {
    backgroundColor: COLORS.silverCard,
    trasparent: true,
    height: 90,
    width: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B4B9C1",
    justifyContent: "center",
    alignItems: "center",
  },
  BronzeRatingWrapper: {
    backgroundColor: COLORS.bronzeCard,
    trasparent: true,
    height: 90,
    width: 55,
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
