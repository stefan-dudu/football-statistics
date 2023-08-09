import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import apiSports from "../api/api-sports";
import Table from "./testScreens/Table";
import standingsDummy from "../api/DummyData/standingsDummy";

const Standings = () => {
  const [loading, setLoading] = useState(false);
  const [standingsData, setStandingsData] = useState(null);
  const [isError, setIsError] = useState("");

  const getStandings = async () => {
    try {
      const response = await apiSports.get("/standings", {
        params: {
          league: 283,
          season: 2023,
        },
      });

      response?.data.errors.requests.includes &&
        setIsError("Max limit for today been reached");

      response?.data.results > 0 && setStandingsData(response?.data);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  // champiosnhip [0]
  // relegation [1]
  // last year regular season was [2]
  // regular season as of july 2023

  useEffect(() => {
    // getStandings();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        // Show a loading spinner or message while waiting for data
        <Text>Loading...</Text>
      ) : standingsDummy ? (
        // Render the data when it's available
        <Table data={standingsDummy} />
      ) : // <Text> If all works fine</Text>
      isError ? (
        // Handle the case when no data is available or an error occurred
        <Text>{isError}</Text>
      ) : (
        // Handle the case when no data is available or an error occurred
        <Text>Some other error</Text>
      )}
    </View>
  );
};

export default Standings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#37C2D0",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width: "20%",
    textAlign: "center",
  },
});
