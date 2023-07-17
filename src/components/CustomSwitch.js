import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../utils/colors";

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 44,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: COLORS.pink,
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          width: 70,
          backgroundColor:
            getSelectionMode == 1 ? COLORS.pink : COLORS.buttonsBackgroundGray,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 1 ? "white" : COLORS.textGrayButtons,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          width: 70,
          backgroundColor:
            getSelectionMode == 2 ? COLORS.pink : COLORS.buttonsBackgroundGray,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 2 ? "white" : COLORS.textGrayButtons,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(3)}
        style={{
          width: 70,
          backgroundColor:
            getSelectionMode == 3 ? COLORS.pink : COLORS.buttonsBackgroundGray,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 3 ? "white" : COLORS.textGrayButtons,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {option3}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(4)}
        style={{
          width: 70,
          backgroundColor:
            getSelectionMode == 4 ? COLORS.pink : COLORS.buttonsBackgroundGray,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 4 ? "white" : COLORS.textGrayButtons,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {option4}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
