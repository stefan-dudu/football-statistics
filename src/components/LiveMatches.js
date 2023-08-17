import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import apiSports from "../api/api-sports";
import BigScoreCard from "./BigScoreCard";
import { COLORS } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import liveMatchesDummy from "../api/DummyData/liveMatchesDummy";
import LimitAlert from "../screens/settingsScreens/LimitAlert";
import LoadingScreen from "../screens/settingsScreens/LoadingScreen";

const LiveMatches = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [liveMatchesData, setLiveMatchesData] = useState(null);
  const [isError, setIsError] = useState("");

  const getLiveMatches = async () => {
    try {
      const response = await apiSports.get("/fixtures", {
        params: {
          league: 283,
          season: 2023,
          live: "all",
        },
      });
      response?.data?.errors?.requests?.includes &&
        setIsError("Max limit for today been reached");

      response?.data.results > 0 && setLiveMatchesData(response?.data);
      setLoading(false);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  const matchData = liveMatchesData?.response?.map((el, i) => {
    // console.log("i", i);
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            fixtureData: el,
            typeOfMatch: "live",
          })
        }
        key={el.fixture.id}
      >
        <BigScoreCard data={el} page={"home"} i={i} />
      </TouchableOpacity>
    );
  });

  useEffect(() => {
    getLiveMatches();
  }, []);

  return (
    <View style={styles.containerStyle}>
      {loading ? (
        // Show a loading spinner or message while waiting for data
        // <Text>Loading...</Text>
        <LoadingScreen />
      ) : liveMatchesData ? (
        // Render the data when it's available
        <>
          <Text style={styles.textHeader}>Meciuri live ⚽</Text>
          <ScrollView horizontal>{matchData}</ScrollView>
        </>
      ) : isError ? (
        // Handle the case when no data is available or an error occurred
        // <LimitAlert />
        <Text></Text>
      ) : (
        // Handle the case when no data is available or an error occurred
        // <Text>Some other error</Text>
        <Text></Text>
      )}
    </View>
  );
};

export default LiveMatches;

const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: "pink",
    paddingTop: 25,
    flexDirection: "column",
  },

  textHeader: {
    marginLeft: 16,
    marginBottom: 16,
    fontSize: 25,
    color: COLORS.mainGreen,
    fontWeight: "600",
  },
});
