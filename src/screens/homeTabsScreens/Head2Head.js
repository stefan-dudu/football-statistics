import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import apiSports from "../../api/api-sports";
import { COLORS } from "../../utils/colors";

const Head2Head = ({ homeTeamId, awayTeamId }) => {
  const [loading, setLoading] = useState(true);
  const [h2hData, seth2hData] = useState(null);
  const [isError, setIsError] = useState("");

  const getFixturesH2H = async () => {
    try {
      const response = await apiSports.get("/fixtures/headtohead", {
        params: {
          h2h: `${homeTeamId}-${awayTeamId}`,
          last: "10",
        },
      });
      response?.data?.errors?.requests?.includes &&
        setIsError("Max limit for today been reached");

      response?.data.results > 0 && seth2hData(response?.data);
      setLoading(false);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  useEffect(() => {
    // getFixturesH2H();
  }, []);

  const h2h = h2hData?.response?.map((el) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const dayOfEvent = new Date(el.fixture.date).toLocaleDateString(
      "ro-RO",
      options
    );
    return (
      <View style={styles.h2hContainer} key={el.fixture.id}>
        <View style={styles.dayStyle}>
          {/* date */}
          <Text style={styles.date}>{dayOfEvent}</Text>
        </View>
        <View style={styles.secondRowStyle}>
          {/* 2nd row */}
          <View style={styles.leftSide}>
            {/* left side */}
            <Image
              style={styles.teamLogoStyle}
              // source={require("../../../assets/teamLogo.png")}
              source={{ uri: el.teams.home.logo }}
            />
            <Text style={styles.teamsName}>{el.teams.home.name}</Text>
          </View>
          <View style={styles.middle}>
            <Text style={styles.score}>{el.goals.home}</Text>
            {/* middle ( score + league logo) */}
            <Image
              style={styles.leagueLogoStyle}
              // source={require("../../../assets/premierLeague.png")}
              source={{ uri: el.league.logo }}
            />
            <Text style={styles.score}>{el.goals.home}</Text>
          </View>
          <View style={styles.rightSide}>
            {/* right side */}
            <Image
              style={styles.teamLogoStyle}
              // source={require("../../../assets/teamLogo2.png")}
              source={{ uri: el.teams.away.logo }}
            />
            <Text style={styles.teamsName}>{el.teams.away.name}</Text>
          </View>
        </View>
        <View style={styles.locationStyle}>
          {/* 3rd row, location */}
          <Text>
            {el.fixture.venue.name}, {el.fixture.venue.city}
          </Text>
        </View>
      </View>
    );
  });

  return (
    <View style={styles.parentWrapper}>
      {loading ? (
        // Show a loading spinner or message while waiting for data
        <Text>Loading...</Text>
      ) : h2hData ? (
        // Render the data when it's available
        <View>
          <Text style={styles.titleStyling}>
            Rezultatatele in ultimele {h2hData.results} infruntari
          </Text>
          {h2h}
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

export default Head2Head;

const styles = StyleSheet.create({
  parentWrapper: {
    // backgroundColor: "pink",
    paddingHorizontal: 5,
    width: Dimensions.get("window").width * 0.94,
  },

  h2hContainer: {
    flexDirection: "column",
    // borderWidth: 3,
    // borderColor: "lightblue",
    backgroundColor: "white",
    // backgroundColor: "lightblue",
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 17,
    // padding: 10,
    // shadow
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  leagueLogoStyle: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },

  teamLogoStyle: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  dayStyle: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },

  secondRowStyle: {
    flexDirection: "row",
    justifyContent: "center",
    height: 80,
    // backgroundColor: "lightgray",
    // width: Dimensions.get("screen").width,
  },

  date: {
    color: COLORS.textGrayButtons,
  },

  score: {
    fontSize: 40,
    color: COLORS.mainGreen,
    fontWeight: "600",
  },

  teamsName: {
    fontSize: 18,
    fontWeight: "500",
  },

  leftSide: {
    // backgroundColor: "lightgreen",
    flex: 2,
    // flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  middle: {
    // backgroundColor: "lightyellow",
    flex: 2,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightSide: {
    // backgroundColor: "lightblue",
    flex: 2,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  locationStyle: {
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 15,
  },

  titleStyling: {
    color: COLORS.titleDarkGray,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500",
  },
});
