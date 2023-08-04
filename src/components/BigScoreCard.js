import { StyleSheet, View } from "react-native";
import React from "react";
import Home1stCard from "./BigCardVariations/Home1stCard";
import HomeOtherCards from "./BigCardVariations/HomeOtherCards";
import TeamsComparasionCard from "./BigCardVariations/TeamsComparasionCard";

const BigScoreCard = ({ data, page, i }) => {
  return (
    <View>
      {page === "home" && i == 0 && <Home1stCard data={data} />}
      {page === "home" && i > 0 && <HomeOtherCards data={data} />}
      {page === "details" && <TeamsComparasionCard data={data} page={page} />}
    </View>
  );
};

export default BigScoreCard;

const styles = StyleSheet.create({});
