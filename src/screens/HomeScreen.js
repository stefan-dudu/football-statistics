import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import LiveMatches from "../components/LiveMatches";
import NextMatches from "../components/NextMatches";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <LiveMatches navigation={navigation} />
        <NextMatches navigation={navigation} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
