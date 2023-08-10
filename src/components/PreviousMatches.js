import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../utils/colors";
import apiSports from "../api/api-sports";
import SmallScoreCardNextMatches from "./SmallScoreCardNextMatches";
import LimitAlert from "../screens/settingsScreens/LimitAlert";
import SmallScoreCardPreviousMatches from "./SmallScoreCardPreviousMatches";
import previousMatchesDummy from "../api/DummyData/previousMatchesDummy";

const PreviousMatches = () => {
  const [loading, setLoading] = useState(true);
  const [previousMatches, setPreviousMatches] = useState(null);
  const [isError, setIsError] = useState("");
  const scrollY = new Animated.Value(0);

  const getPreviousMatches = async () => {
    try {
      const response = await apiSports.get("/fixtures", {
        params: {
          league: 283,
          season: 2023,
          last: 10,
        },
      });

      // console.log(
      //   "response?.data",
      //   response?.data.errors.requests.includes(
      //     "reached the request limit for the day"
      //   )
      // );
      response?.data?.errors?.requests?.includes &&
        setIsError("Max limit for today been reached");
      response?.data.results > 0 && setPreviousMatches(response?.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // getPreviousMatches();
  }, []);

  const matchData = previousMatches?.response?.map((el) => {
    return <SmallScoreCardPreviousMatches data={el} key={el?.fixture?.id} />;
  });

  return (
    <View style={styles.containerStyle}>
      {loading ? (
        // Show a loading spinner or message while waiting for data
        <Text>Loading...</Text>
      ) : previousMatches ? (
        // Render the data when it's available
        <ScrollView
          style={styles.scrollView}
          scrollEventThrottle={16}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { y: 0 } } }],
          //   { useNativeDriver: false }
          // )}
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
        // <Text>S-a atins limita pentru azi</Text>
        // Handle the case when no data is available or an error occurred
        <Text>Some other error</Text>
      )}
    </View>
  );
};

export default PreviousMatches;

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
