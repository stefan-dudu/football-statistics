import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState, useEffect } from "react";
import apiSports from "../../api/api-sports";
import { COLORS } from "../../utils/colors";

const StatsLineup = ({ teamID }) => {
  // console.log("teamID", teamID);
  const [loading, setLoading] = useState(true);
  const [coachData, setCoachData] = useState(null);
  const [playersData, setPlayersData] = useState(null);
  const [isError, setIsError] = useState("");

  const fetchCoachPlayersData = async () => {
    try {
      // Use Promise.all to fetch data from multiple APIs concurrently
      const [response1, response2] = await Promise.all([
        apiSports.get(`/coachs/?team=${teamID}`),
        apiSports.get(`/players/squads?team=${teamID}`),
      ]);

      response1?.data?.errors?.requests?.includes &&
        setIsError("Max limit for today been reached");
      // console.log("response1", response1.data.response[0]);
      // console.log("response2?.data.results", response2?.data);

      // console.log("response1", response1.data.response[0]);

      // Set the state variables with the fetched data
      response1?.data.results > 0 && setCoachData(response1.data);
      response2?.data.results > 0 && setPlayersData(response2.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchCoachPlayersData();
  }, [teamID]);

  const coachDataArray = coachData?.response[coachData?.response.length - 1];

  const goalkeepers = playersData?.response[0].players.filter(
    (pos) => pos.position == "Goalkeeper"
  );

  const defenders = playersData?.response[0].players.filter(
    (pos) => pos.position == "Defender"
  );

  const midfielderers = playersData?.response[0].players.filter(
    (pos) => pos.position == "Midfielder"
  );

  const attackers = playersData?.response[0].players.filter(
    (pos) => pos.position == "Attacker"
  );

  const CoachCard = () => {
    // console.log("coach", coachData.response[0].name);
    return (
      <View style={styles.playerCardWrapper}>
        <View style={styles.playerTopPart}>
          {/* top part */}
          <Image
            style={styles.playerPicStyle}
            // source={require("../../../assets/coach.png")}
            source={{ uri: coachDataArray.photo }}
          />
          <View style={styles.playerTopRight}>
            {/* details - right side */}
            <Text style={styles.playerCardGraySubtitle}>Ani</Text>
            <Text style={styles.playerAgeNumber}>{coachDataArray.age}</Text>
          </View>
        </View>

        <View style={styles.playerBottomPart}>
          <Text style={styles.playerName}>{coachDataArray.name}</Text>
          <Text style={styles.playerCardGraySubtitle}>Antrenor</Text>
        </View>
      </View>
    );
  };

  const PlayerCard = ({ position }) => {
    // console.log("position", position);
    return position.map((el) => {
      // console.log("el", el);
      return (
        <View style={styles.playerCardWrapper} key={el.id}>
          <View style={styles.playerTopPart}>
            {/* top part */}
            <Image
              style={styles.playerPicStyle}
              // source={require("../../../assets/gk.png")}
              source={{ uri: el.photo }}
            />
            <View style={styles.playerTopRight}>
              {/* details - right side */}
              <Text style={styles.playerCardGraySubtitle}>Ani</Text>
              <Text style={styles.playerAgeNumber}>{el.age}</Text>
              <Text style={styles.playerCardGraySubtitle}>Nr</Text>
              <Text style={styles.playerAgeNumber}>{el.number}</Text>
            </View>
          </View>

          <View style={styles.playerBottomPart}>
            <Text style={styles.playerName}>{el.name}</Text>
            <Text style={styles.playerCardGraySubtitle}>{el.position}</Text>
          </View>
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
      {loading ? (
        // Show a loading spinner or message while waiting for data
        <Text>Loading...</Text>
      ) : coachData ? (
        // Render the data when it's available
        <View>
          <Text style={styles.positionTitleStyle}>Coach</Text>
          <CoachCard />
          <Text style={styles.positionTitleStyle}>Goalkeepers</Text>
          <View style={styles.categoryWrapper}>
            <PlayerCard position={goalkeepers} />
          </View>
          <Text style={styles.positionTitleStyle}>Defenders</Text>
          <View style={styles.categoryWrapper}>
            <PlayerCard position={defenders} />
          </View>
          <Text style={styles.positionTitleStyle}>Middfileders</Text>
          <View style={styles.categoryWrapper}>
            <PlayerCard position={midfielderers} />
          </View>
          <Text style={styles.positionTitleStyle}>Attcker</Text>
          <View style={styles.categoryWrapper}>
            <PlayerCard position={attackers} />
          </View>
        </View>
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

export default StatsLineup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width * 0.94,
    // height: 500,
    // backgroundColor: "red",
  },

  playerCardWrapper: {
    flexDirection: "column",
    margin: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: COLORS.mediumGray,
    borderRadius: 16,
    width: "43%",
    // height: "auto",
    // paddingBottom: 20,
    // backgroundColor: "red",
  },

  playerTopPart: { flexDirection: "row", justifyContent: "space-around" },
  playerTopRight: {},

  playerBottomPart: {},

  categoryWrapper: {
    // backgroundColor: "lightgreen",
    flexDirection: "row",
    width: Dimensions.get("window").width,
    // backgroundColor: "red",
    flexWrap: "wrap",
  },

  playerPicStyle: {
    width: 90,
    height: 90,
  },

  playerName: {
    fontSize: 22,
    fontWeight: "600",
  },

  playerAgeNumber: {
    fontSize: 22,
    fontWeight: "600",
    color: COLORS.darkGray,
  },

  positionTitleStyle: {
    color: COLORS.darkGreen,
    fontSize: 20,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.mediumGray,
    // width: Dimensions.get("window").width - 40,
    width: Dimensions.get("window").width * 0.94,
  },

  playerCardGraySubtitle: {
    color: COLORS.mediumGray,
  },
});
