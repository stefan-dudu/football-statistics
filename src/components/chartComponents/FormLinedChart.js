import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-gifted-charts";

const FormLinedChart = ({ form }) => {
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

  //   console.log("form", form);
  //   console.log(form.split(""));

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
      <View style={{ backgroundColor: "#1A3461" }}>
        <LineChart
          //   isAnimated
          curved
          initialSpacing={0}
          data={resultArray}
          spacing={30}
          textColor1="yellow"
          textShiftY={-8}
          textShiftX={-10}
          textFontSize={13}
          thickness={5}
          hideRules
          hideYAxisText
          yAxisColor="#0BA5A4"
          //   showVerticalLines
          verticalLinesColor="rgba(14,164,164,0.5)"
          xAxisColor="#0BA5A4"
          color="#0BA5A4"
        />
      </View>
    </View>
  );
};

export default FormLinedChart;

const styles = StyleSheet.create({});
