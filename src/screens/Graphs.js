import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Graphs = (params, { navigation }) => {
  // console.log("params", params.route.params.fixtureID);

  const fixtureID = params.route.params.fixtureID;

  // console.log("params", params);
  // console.log("navigation.getState();", navigation());

  return (
    <View>
      <Text>Graphs</Text>
      <Text>Fixture id: {fixtureID}</Text>
      <Text>Score</Text>
      <Text>Spurs 2 : 1 Man City</Text>
    </View>
  );
};

export default Graphs;

const styles = StyleSheet.create({});
