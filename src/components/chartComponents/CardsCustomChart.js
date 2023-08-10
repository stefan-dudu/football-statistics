import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";
import { COLORS } from "../../utils/colors";

const CardsCustomChart = ({ cards }) => {
  const cardsData = {
    red: {
      "0-15": {
        percentage: cards.red["0-15"].percentage,
        total: cards.red["0-15"].total,
      },
      "106-120": {
        percentage: cards.red["106-120"].percentage,
        total: cards.red["106-120"].total,
      },
      "16-30": {
        percentage: cards.red["16-30"].percentage,
        total: cards.red["16-30"].total,
      },
      "31-45": {
        percentage: cards.red["31-45"].percentage,
        total: cards.red["31-45"].total,
      },
      "46-60": {
        percentage: cards.red["46-60"].percentage,
        total: cards.red["46-60"].total,
      },
      "61-75": {
        percentage: cards.red["61-75"].percentage,
        total: cards.red["61-75"].total,
      },
      "76-90": {
        percentage: cards.red["76-90"].percentage,
        total: cards.red["76-90"].total,
      },
      "91-105": {
        percentage: cards.red["91-105"].percentage,
        total: cards.red["91-105"].total,
      },
    },
    yellow: {
      "0-15": {
        percentage: cards.yellow["0-15"].percentage,
        total: cards.yellow["0-15"].total,
      },
      "106-120": {
        percentage: cards.yellow["106-120"].percentage,
        total: cards.yellow["106-120"].total,
      },
      "16-30": {
        percentage: cards.yellow["16-30"].percentage,
        total: cards.yellow["16-30"].total,
      },
      "31-45": {
        percentage: cards.yellow["31-45"].percentage,
        total: cards.yellow["31-45"].total,
      },
      "46-60": {
        percentage: cards.yellow["46-60"].percentage,
        total: cards.yellow["46-60"].total,
      },
      "61-75": {
        percentage: cards.yellow["61-75"].percentage,
        total: cards.yellow["61-75"].total,
      },
      "76-90": {
        percentage: cards.yellow["76-90"].percentage,
        total: cards.yellow["76-90"].total,
      },
      "91-105": {
        percentage: cards.yellow["91-105"].percentage,
        total: cards.yellow["91-105"].total,
      },
    },
  };

  const bardData2 = [
    {
      value: Object.values(cardsData.yellow)[0].total,
      label: "0-15'",
      spacing: 1,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.yellow)[0].total}
        </Text>
      ),
    },
    {
      value: Object.values(cardsData.red)[0].total,
      frontColor: COLORS.redCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.red)[0].total}
        </Text>
      ),
    },

    {
      value: Object.values(cardsData.yellow)[2].total,
      label: "16-30'",
      spacing: 1,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.yellow)[2].total}
        </Text>
      ),
    },
    {
      value: Object.values(cardsData.red)[2].total,
      frontColor: COLORS.redCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.red)[2].total}
        </Text>
      ),
    },

    {
      value: Object.values(cardsData.yellow)[3].total,
      label: "31-45'",
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.yellow)[3].total}
        </Text>
      ),
    },
    {
      value: Object.values(cardsData.red)[3].total,
      frontColor: COLORS.redCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.red)[3].total}
        </Text>
      ),
    },

    {
      value: Object.values(cardsData.yellow)[4].total,
      label: "46-60'",
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.yellow)[4].total}
        </Text>
      ),
    },
    {
      value: Object.values(cardsData.red)[4].total,
      frontColor: COLORS.redCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.red)[4].total}
        </Text>
      ),
    },

    {
      value: Object.values(cardsData.yellow)[5].total,
      label: "61-75'",
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.yellow)[5].total}
        </Text>
      ),
    },
    {
      value: Object.values(cardsData.red)[5].total,
      frontColor: COLORS.redCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.red)[5].total}
        </Text>
      ),
    },

    {
      value: Object.values(cardsData.yellow)[6].total,
      label: "76-90'",
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.yellow)[6].total}
        </Text>
      ),
    },
    {
      value: Object.values(cardsData.red)[6].total,
      frontColor: COLORS.redCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.red)[6].total}
        </Text>
      ),
    },
    {
      value:
        Object.values(cardsData.yellow)[7].total +
        Object.values(cardsData.yellow)[1].total,
      label: "90'+",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: COLORS.yellowCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.yellow)[7].total +
            Object.values(cardsData.yellow)[1].total || ""}
        </Text>
      ),
    },
    {
      value:
        Object.values(cardsData.red)[7].total +
        Object.values(cardsData.red)[1].total,
      frontColor: COLORS.redCard,
      topLabelComponent: () => (
        <Text style={styles.topLabelStyle}>
          {Object.values(cardsData.red)[7].total +
            Object.values(cardsData.red)[1].total || ""}
        </Text>
      ),
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
            width: Dimensions.get("window").width * 0.94,
            backgroundColor: "blue",
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
                width: 100,
                height: 30,
                color: COLORS.darkGray,
                fontSize: 20,
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
                width: 100,
                height: 30,
                color: COLORS.darkGray,
                fontSize: 20,
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
        yAxisColor={COLORS.darkGreen}
        xAxisColor={COLORS.darkGreen}
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
    borderWidth: 2,
    borderColor: COLORS.lightGreen,
    paddingBottom: 40,
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.94,
    height: 400,
  },
});
