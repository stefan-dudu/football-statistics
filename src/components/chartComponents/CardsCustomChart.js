import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";
import { COLORS } from "../../utils/colors";

const CardsCustomChart = ({ cards }) => {
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
      label: "0-15",
      spacing: 1,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
    },
    {
      value: Object.values(cardsData.red)[0].total,
      frontColor: COLORS.redCard,
    },

    {
      value: Object.values(cardsData.yellow)[2].total,
      label: "16-30",
      spacing: 1,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
    },
    {
      value: Object.values(cardsData.red)[2].total,
      frontColor: COLORS.redCard,
    },

    {
      value: Object.values(cardsData.yellow)[3].total,
      label: "31-45",
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
    },
    {
      value: Object.values(cardsData.red)[3].total,
      frontColor: COLORS.redCard,
    },

    {
      value: Object.values(cardsData.yellow)[4].total,
      label: "46-60",
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
    },
    {
      value: Object.values(cardsData.red)[4].total,
      frontColor: COLORS.redCard,
    },

    {
      value: Object.values(cardsData.yellow)[5].total,
      label: "61-75",
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
    },
    {
      value: Object.values(cardsData.red)[5].total,
      frontColor: COLORS.redCard,
    },

    {
      value: Object.values(cardsData.yellow)[6].total,
      label: "76-90",
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
    },
    {
      value: Object.values(cardsData.red)[6].total,
      frontColor: COLORS.redCard,
    },
    {
      value:
        Object.values(cardsData.yellow)[7].total +
        Object.values(cardsData.yellow)[1].total,
      label: "90+",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
    },
    {
      value:
        Object.values(cardsData.red)[7].total +
        Object.values(cardsData.red)[1].total,
      frontColor: COLORS.redCard,
    },
  ];

  const renderTitle = () => {
    return (
      <View style={{ marginVertical: 30 }}>
        <Text
          style={{
            color: COLORS.titleDarkGray,
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
                backgroundColor: COLORS.yellowCard,
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
                backgroundColor: COLORS.redCard,
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
    <View style={styles.parentWrapper}>
      {renderTitle()}
      <BarChart
        data={bardData2}
        barWidth={18}
        barBorderRadius={4}
        spacing={24}
        // roundedTop
        // roundedBottom
        hideRules
        xAxisThickness={1}
        yAxisThickness={1}
        yAxisTextStyle={{ color: "gray" }}
        noOfSections={3}
        maxValue={25}
        width={Dimensions.get("window").width - 87}
        initialSpacing={12}
      />
    </View>
  );
};

export default CardsCustomChart;

const styles = StyleSheet.create({
  parentWrapper: {
    // backgroundColor: COLORS.lightPink,
    borderWidth: 1,
    borderColor: COLORS.lightPurple,
    paddingBottom: 40,
    borderRadius: 10,
    width: Dimensions.get("window").width - 40,
    height: 400,
  },
});
