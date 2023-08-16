import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../utils/colors";
import apiSports from "../api/api-sports";
import SmallScoreCardNextMatches from "./SmallScoreCardNextMatches";
import LimitAlert from "../screens/settingsScreens/LimitAlert";
import nextMatchesDummy from "../api/DummyData/nextMatchesDummy";
import LoadingScreen from "../screens/settingsScreens/LoadingScreen";

const NextMatches = () => {
  const [loading, setLoading] = useState(true);
  const [nextMatches, setNextMatches] = useState(null);
  const [isError, setIsError] = useState("");
  const scrollY = new Animated.Value(0);

  const getNextMatches = async () => {
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
      response?.data.results > 0 && setNextMatches(response?.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
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
