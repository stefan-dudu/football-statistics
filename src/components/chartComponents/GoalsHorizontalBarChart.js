import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";
import { COLORS } from "../../utils/colors";

const GoalsHorizontalBarChart = ({ home, away }) => {
  const barData = [
    {
      value: home,
      label: "Ho",
      labelComponent: () => <Text style={{ fontSize: 18, width: 20 }}>🏠</Text>,
      topLabelComponent: () => <Text style={styles.topLabelStyle}>{home}</Text>,
      frontColor: COLORS.lightGreen,
    },
    {
      value: away,
      label: "Aw",
      labelComponent: () => (
        <Text style={{ fontSize: 16, width: 22, height: 20 }}>➡️</Text>
      ),
      topLabelComponent: () => <Text style={styles.topLabelStyle}>{away}</Text>,
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
          frontColor={COLORS.mediumGray}
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules
        />
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
    color: COLORS.darkGray,
    fontSize: 18,
    marginLeft: 16,
    width: 20,
    height: 20,
  },
});
