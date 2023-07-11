import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LiveMatches from "../components/LiveMatches";
import NextMatches from "../components/NextMatches";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home page</Text>
      <LiveMatches />
      <NextMatches />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
