import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import TeamStats from "./subScreens/TeamStats";

const Statistics = (params) => {
  console.log("params", params?.route?.params?.params);

  const clubName = params?.route?.params?.params?.name;

  return (
    <View>
      <View>
        <Text>Statistics</Text>
        {clubName ? (
          <TeamStats params={params?.route?.params?.params} />
        ) : (
          <Text>General stats</Text>
        )}
      </View>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({});
