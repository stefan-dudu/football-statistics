import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CollapsibleHeader from "../components/CollapsibleHeader";
import { BarChart, LineChart } from "react-native-gifted-charts";

const Settings = () => {
  const barData = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
  const lineData = [
    { value: 0, dataPointText: "0" },
    { value: 20, dataPointText: "20" },
    { value: 18, dataPointText: "18" },
    { value: 40, dataPointText: "40" },
    { value: 36, dataPointText: "36" },
    { value: 60, dataPointText: "60" },
    { value: 54, dataPointText: "54" },
    { value: 85, dataPointText: "85" },
  ];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.textStyle}>Settings! x</Text>
      {/* <BarChart data={barData} /> */}
      <View style={{ backgroundColor: "#1A3461" }}>
        <LineChart
          isAnimated
          initialSpacing={0}
          data={lineData}
          spacing={30}
          textColor1="yellow"
          textShiftY={-8}
          textShiftX={-10}
          textFontSize={13}
          thickness={5}
          hideRules
          hideYAxisText
          yAxisColor="#0BA5A4"
          showVerticalLines
          verticalLinesColor="rgba(14,164,164,0.5)"
          xAxisColor="#0BA5A4"
          color="#0BA5A4"
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "600",
  },
});
