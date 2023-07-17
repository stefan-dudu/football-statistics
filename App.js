import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./src/screens/Home";
import Explore from "./src/screens/Explore";
import Graphs from "./src/screens/Graphs";
import Settings from "./src/screens/Settings";

import DetailsScreen from "./src/screens/subScreens/DetailsScreen";
import Stats from "./src/screens/tabsScreens/Stats";
import Summary from "./src/screens/tabsScreens/Summary";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    // used if we want the top navs
    <TopTab.Navigator style={styles.topBar}>
      <TopTab.Screen name="Tab1" component={Stats} />
      <TopTab.Screen name="Tab2" component={Summary} />
    </TopTab.Navigator>
  );
};

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeStack" component={Home} />
    {/* <Stack.Screen name="Details" component={TopTabNavigator} /> */}
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen
          name="Graphs"
          component={Graphs}
          navigation={navigation}
          screenOptions={{ headerTitle: "Test", headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  topBar: {
    position: "relative",
    top: 200,
    elevation: 0,
    height: 20,
    // bottom: 25,
    // left: 20,
  },
});
