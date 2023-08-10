import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import apiSports from "../../api/api-sports";
import { COLORS } from "../../utils/colors";
import fixtureSummaryData from "../../api/DummyData/fixtureSummaryData";

const Summary = ({ fixtureID }) => {
  const homeTeamID = 6886;
  const awayTeamID = 2589;

  // console.log("fixtureID", fixtureID);

  const [loading, setLoading] = useState(true);
  const [fixtureEvents, setFixtureEvents] = useState(null);
  const [isError, setIsError] = useState("");

  const getFixtureEvents = async () => {
    try {
      const response = await apiSports.get("/fixtures/events", {
        params: {
          fixture: fixtureID,
        },
      });
      response?.data?.errors?.requests?.includes &&
        setIsError("Max limit for today been reached");

      response?.data.results > 0 && setFixtureEvents(response?.data);
      setLoading(false);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  useEffect(() => {
    // getFixtureEvents();
  }, []);

  const Timeline = fixtureEvents?.response?.map((el) => {
    // console.log("el", el);
    const TypeOfAction = ({ data }) => {
      switch (data.type) {
        case "Goal":
          return (
            <View style={styles.cardWrapper}>
              <View style={styles.topSideWrapper}>
                <View style={styles.iconActionStyle}>
                  <Image
                    style={styles.actionImgStyle}
                    source={require("../../../assets/goal.png")}
                  />
                  <Text style={styles.actionText}>Gooool !!!</Text>
                </View>
                <Text style={styles.teamName}>Min: {el.time.elapsed}'</Text>
              </View>

              <View style={styles.bottomSideWrapper}>
                <View style={styles.teamLogoName}>
                  <Text style={styles.actionText}>{el.player.name}</Text>
                  <View style={styles.iconActionStyle}>
                    <Image
                      style={styles.teamLogo}
                      // source={require("../../../assets/teamLogo.png")}
                      source={{ uri: el.team.logo }}
                    />
                    <Text style={styles.teamName}>
                      {" "}
                      {el.team.name}
                      {el.assist.name && (
                        <Text>
                          {" - "} Assist: {el.assist.name}
                        </Text>
                      )}{" "}
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.playerPicture}
                  // source={require("../../../assets/topScorer.png")}
                  source={{
                    uri: `https://media.api-sports.io/football/players/${el.player.id}.png`,
                  }}
                />
              </View>
            </View>
          );

        case "subst":
          return (
            <View>
              <View style={styles.cardWrapper}>
                <View style={styles.topSideWrapper}>
                  <View style={styles.iconActionStyle}>
                    <Image
                      style={styles.actionImgStyle}
                      source={require("../../../assets/schimbare.png")}
                    />
                    <Text style={styles.actionText}> Schimbare</Text>
                  </View>
                  <Text style={styles.teamName}>Min: {el.time.elapsed}'</Text>
                </View>

                <View style={styles.bottomSideWrapper}>
                  <View style={styles.teamLogoName}>
                    <Text style={styles.actionText}>
                      {el.assist.name} |
                      <Text style={{ color: "#01B55C" }}> INTRA</Text>
                    </Text>
                    <View style={styles.iconActionStyle}>
                      <Image
                        style={styles.teamLogo}
                        // source={require("../../../assets/teamLogo.png")}
                        source={{ uri: el.team.logo }}
                      />
                      <Text style={styles.teamName}> {el.team.name}</Text>
                    </View>
                  </View>
                  <Image
                    style={styles.playerPicture}
                    // source={require("../../../assets/topScorer.png")}
                    source={{
                      uri: `https://media.api-sports.io/football/players/${el.assist.id}.png`,
                    }}
                  />
                </View>

                <View style={styles.bottomSideWrapper}>
                  <View style={styles.teamLogoName}>
                    <Text style={styles.actionText}>
                      {el.player.name} |
                      <Text style={{ color: "#F41917" }}> IESE</Text>
                    </Text>
                    <View style={styles.iconActionStyle}>
                      <Image
                        style={styles.teamLogo}
                        // source={require("../../../assets/teamLogo.png")}
                        source={{ uri: el.team.logo }}
                      />
                      <Text style={styles.teamName}> {el.team.name} </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.playerPicture}
                    // source={require("../../../assets/gk.png")}
                    source={{
                      uri: `https://media.api-sports.io/football/players/${el.player.id}.png`,
                    }}
                  />
                </View>
              </View>
            </View>
          );
        case "Card":
          return (
            <View>
              <View style={styles.imageActionWrapper}></View>

              <View style={styles.cardWrapper}>
                <View style={styles.topSideWrapper}>
                  <View style={styles.iconActionStyle}>
                    {data.detail == "Yellow Card" && (
                      <Image
                        style={styles.actionImgStyle}
                        source={require("../../../assets/yellowCard.png")}
                      />
                    )}
                    {data.detail == "Red Card" && (
                      <Image
                        style={styles.actionImgStyle}
                        source={require("../../../assets/redCard.png")}
                      />
                    )}
                    {data.detail == "Yellow Card" && (
                      <Text style={styles.actionText}>Cartonas galben</Text>
                    )}
                    {data.detail == "Red Card" && (
                      <Text style={styles.actionText}>Cartonas rosu</Text>
                    )}
                  </View>
                  <Text style={styles.teamName}>Min: {el.time.elapsed}'</Text>
                </View>

                <View style={styles.bottomSideWrapper}>
                  <View style={styles.teamLogoName}>
                    <Text style={styles.actionText}>{el.player.name}</Text>
                    <View style={styles.iconActionStyle}>
                      <Image
                        style={styles.teamLogo}
                        // source={require("../../../assets/teamLogo.png")}
                        source={{ uri: el.team.logo }}
                      />
                      <Text style={styles.teamName}>
                        {" "}
                        {el.team.name}
                        {el.comments && (
                          <Text>
                            {" - "} {el.comments}
                          </Text>
                        )}
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.playerPicture}
                    // source={require("../../../assets/topScorer.png")}
                    source={{
                      uri: `https://media.api-sports.io/football/players/${el.player.id}.png`,
                    }}
                  />
                </View>
              </View>
            </View>
          );
        case "Var":
          return (
            <View>
              <View style={styles.cardWrapper}>
                <View style={styles.topSideWrapper}>
                  <View style={styles.iconActionStyle}>
                    <Image
                      style={styles.actionImgStyle}
                      source={require("../../../assets/var.png")}
                    />
                    <Text style={styles.actionText}>Decizie VAR</Text>
                  </View>
                  <Text style={styles.teamName}>Min: {el.time.elapsed}'</Text>
                </View>

                <View style={styles.bottomSideWrapper}>
                  <View style={styles.teamLogoName}>
                    <Text style={styles.actionText}>{el.player.name}</Text>
                    <View style={styles.iconActionStyle}>
                      <Image
                        style={styles.teamLogo}
                        // source={require("../../../assets/teamLogo.png")}
                        source={{ uri: el.team.logo }}
                      />
                      <Text style={styles.teamName}> {el.team.name} </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.playerPicture}
                    // source={require("../../../assets/coach.png")}
                    source={{
                      uri: `https://media.api-sports.io/football/players/${el.player.id}.png`,
                    }}
                  />
                </View>
              </View>
            </View>
          );
      }
    };

    return (
      <View
        key={el.time.elapsed + el.player.id}
        style={styles.timelineContainer}
      >
        <View style={styles.eventWrapper}>
          <TypeOfAction data={el} />
        </View>
      </View>
    );
  });

  return (
    <View style={styles.parentContainer}>
      {/* <ScrollView>{Timeline}</ScrollView> */}

      {loading ? (
        // Show a loading spinner or message while waiting for data
        <Text>Loading...</Text>
      ) : fixtureEvents ? (
        // Render the data when it's available
        <ScrollView>{Timeline}</ScrollView>
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

export default Summary;

const styles = StyleSheet.create({
  parentContainer: {
    display: "flex",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.94,
  },

  timelineContainer: {
    display: "flex",
    alignItems: "center",
  },

  timeStyling: {
    marginTop: 40,
    marginBottom: -60,
  },

  playerPicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "contain",
  },

  teamLogo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  eventWrapperHome: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 17,
    width: Dimensions.get("window").width - 50,
    backgroundColor: "green",
    marginVertical: 10,
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
  eventWrapperAway: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 17,
    width: Dimensions.get("window").width - 50,
    backgroundColor: "blue",
    marginVertical: 10,
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

  eventWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 17,
    // width: Dimensions.get("window").width * 0.94,
    width: Dimensions.get("window").width * 0.89,
    backgroundColor: "white",
    marginVertical: 10,
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

  leftSideWrapper: { backgroundColor: "white" },
  actionImgStyle: {
    width: 30,
    height: 30,
    backgroundColor: "white",
  },
  imageActionWrapper: { flexDirection: "row", alignItems: "center" },
  actionText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
    color: COLORS.darkGray,
  },

  teamLogoName: {
    marginTop: 3,
    flexDirection: "column",
    // alignItems: "center",
  },

  teamName: {
    fontSize: 16,
    color: COLORS.mediumGray,
    fontWeight: "500",
  },

  rightSideWrapper: {},
  // backgroundColor: 'pink'
  topSideWrapper: {
    // backgroundColor: "pink",
    width: Dimensions.get("window").width - 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardWrapper: {
    // backgroundColor: "gray",
  },

  bottomSideWrapper: {
    // backgroundColor: "lightgreen",
    width: Dimensions.get("window").width - 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topBottomWrapper: {
    width: Dimensions.get("window").width - 70,
  },

  iconActionStyle: {
    flexDirection: "row",
    alignItems: "center",
  },

  teamLogoTeamName: {},
});
