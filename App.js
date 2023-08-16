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
import DetailedPlayerScreen from "./src/screens/statisticsTabsScreens/DetailedPlayerScreen";
import { COLORS } from "./src/utils/colors";

import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Acasa"
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

const SatisticsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="StatisticsStack"
      component={Statistics}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PlayerDetailsStatistics"
      component={DetailedPlayerScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // tabBarShowLabel: false,
          tabBarStyle: {
            // backgroundColor: COLORS.mainGreen,
          },
          tabBarActiveTintColor: COLORS.mainGreen,
        }}
      >
        <Tab.Screen
          name="Acasă"
          component={HomeStack}
          options={{
            headerShown: false,
            // tabBarBadge: 3,
            tabBarBadgeStyle: {
              // backgroundColor: COLORS.mainGreen,
            },
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Clasament"
          component={Standings}
          options={{
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <Ionicons name="podium-outline" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Statistici"
          component={SatisticsStack}
          navigation={navigation}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <AntDesign name="barschart" size={24} color={color} />
            ),
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
          name="Setări"
          component={Settings}
          options={{
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <AntDesign name="setting" size={24} color={color} />
            ),
          }}
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
