import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LimitAlert = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.parentWrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.textStyle}>
          Cam atât pentru azi..{"\n"}
          Dacă vezi acest ecran, înseamnă că limita pentru astăzi a fost atinsă.
          😟 {"\n"}
          Furnizorul de unde preluăm datele impune o limită zilnică pentru tipul
          curent de abonament.{"\n"}
          Dar stai fară griji, revino și mâine pentru mai multe date.
        </Text>
      </View>
    </View>
  );
};

export default LimitAlert;

const styles = StyleSheet.create({
  parentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    // backgroundColor: "pink",
    // paddingHorizontal: 20,
    width: Dimensions.get("window").width * 0.89,
    height: 300,
    flexWrap: "wrap",
  },

  textWrapper: {
    backgroundColor: "white",
    padding: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 17,
  },

  buttonStyle: {
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    marginBottom: -4,
  },

  textStyle: {
    fontSize: 16,
    lineHeight: 24,
    // backgroundColor: "blue",
  },
});
