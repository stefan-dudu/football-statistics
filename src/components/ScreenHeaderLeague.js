import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../utils/colors";

const ScreenHeaderLeague = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.parentWrapper}>
      <ImageBackground
        source={require("../../assets/leagueBg.png")}
        // resizeMode="cover"
        imageStyle={{ borderRadius: 6, height: 100, zIndex: -1 }}
      >
        <View style={styles.childWrapper}>
          <View style={styles.contentWrapper}>
            <Entypo
              name="chevron-left"
              size={44}
              color="white"
              onPress={() => navigation.goBack()}
              // onPress={() => console.log("testt")}
            />
            <Text style={styles.textStyle}>Superliga</Text>
            <Text style={styles.textStyle}>:</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ScreenHeaderLeague;

const styles = StyleSheet.create({
  parentWrapper: {
    // left: -16,
    backgroundColor: COLORS.leagueRedBackground,
    paddingTop: 30,
    height: 250,
    // borderRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: Dimensions.get("window").width,
    // position: "absolute",
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
  },

  childWrapper: {
    // backgroundColor: "pink",
    flexDirection: "row",
    // alignContent: "center",
    width: Dimensions.get("window").width,
    height: 50,
    // alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textStyle: {
    // backgroundColor: "lightblue",
    // justifyContent: "center",
    // textAlign: "center",
    color: "white",
    fontSize: 26,
    fontWeight: "600",
    marginVertical: 5,
    flexDirection: "row",
    left: -10,
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
  },

  leagueBGStyle: {
    // height: 250,
    height: 100,
  },

  contentWrapper: {
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    // backgroundColor: "pink",
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    zIndex: 10,
    // height: 100,
  },
});
