import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../utils/colors";
import apiSports from "../api/api-sports";
import SmallScoreCardNextMatches from "./SmallScoreCardNextMatches";
import LimitAlert from "../screens/settingsScreens/LimitAlert";
import nextMatchesDummy from "../api/DummyData/nextMatchesDummy";
import LoadingScreen from "../screens/settingsScreens/LoadingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NextMatches = () => {
  const [loading, setLoading] = useState(true);
  const [nextMatches, setNextMatches] = useState(null);
  const [isError, setIsError] = useState("");
  const scrollY = new Animated.Value(0);

  const shouldCallBeMade = async () => {
    try {
      const lastApiCallTimestamp = await AsyncStorage.getItem(
        "lastApiCallTimestamp"
      );
      if (!lastApiCallTimestamp) {
        // First time API call, or timestamp cleared
        return true;
      }

      const currentTime = new Date().getTime();
      const lastCallTime = parseInt(lastApiCallTimestamp, 10);
      const millisecondsIn1Min = 1 * 60000;
      const millisecondsIn15Min = 15 * 60000;
      const millisecondsIn1Hour = 60 * 60000;
      const millisecondsInADay = 24 * 60 * 60 * 1000;

      console.log("currentTime", new Date(currentTime));
      console.log("lastCallTime", new Date(lastCallTime));

      return currentTime - lastCallTime >= millisecondsInADay;
      // ms in 15min
    } catch (error) {
      console.error("Error reading timestamp:", error);
      return false;
    }
  };

  const getNextMatches = async () => {
    // const shouldMakeApiCall = await shouldCallBeMade();
    // console.log("next match, shouldMakeApiCall", shouldMakeApiCall);
    if (true) {
      try {
        const response = await apiSports.get("/fixtures", {
          params: {
            league: 283,
            season: 2023,
            next: 10,
          },
        });

        // console.log("response", response);
        response?.data?.errors?.requests?.includes &&
          setIsError("Max limit for today been reached");
        response?.data.results > 0 &&
          (setNextMatches(response?.data),
          await AsyncStorage.setItem(
            "lastApiCallTimestamp",
            new Date().getTime().toString()
          ));
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    getNextMatches();
  }, []);

  const matchData = nextMatches?.response?.map((el) => {
    return <SmallScoreCardNextMatches data={el} key={el?.fixture?.id} />;
  });

  return (
    <View style={styles.containerStyle}>
      {loading ? (
        // Show a loading spinner or message while waiting for data
        // <Text>Loading...</Text>
        <LoadingScreen />
      ) : nextMatches ? (
        // Render the data when it's available
        <ScrollView
          style={styles.scrollView}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          {matchData}
        </ScrollView>
      ) : isError ? (
        // Handle the case when no data is available or an error occurred
        <LimitAlert />
      ) : (
        // Handle the case when no data is available or an error occurred
        <LoadingScreen />
      )}
    </View>
  );
};

export default NextMatches;

const styles = StyleSheet.create({
  matchOutline: {
    margin: 5,
    borderWidth: 3,
    borderColor: "blue",
    // width: "90%",
    height: 270,
    flexDirection: "column",
    justifyContent: "center",

    flex: 1,
    bottom: 0,
  },

  containerStyle: {
    marginTop: 15,
    flexDirection: "column",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },

  scrollView: {
    flexDirection: "column",
  },

  textHeader: {
    fontSize: 25,
    color: COLORS.titleDarkGray,
    fontWeight: "600",
    marginBottom: 15,
  },
});
