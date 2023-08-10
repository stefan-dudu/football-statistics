import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { COLORS } from "../../utils/colors";
import React, { useEffect, useState } from "react";
import apiSports from "../../api/api-sports";

const LineUp = ({ fixtureID }) => {
  const [loading, setLoading] = useState(true);
  const [fixtureLineup, setFixtureLineup] = useState(null);
  const [isError, setIsError] = useState("");

  const getFixtureLineup = async () => {
    try {
      const response = await apiSports.get("/fixtures/lineups", {
        params: {
          fixture: fixtureID,
        },
      });
      response?.data?.errors?.requests?.includes &&
        setIsError("Max limit for today been reached");

      response?.data.results > 0 && setFixtureLineup(response?.data);
      setLoading(false);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  useEffect(() => {
    // getFixtureLineup();
  }, []);

  const FieldPosition = ({ position }) => {
    // console.log("position", position);

    switch (position) {
      case "G":
        return <Text style={styles.playerPositonStyle}>Portar</Text>;
      case "D":
        return <Text style={styles.playerPositonStyle}>Fundas</Text>;
      case "M":
        return <Text style={styles.playerPositonStyle}>Mijlocas</Text>;
      case "F":
        return <Text style={styles.playerPositonStyle}>Atacant</Text>;
    }
  };

  const TeamLogoNameFormation = fixtureLineup?.response?.map((el, i) => {
    // console.log("i : el", i, el);
    // console.log("i", i);
    return (
      <View key={el.team.id} style={styles.nameFormationLogoStyle}>
        <View style={styles.teamFormationLogoWrapper}>
          {i == 0 ? (
            <View style={styles.teamFormationLogoWrapper}>
              <View style={styles.logoWrapperHomeStyle}>
                <Image
                  style={styles.teamLogoStyle}
                  // source={require("../../../assets/teamLogo.png")}
                  source={{ uri: el.team.logo }}
                />
              </View>
              <View style={styles.nameFormationStyle}>
                <Text style={styles.teamName}>{el.team.name}</Text>
                <Text style={styles.teamFormation}>{el.formation}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.teamFormationLogoWrapper}>
              <View style={styles.nameFormationStyle}>
                <Text style={styles.teamName}>{el.team.name}</Text>
                <Text style={styles.teamFormation}>{el.formation}</Text>
              </View>
              <View style={styles.logoWrapperAwayStyle}>
                <Image
                  style={styles.teamLogoStyle}
                  // source={require("../../../assets/teamLogo2.png")}
                  source={{ uri: el.team.logo }}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  });

  const Manager = fixtureLineup?.response?.map((el) => {
    return (
      <Text style={styles.playerManagerStylingWrapper} key={el.coach.id}>
        {el.coach.name}
      </Text>
    );
  });

  const Starting11Home = fixtureLineup?.response[0]?.startXI.map((el) => {
    return (
      <View style={styles.playerManagerStylingWrapper} key={el.player.id}>
        <View style={styles.playerNumberNameStyle}>
          {/* <Text>{el.player.number}</Text> */}
          <Text>{el.player.name}</Text>
        </View>
        {/* <FieldPosition position={el.player.pos} /> */}
      </View>
    );
  });

  const Starting11Away = fixtureLineup?.response[1]?.startXI.map((el) => {
    return (
      <View style={styles.playerManagerStylingWrapper} key={el.player.id}>
        <View style={styles.playerNumberNameStyle}>
          {/* <Text>{el.player.number}</Text> */}
          <Text>{el.player.name}</Text>
        </View>
        {/* <FieldPosition position={el.player.pos} /> */}
      </View>
    );
  });

  const SubsHome = fixtureLineup?.response[0]?.substitutes.map((el) => {
    return (
      <View style={styles.playerManagerStylingWrapper} key={el.player.id}>
        <View style={styles.playerNumberNameStyle}>
          {/* <Text>{el.player.number}</Text> */}
          <Text>{el.player.name}</Text>
        </View>
        {/* <FieldPosition position={el.player.pos} /> */}
      </View>
    );
  });

  const SubsAway = fixtureLineup?.response[1]?.substitutes.map((el) => {
    return (
      <View style={styles.playerManagerStylingWrapper} key={el.player.id}>
        <View style={styles.playerNumberNameStyle}>
          {/* <Text>{el.player.number}</Text> */}
          <Text>{el.player.name}</Text>
        </View>
        {/* <FieldPosition position={el.player.pos} /> */}
      </View>
    );
  });

  return (
    <View style={styles.parentWrapperStyle}>
      {/* <View style={styles.rowStyle}>{TeamLogoNameFormation}</View>
      <Text style={styles.middleTitles}>Antrenor</Text>
      <View style={styles.rowStyle}>{Manager}</View>
      <Text style={styles.middleTitles}>Primul 11</Text>
      <View style={styles.rowStyle}>
        <View>{Starting11Home}</View>
        <View>{Starting11Away}</View>
      </View>
      <Text style={styles.middleTitles}>Rezerve</Text>
      <View style={styles.rowStyle}>
        <View>{SubsHome}</View>
        <View>{SubsAway}</View>
      </View> */}

      {loading ? (
        // Show a loading spinner or message while waiting for data
        <Text>Loading...</Text>
      ) : fixtureLineup ? (
        // Render the data when it's available
        <View>
          <View style={styles.rowStyle}>{TeamLogoNameFormation}</View>
          <Text style={styles.middleTitles}>Antrenor</Text>
          <View style={styles.rowStyle}>{Manager}</View>
          <Text style={styles.middleTitles}>Primul 11</Text>
          <View style={styles.rowStyle}>
            <View>{Starting11Home}</View>
            <View>{Starting11Away}</View>
          </View>
          <Text style={styles.middleTitles}>Rezerve</Text>
          <View style={styles.rowStyle}>
            <View>{SubsHome}</View>
            <View>{SubsAway}</View>
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

export default LineUp;

const styles = StyleSheet.create({
  parentWrapperStyle: {
    // backgroundColor: "lightyellow",
    flexDirection: "column",
    // justifyContent: "space-between",
    // width: "100%",
    // marginHorizontal: 120,
    paddingHorizontal: 15,
    // height: "auto",
    paddingTop: 20,
    width: Dimensions.get("window").width * 0.94,
  },

  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "pink",
  },

  teamWrapperStyle: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "pink",
    backgroundColor: "lightblue",
  },

  teamLogoStyle: {
    width: 60,
    height: 60,
    // resizeMode: "stretch",
  },
  middleTitles: {
    color: COLORS.mainGreen,
    fontSize: 20,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  nameFormationStyle: {
    backgroundColor: "white",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: -10,
  },

  teamName: {
    fontWeight: "500",
    fontSize: 17,
    color: COLORS.darkGray,
  },

  teamFormation: {
    color: COLORS.mediumGray,
    fontSize: 16,
  },

  logoWrapperHomeStyle: {
    // backgroundColor: "blue",
    // marginHorizontal: 10,
    marginRight: 10,
  },
  logoWrapperAwayStyle: {
    // backgroundColor: "red",
    // marginHorizontal: 10,
    marginLeft: 10,
  },

  teamFormationLogoWrapper: {
    // backgroundColor: "gray",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  nameFormationLogoStyle: {
    // backgroundColor: "green",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 10,
  },

  playerManagerStylingWrapper: {
    // backgroundColor: "pink",
    borderBottomWidth: 1,
    borderColor: COLORS.lightGreen,
    paddingBottom: 5,
    marginBottom: 15,
  },

  playerNumberNameStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  playerPositonStyle: {
    alignSelf: "center",
  },
});
