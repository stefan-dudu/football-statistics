import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";

const CardsCustomChart = ({ cards }) => {
  const barData = [
    {
      value: 80,
      label: "Jan",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 20, frontColor: "#ED6665" },
    {
      value: 50,
      label: "Feb",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 40, frontColor: "#ED6665" },
    {
      value: 75,
      label: "Mar",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 25, frontColor: "#ED6665" },
    {
      value: 30,
      label: "Apr",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 20, frontColor: "#ED6665" },
    {
      value: 60,
      label: "May",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 40, frontColor: "#ED6665" },
    {
      value: 65,
      label: "Jun",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 30, frontColor: "#ED6665" },
  ];

  //   console.log("cards", cards);

  const cardsData = {
    red: {
      "0-15": { percentage: null, total: null },
      "106-120": { percentage: null, total: null },
      "16-30": { percentage: null, total: null },
      "31-45": { percentage: null, total: null },
      "46-60": { percentage: "14.29%", total: 1 },
      "61-75": { percentage: "42.86%", total: 3 },
      "76-90": { percentage: "28.57%", total: 2 },
      "91-105": { percentage: "14.29%", total: 1 },
    },
    yellow: {
      "0-15": { percentage: "3.75%", total: 3 },
      "106-120": { percentage: null, total: null },
      "16-30": { percentage: "11.25%", total: 9 },
      "31-45": { percentage: "10.00%", total: 8 },
      "46-60": { percentage: "26.25%", total: 21 },
      "61-75": { percentage: "12.50%", total: 10 },
      "76-90": { percentage: "22.50%", total: 18 },
      "91-105": { percentage: "13.75%", total: 11 },
    },
  };

  const bardData2 = [
    {
      value: Object.values(cardsData.yellow)[0].total,
      label: "0",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    {
      value: Object.values(cardsData.red)[0].total,
      label: "0",
      frontColor: "#ED6665",
    },

    {
      value: Object.values(cardsData.yellow)[2].total,
      label: "15",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    {
      value: Object.values(cardsData.red)[2].total,
      label: "15",
      frontColor: "#ED6665",
    },

    {
      value: Object.values(cardsData.yellow)[3].total,
      label: "31-45",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    {
      value: Object.values(cardsData.red)[3].total,
      label: "31-45",
      frontColor: "#ED6665",
    },

    {
      value: Object.values(cardsData.yellow)[4].total,
      label: "46-60",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    {
      value: Object.values(cardsData.red)[4].total,
      label: "46-60",
      frontColor: "#ED6665",
    },

    {
      value: Object.values(cardsData.yellow)[5].total,
      label: "~75",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    {
      value: Object.values(cardsData.red)[5].total,
      label: "~75",
      frontColor: "#ED6665",
    },

    {
      value: Object.values(cardsData.yellow)[6].total,
      label: "76-90",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    {
      value: Object.values(cardsData.red)[6].total,
      label: "76-90",
      frontColor: "#ED6665",
    },
    {
      value:
        Object.values(cardsData.yellow)[7].total +
        Object.values(cardsData.yellow)[1].total,
      label: "90+",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    {
      value:
        Object.values(cardsData.red)[7].total +
        Object.values(cardsData.red)[1].total,
      label: "90+",
      frontColor: "#ED6665",
    },
  ];

  const renderTitle = () => {
    return (
      <View style={{ marginVertical: 30 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Cartonase primite
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 24,
            // backgroundColor: "yellow",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "yellow",
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
                color: "lightgray",
              }}
            >
              Galbene
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "red",
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
                color: "lightgray",
              }}
            >
              Rosii
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: "#333340",
          paddingBottom: 40,
          borderRadius: 10,
          width: 500,
          height: 400,
        }}
      >
        {renderTitle()}
        <BarChart
          data={bardData2}
          barWidth={8}
          spacing={24}
          roundedTop
          roundedBottom
          hideRules
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{ color: "gray" }}
          noOfSections={3}
          maxValue={25}
        />
      </View>
    </View>
  );
};

export default CardsCustomChart;

const styles = StyleSheet.create({});
