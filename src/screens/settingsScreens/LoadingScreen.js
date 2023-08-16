import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";

const LoadingScreen = () => {
  return (
    <View style={styles.parentWrapper}>
      <Text style={styles.textStyle}>Informatiile se incarca ... </Text>
      <Image
        style={styles.loading}
        source={require("../../../assets/loading_gif.gif")}
      />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  parentWrapper: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },

  loading: {
    width: 100,
    height: 100,
    // borderWidth: 1,
    borderRadius: 16,
    marginTop: 30,
  },

  textStyle: {
    fontSize: 20,
    color: COLORS.mainGreen,
  },
});
