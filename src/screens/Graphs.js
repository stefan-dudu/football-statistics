import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const Graphs = (params, { navigation }) => {
  // // console.log("params", params.route.params.fixtureID);

  // // const fixtureID = params?.route?.params?.fixtureID;

  // console.log("params", params.navigation.getState());
  // // console.log("navigation.getState();", navigation());

  // const navigationNative = useNavigation();
  // console.log("currentScreen", navigationNative);
  // const isFocused = useIsFocused();
  // console.log("isFocused", isFocused);

  return (
    <View>
      <View>
        <Text>Clasament</Text>
      </View>
    </View>
  );
};

export default Graphs;

const styles = StyleSheet.create({});
