import { StyleSheet, View } from "react-native";
import React from "react";
import LiveMatches from "../components/LiveMatches";
import NextMatches from "../components/NextMatches";
import { backgroundGray } from "../utils/colors";

const Home = ({ navigation }) => {
  return (
    <View style={styles.containerWrapper}>
      <LiveMatches navigation={navigation} />
      <NextMatches navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerWrapper: {
    marginTop: 30,
    marginLeft: 10,
    backgroundColor: backgroundGray,
  },
});
