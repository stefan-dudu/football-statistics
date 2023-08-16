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
          Cam atat pentru azi..{"\n"}
          Daca vezi acest ecran, inseamna ca limita pentru astazi a fost atinsa.
          😟 {"\n"}
          Furnizorul de unde preluam datele impune o limita zilnica pentru tipul
          curent de abonament.{"\n"}
          Dar stai fara griji, revino si maine pentru mai multe date.
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
