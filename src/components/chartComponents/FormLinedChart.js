import { StyleSheet, View, Dimensions } from "react-native";
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
        currentValue += 0;
      } else if (currentChar === "D") {
        currentValue += 1;
      } else if (currentChar === "W") {
        currentValue += 3;
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
          yAxisColor={COLORS.pink}
          xAxisColor={COLORS.pink}
          color={COLORS.gray}
          width={Dimensions.get("window").width - 93}
          startFillColor={COLORS.pink}
          startOpacity={0.8}
          endFillColor={COLORS.backgroundGray}
          endOpacity={0.3}
        />
      </View>
    </View>
  );
};

export default FormLinedChart;

const styles = StyleSheet.create({
  wrapperStyle: {
    width: Dimensions.get("window").width - 40,
    // backgroundColor: "#1A3461",
    margin: 0,
  },
});
