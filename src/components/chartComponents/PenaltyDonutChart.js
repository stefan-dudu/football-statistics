import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";
import { COLORS } from "../../utils/colors";

const PenaltyDonutChart = () => {
  const pieData = [
    { value: 70, color: "#177AD5" },
    { value: 30, color: "lightgray" },
  ];
  return (
    <View style={styles.parentWrapper}>
      <PieChart
        donut
        radius={90}
        innerRadius={80}
        data={pieData}
        centerLabelComponent={() => {
          return <Text style={{ fontSize: 30 }}>70%</Text>;
        }}
      />
      <Text style={styles.legendStyle}>Pentaly-uri transformate cu succes</Text>
    </View>
  );
};

export default PenaltyDonutChart;

const styles = StyleSheet.create({
  parentWrapper: {
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 16,
    width: Dimensions.get("window").width - 40,
    height: "auto",
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 20,
  },
  legendStyle: {
    // backgroundColor: "green",
    maxWidth: Dimensions.get("window").width - 250,
    color: COLORS.textGrayButtons,
    flexWrap: "wrap",
  },
});
