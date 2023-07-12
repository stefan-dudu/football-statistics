import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LiveMatches from "../components/LiveMatches";
import NextMatches from "../components/NextMatches";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="button"
        onPress={() =>
          navigation.navigate("Graphs", {
            params: "random params here",
          })
        }
      />
      <Text>Home page</Text>
      <LiveMatches navigation={navigation} style={styles.LiveMatchesStyle} />
      <NextMatches navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  LiveMatchesStyle: {
    backgroundColor: "green",
  },
});
