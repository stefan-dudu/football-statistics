import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";

const SectionPieChart = () => {
  const pieData = [
    {
      value: 16,
      color: "#009FFF",
      gradientCenterColor: "#006DFF",
      focused: true,
    },
    { value: 4, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
    { value: 19, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
  ];

  const renderDot = (color) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const RenderLegendComponent = () => {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          //   marginBottom: 10,
          //   backgroundColor: "pink",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 120,
          }}
        >
          {renderDot("#006DFF")}
          <Text style={{ color: "white" }}>Victorii</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {renderDot("#3BE9DE")}
          <Text style={{ color: "white" }}>Egaluri</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {renderDot("#8F80F3")}
          <Text style={{ color: "white" }}>Infrangeri</Text>
        </View>
      </View>
    );
  };

  const PieChartElement = () => {
    return (
      <View style={{ padding: 20, alignItems: "center" }}>
        <PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={90}
          innerRadius={60}
          innerCircleColor={"#232B5D"}
          centerLabelComponent={() => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 22,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  16
                </Text>
                <Text style={{ fontSize: 14, color: "white" }}>Victorii</Text>
              </View>
            );
          }}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        paddingVertical: 30,
        // backgroundColor: "#34448B",
        // flex: 1,
        width: Dimensions.get("window").width - 50,
        height: "auto",
      }}
    >
      <View
        style={{
          //   margin: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: "#232B5D",
          flexDirection: "row",
        }}
      >
        <PieChartElement />
        <RenderLegendComponent />
      </View>
    </View>
  );
};

export default SectionPieChart;

const styles = StyleSheet.create({});
