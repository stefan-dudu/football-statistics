import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import React, { useEffect, useState } from "react";
import TeamStats from "./subScreens/TeamStats";
import TopPlayerByCategory from "../components/statsComponents/TopPlayerByCategory";
import { ScrollView } from "react-native";
import TopScorerData from "../api/data/TopScorerData";
import TopAssistsData from "../api/data/TopAssistsData";
import TopYellowCards from "../api/data/TopYellowCards";
import TopRedCards from "../api/data/TopRedCards";
import apiSports from "../api/api-sports";
import Superliga23TeamsInformation from "../api/data/Superliga23TeamsInformation";
import { useNavigation } from "@react-navigation/native";
import ScreenHeader from "../components/ScreenHeader";
import { COLORS } from "../utils/colors";

const Statistics = (params) => {
  const navigation = useNavigation();
  const clubID = params?.route?.params?.id;
  // console.log("params", params.route.params.id);
  // console.log("clubID", clubID);

  // console.log("params", params?.route?.params?.params);
  // console.log("club id", params?.route?.params?.params.id);

  // console.log("teams all data", Superliga23TeamsInformation.response);
  // console.log("red", topRedCards.response[0].statistics[0].cards.red > 0);

  const selectedTeamData = Superliga23TeamsInformation.response.filter(
    (el) => el.team.id === clubID
  );

  // console.log("selectedTeamData");

  const [topScorer, setTopScorer] = useState(null);
  const [topAssist, setTopAssist] = useState(null);
  const [topYellowCard, setTopYellowCard] = useState(null);
  const [topRedCard, setTopRedCard] = useState(null);
  const [loading, setLoading] = useState(false);
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

      response1?.data.errors.requests.includes &&
        setIsError("Max limit for today been reached");

      // Set the state variables with the fetched data
      response1?.data.results > 0 && setTopScorer(response1);
      response2?.data.results > 0 && setTopAssist(response2);
      response3?.data.results > 0 && setTopYellowCard(response3);
      response4?.data.results > 0 && setTopRedCard(response4);
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
        <TopPlayerByCategory data={TopScorerData} playerType={"scorer"} />
        <Text style={styles.subTitleStyle}>Top assisturi</Text>
        <TopPlayerByCategory data={TopAssistsData} playerType={"assists"} />
        {TopYellowCards?.response[0].statistics[0].cards.yellow > 0 && (
          <View>
            <Text style={styles.subTitleStyle}>Top cartonase galbene</Text>
            <TopPlayerByCategory data={TopYellowCards} playerType={"cards"} />
          </View>
        )}

        {TopRedCards?.response[0].statistics[0].cards.red > 0 && (
          <View>
            <Text style={styles.subTitleStyle}>Top cartonase rosii</Text>
            <TopPlayerByCategory data={TopRedCards} playerType={"cards"} />
          </View>
        )}
      </View>
    );
  };

  useEffect(() => {
    // fetchAllData();
  }, []);

  return (
    <View style={styles.parentWrapper}>
      <ScrollView>
        <View>
          {loading ? (
            // Show a loading spinner or message while waiting for data
            <Text>Loading...</Text>
          ) : clubID ? (
            // IF CLUB IS SELECTED SHOW TEAM STATITICS
            <TeamStats params={selectedTeamData} />
          ) : TopScorerData ? (
            // IF NO CLUB SELECTED SHOW TOP PLAYERS
            <LeagueTopPlayers />
          ) : isError ? (
            // Handle the case when no data is available or an error occurred
            <Text>{isError}</Text>
          ) : (
            // Handle the case when no data is available or an error occurred
            <Text>Some other error</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  parentWrapper: {},

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
