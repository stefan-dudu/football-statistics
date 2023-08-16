import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import React, { useEffect, useState } from "react";
import TeamStats from "./subScreens/TeamStats";
import TopPlayerByCategory from "../components/statsComponents/TopPlayerByCategory";
import { ScrollView } from "react-native";
import apiSports from "../api/api-sports";
import Superliga23TeamsInformation from "../api/data/Superliga23TeamsInformation";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../utils/colors";
import LimitAlert from "./settingsScreens/LimitAlert";
import LoadingScreen from "./settingsScreens/LoadingScreen";

const Statistics = (params) => {
  const navigation = useNavigation();
  const clubID = params?.route?.params?.id;
  // console.log("clubID", clubID);

  const selectedTeamData = Superliga23TeamsInformation?.response.filter(
    (el) => el.team.id === clubID
  );

  // console.log("selectedTeamData");

  const [topScorer, setTopScorer] = useState(null);
  const [topAssist, setTopAssist] = useState(null);
  const [topYellowCard, setTopYellowCard] = useState(null);
  const [topRedCard, setTopRedCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const fetchAllData = async () => {
    try {
      // Use Promise.all to fetch data from multiple APIs concurrently
      const [response1, response2, response3, response4] = await Promise.all([
        apiSports.get("/players/topscorers?league=283&season=2023"),
        apiSports.get("/players/topassists?league=283&season=2023"),
        apiSports.get("/players/topyellowcards?league=283&season=2023"),
        apiSports.get("/players/topredcards?league=283&season=2023"),
      ]);

      response1?.data?.errors?.requests?.includes &&
        setIsError("Max limit for today been reached");

      // Set the state variables with the fetched data
      response1?.data.results > 0 && setTopScorer(response1.data);
      response2?.data.results > 0 && setTopAssist(response2.data);
      response3?.data.results > 0 && setTopYellowCard(response3.data);
      response4?.data.results > 0 && setTopRedCard(response4.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const LeagueTopPlayers = () => {
    return (
      <View style={styles.leagueParentWrapper}>
        <Text style={styles.subTitleStyle}>Top marcatori</Text>
        <TopPlayerByCategory data={topScorer} playerType={"scorer"} />
        <Text style={styles.subTitleStyle}>Top assisturi</Text>
        <TopPlayerByCategory data={topAssist} playerType={"assists"} />
        {topYellowCard?.response[0].statistics[0].cards.yellow > 0 && (
          <View>
            <Text style={styles.subTitleStyle}>Top cartonase galbene</Text>
            <TopPlayerByCategory data={topYellowCard} playerType={"cards"} />
          </View>
        )}

        {topRedCard?.response[0].statistics[0].cards.red > 0 && (
          <View>
            <Text style={styles.subTitleStyle}>Top cartonase rosii</Text>
            <TopPlayerByCategory data={topRedCard} playerType={"cards"} />
          </View>
        )}
      </View>
    );
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <View style={styles.parentWrapper}>
      <ScrollView>
        <View>
          {loading ? (
            // Show a loading spinner or message while waiting for data
            // <Text>Loading...</Text>
            <LoadingScreen />
          ) : clubID ? (
            // IF CLUB IS SELECTED SHOW TEAM STATITICS
            <TeamStats params={selectedTeamData} />
          ) : topRedCard ? (
            // IF NO CLUB SELECTED SHOW TOP PLAYERS
            <LeagueTopPlayers />
          ) : isError ? (
            // Handle the case when no data is available or an error occurred
            <LimitAlert />
          ) : (
            // Handle the case when no data is available or an error occurred
            <LoadingScreen />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  parentWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },

  leagueParentWrapper: {
    height: "100%",
    // backgroundColor: "pink",
    marginTop: 50,
  },

  subTitleStyle: {
    marginLeft: 10,
    color: COLORS.darkGray,
    fontSize: 24,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    width: Dimensions.get("window").width,
  },
});
