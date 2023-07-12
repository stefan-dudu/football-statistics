import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Explore from "./src/screens/Explore";
import Graphs from "./src/screens/Graphs";
import Settings from "./src/screens/Settings";

const Tab = createBottomTabNavigator();

export default function App({ navigation, route }) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen
          name="Graphs"
          component={Graphs}
          navigation={navigation}
          screenOptions={{ headerTitle: "Test", headerShown: false }}
          options={{
            title: "Crazy test tile",
            headerTitle: "test title",
            headerLeft: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
