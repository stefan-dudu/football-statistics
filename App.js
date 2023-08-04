import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./src/screens/Home";
import Standings from "./src/screens/Standings";
import Statistics from "./src/screens/Statistics";
import Settings from "./src/screens/Settings";

import DetailsScreen from "./src/screens/subScreens/DetailsScreen";
import TeamStats from "./src/screens/subScreens/TeamStats";
import { COLORS } from "./src/utils/colors";

import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Acasa"
      component={Home}
      options={{ headerShown: false }}
    />
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
        <Tab.Screen
          name="Clasament"
          component={Standings}
          options={{ headerShown: true }}
        />
        <Tab.Screen
          name="Statistici"
          component={Statistics}
          navigation={navigation}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              // console.log("e", e);
              // console.log("navigation", navigation.isFocused());
              navigation.isFocused() && navigation.navigate("Statistici"),
                { screen: "Device" };
            },
          })}
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
