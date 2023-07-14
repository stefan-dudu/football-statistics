import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Stats from "../tabsScreens/Stats";
import Summary from "../tabsScreens/Summary";
import LineUp from "../tabsScreens/LineUp";
import Head2Head from "../tabsScreens/Head2Head";

const MiddleTab = createMaterialTopTabNavigator();

const DetailedTabs = () => {
  return (
    <MiddleTab.Navigator>
      <MiddleTab.Screen name="Stats" component={Stats} />
      <MiddleTab.Screen name="Summary" component={Summary} />
      <MiddleTab.Screen name="LineUp" component={LineUp} />
      <MiddleTab.Screen name="Head2Head" component={Head2Head} />
    </MiddleTab.Navigator>
    // <Text>Test detailed tabs</Text>
  );
};

export default DetailedTabs;

const styles = StyleSheet.create({});
