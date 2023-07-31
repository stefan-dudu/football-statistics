import { StyleSheet, Text, View, Dimensions } from "react-native";
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
      topLabelComponent: () => <Text style={styles.topLabelStyle}>21</Text>,
      frontColor: "#177AD5",
    },
    {
      value: 16,
      label: "Aw",
      labelComponent: () => (
        <Text style={{ color: "blue", fontSize: 18, width: 20 }}>➡️</Text>
      ),
      topLabelComponent: () => <Text style={styles.topLabelStyle}>16</Text>,
    },
  ];
  return (
    <View>
      <View style={styles.wrapper}>
        <BarChart
          // isAnimated
          height={160}
          // width={300}
          horizontal
          barWidth={20}
          noOfSections={2}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules
        />

        {/* <BarChart
          horizontal
          height={140}
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        /> */}
      </View>
    </View>
  );
};

export default GoalsHorizontalBarChart;

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: "pink",
    width: Dimensions.get("window").width,
    height: 150,
    paddingTop: 50,
    // top: 10,
    // alignItems: "center",
  },

  topLabelStyle: {
    // backgroundColor: "green",
    color: "red",
    fontSize: 18,
    marginLeft: 16,
    width: 20,
    height: 20,
  },
});
