import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";

const GoalsHorizontalBarChart = () => {
  const barData = [
    {
      value: 21,
      label: "Ho",
      labelComponent: () => (
        <Text style={{ color: "blue", fontSize: 18, width: 20 }}>🏠</Text>
      ),
      frontColor: "#177AD5",
    },
    {
      value: 16,
      label: "Aw",
      labelComponent: () => (
        <Text style={{ color: "blue", fontSize: 18, width: 20 }}>➡️</Text>
      ),
    },
  ];
  return (
    <View>
      <View style={styles.wrapper}>
        <BarChart
          horizontal
          barWidth={20}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
    </View>
  );
};

export default GoalsHorizontalBarChart;

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: "pink",
    width: 400,
    height: 200,
    paddingTop: 50,
  },
});
