import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BigScoreCard from "./BigScoreCard";

const TestComponent = ({ data, page }) => {
  return (
    <View style={styles.textStyle}>
      <BigScoreCard data={data} page={"details"} />
    </View>
  );
};

export default TestComponent;

const styles = StyleSheet.create({
  textStyle: {
    top: 50,
    left: "9%",
    height: "auto",
  },
});
