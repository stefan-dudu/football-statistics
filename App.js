import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./src/screens/Home";
import Standings from "./src/screens/Standings";
import Statistics from "./src/screens/Statistics";
import Settings from "./src/screens/Settings";

import DetailsScreen from "./src/screens/subScreens/DetailsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeStack"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{ headerShown: false }}
    />
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
        <Tab.Screen
          name="Standings"
          component={Standings}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
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
  },
});
