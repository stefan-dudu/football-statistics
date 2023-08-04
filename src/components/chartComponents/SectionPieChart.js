import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";
import { COLORS } from "../../utils/colors";

const SectionPieChart = () => {
  const pieData = [
    {
      value: 16,
      color: COLORS.mainGreen,
      gradientCenterColor: COLORS.lightGray,
      focused: true,
    },
    {
      value: 4,
      color: COLORS.mediumGray,
      gradientCenterColor: COLORS.lightGray,
    },
    {
      value: 19,
      color: COLORS.leagueRedBackground,
      gradientCenterColor: COLORS.lightGray,
    },
  ];

  const renderDot = (color) => {
    return (
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 50,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const RenderLegendComponent = () => {
    return (
      <View style={styles.legendComponentStyling}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "auto",
            // padding: 10,
          }}
        >
          {renderDot(COLORS.mainGreen)}
          <Text style={styles.legendText}>Victorii</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {renderDot(COLORS.mediumGray)}
          <Text style={styles.legendText}>Egaluri</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {renderDot(COLORS.leagueRedBackground)}
          <Text style={styles.legendText}>Infrangeri</Text>
        </View>
      </View>
    );
  };

  const PieChartElement = () => {
    return (
      <View style={styles.pieChartStyling}>
        <PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={90}
          innerRadius={60}
          innerCircleColor={COLORS.lightGray}
          centerLabelComponent={() => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: COLORS.darkGray,
                    fontWeight: "bold",
                  }}
                >
                  16
                </Text>
                <Text style={{ fontSize: 20, color: COLORS.darkGray }}>
                  Victorii
                </Text>
              </View>
            );
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.parentWrapperStyling}>
      <PieChartElement />
      <RenderLegendComponent />
    </View>
  );
};

export default SectionPieChart;

const styles = StyleSheet.create({
  parentWrapperStyling: {
    paddingVertical: 20,
    width: Dimensions.get("window").width * 0.94,
    height: "auto",
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    justifyContent: "space-evenly",
    // justifyContent: "space-around",
    // justifyContent: "space-between",
    flexDirection: "row",
  },

  legendComponentStyling: {
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "green",
    width: "auto",
  },

  pieChartStyling: {
    paddingTop: 10,
    alignItems: "center",
  },

  legendText: { color: COLORS.darkGray, fontSize: 20, marginVertical: 10 },
});
