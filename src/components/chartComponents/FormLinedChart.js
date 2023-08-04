import { StyleSheet, View, Dimensions, Text } from "react-native";
import React from "react";
import { LineChart } from "react-native-gifted-charts";
import { COLORS } from "../../utils/colors";

const FormLinedChart = ({ form }) => {
  function transformStringToArray(inputString) {
    const resultArray = [];
    let previousValue = 0;

    for (let i = 0; i < inputString.length; i++) {
      const currentChar = inputString[i];
      let currentValue = previousValue;

      if (currentChar === "L") {
        currentValue -= 1;
      } else if (currentChar === "D") {
        currentValue += 0;
      } else if (currentChar === "W") {
        currentValue += 2;
      }

      resultArray.push({ value: currentValue, dataPointText: currentChar });
      previousValue = currentValue;
    }

    return resultArray;
  }

  const resultArray = transformStringToArray(form);

  return (
    <View>
      <View style={styles.wrapperStyle}>
        <View style={styles.legendWrapper}>
          <Text style={{ color: COLORS.formGreenWin, fontSize: 15 }}>
            W = Victorie
          </Text>
          <Text style={{ color: COLORS.formGrayDraw, fontSize: 15 }}>
            D = Egal
          </Text>
          <Text style={{ color: COLORS.formRedLoose, fontSize: 15 }}>
            L = Infrangere
          </Text>
        </View>
        <LineChart
          // isAnimated
          // hideDataPoints
          areaChart
          curved
          initialSpacing={20}
          data={resultArray}
          spacing={23}
          textColor1={COLORS.gray}
          textShiftY={-8}
          textShiftX={-10}
          textFontSize={13}
          thickness={2}
          hideRules
          hideYAxisText
          yAxisColor={COLORS.darkGreen}
          xAxisColor={COLORS.darkGreen}
          color={COLORS.lightGreen}
          width={Dimensions.get("window").width * 0.86}
          startFillColor={COLORS.mainGreen}
          startOpacity={0.8}
          endFillColor={COLORS.backgroundGray}
          endOpacity={0.3}
          noOfSectionsBelowXAxis={3}
        />
      </View>
    </View>
  );
};

export default FormLinedChart;

const styles = StyleSheet.create({
  wrapperStyle: {
    width: Dimensions.get("window").width * 1,
    // backgroundColor: "#1A3461",
    marginLeft: -20,
  },
  legendWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width * 0.94,
    marginLeft: 30,
    // backgroundColor: "red",
  },
});
