import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";

const PenaltyDonutChart = () => {
  const pieData = [
    { value: 70, color: "#177AD5" },
    { value: 30, color: "lightgray" },
  ];
  return (
    <View>
      <Text>PenaltyDonutChart</Text>
      <PieChart
        donut
        innerRadius={95}
        data={pieData}
        centerLabelComponent={() => {
          return <Text style={{ fontSize: 30 }}>70%</Text>;
        }}
      />
    </View>
  );
};

export default PenaltyDonutChart;

const styles = StyleSheet.create({});
