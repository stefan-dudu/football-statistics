import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

const LimitAlert = () => {
  return (
    <View style={styles.parentWrapper}>
      <View style={styles.textWrapper}>
        <Text>
          Daca vezi acest ecran, inseamna ca limita pentru astazi a fost atinsa.
          😟 {"\n"}Revin-o si maine pentru mai multe date.
        </Text>
      </View>
    </View>
  );
};

export default LimitAlert;

const styles = StyleSheet.create({
  parentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    // backgroundColor: "pink",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 200,
  },

  textWrapper: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 17,
  },
});
