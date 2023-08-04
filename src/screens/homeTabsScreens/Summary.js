import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";

const Summary = () => {
  const homeTeamID = 6886;
  const awayTeamID = 2589;

  const data = {
    get: "fixtures/events",
    parameters: {
      fixture: "1049765",
    },
    errors: [],
    results: 16,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        time: {
          elapsed: 45,
          extra: 5,
        },
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-1.api-sports.io/football/teams/2589.png",
        },
        player: {
          id: 366080,
          name: "R. Pop",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 6886,
          name: "Oţelul",
          logo: "https://media-1.api-sports.io/football/teams/6886.png",
        },
        player: {
          id: 42731,
          name: "O. Ursu",
        },
        assist: {
          id: 161723,
          name: "Ș. Bodișteanu",
        },
        type: "subst",
        detail: "Substitution 1",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 6886,
          name: "Oţelul",
          logo: "https://media-1.api-sports.io/football/teams/6886.png",
        },
        player: {
          id: 7928,
          name: "K. Fatai",
        },
        assist: {
          id: 148823,
          name: "G. Cîrjan",
        },
        type: "subst",
        detail: "Substitution 2",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-1.api-sports.io/football/teams/2589.png",
        },
        player: {
          id: 125709,
          name: "G. Cooper",
        },
        assist: {
          id: 93291,
          name: "K. Leidsman",
        },
        type: "subst",
        detail: "Substitution 1",
        comments: null,
      },
      {
        time: {
          elapsed: 56,
          extra: null,
        },
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-1.api-sports.io/football/teams/2589.png",
        },
        player: {
          id: 53712,
          name: "C. Carp",
        },
        assist: {
          id: 42685,
          name: "A. Stahl",
        },
        type: "subst",
        detail: "Substitution 2",
        comments: null,
      },
      {
        time: {
          elapsed: 57,
          extra: null,
        },
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-3.api-sports.io/football/teams/2589.png",
        },
        player: {
          id: 337776,
          name: "Cristian Mihai",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Var",
        detail: "Goal cancelled",
        comments: "Foul",
      },
      {
        time: {
          elapsed: 60,
          extra: null,
        },
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-3.api-sports.io/football/teams/2589.png",
        },
        player: {
          id: 337776,
          name: "C. Mihai",
        },
        assist: {
          id: 42680,
          name: "D. Isac",
        },
        type: "subst",
        detail: "Substitution 3",
        comments: null,
      },
      {
        time: {
          elapsed: 62,
          extra: null,
        },
        team: {
          id: 6886,
          name: "Oţelul",
          logo: "https://media-2.api-sports.io/football/teams/6886.png",
        },
        player: {
          id: 108553,
          name: "A. Pop",
        },
        assist: {
          id: 142018,
          name: "Samuel Teles",
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
      {
        time: {
          elapsed: 69,
          extra: null,
        },
        team: {
          id: 6886,
          name: "Oţelul",
          logo: "https://media-3.api-sports.io/football/teams/6886.png",
        },
        player: {
          id: 11063,
          name: "Milen Zhelev",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Foul",
      },
      {
        time: {
          elapsed: 72,
          extra: null,
        },
        team: {
          id: 6886,
          name: "Oţelul",
          logo: "https://media-2.api-sports.io/football/teams/6886.png",
        },
        player: {
          id: 108553,
          name: "A. Pop",
        },
        assist: {
          id: 106009,
          name: "V. Jardan",
        },
        type: "subst",
        detail: "Substitution 3",
        comments: null,
      },
      {
        time: {
          elapsed: 75,
          extra: null,
        },
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-2.api-sports.io/football/teams/2589.png",
        },
        player: {
          id: 42680,
          name: "Damian Isac",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Red Card",
        comments: "Handball",
      },
      {
        time: {
          elapsed: 77,
          extra: null,
        },
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-3.api-sports.io/football/teams/2589.png",
        },
        player: {
          id: 366080,
          name: "R. Pop",
        },
        assist: {
          id: 161730,
          name: "R. Mustacă",
        },
        type: "subst",
        detail: "Substitution 4",
        comments: null,
      },
      {
        time: {
          elapsed: 77,
          extra: null,
        },
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-1.api-sports.io/football/teams/2589.png",
        },
        player: {
          id: 2262,
          name: "A. Fábry",
        },
        assist: {
          id: 119690,
          name: "V. Postolachi",
        },
        type: "subst",
        detail: "Substitution 5",
        comments: null,
      },
      {
        time: {
          elapsed: 80,
          extra: null,
        },
        team: {
          id: 6886,
          name: "Oţelul",
          logo: "https://media-1.api-sports.io/football/teams/6886.png",
        },
        player: {
          id: 42683,
          name: "I. Neagu",
        },
        assist: {
          id: 15446,
          name: "D. Živulić",
        },
        type: "subst",
        detail: "Substitution 4",
        comments: null,
      },
      {
        time: {
          elapsed: 84,
          extra: null,
        },
        team: {
          id: 6886,
          name: "Oţelul",
          logo: "https://media-3.api-sports.io/football/teams/6886.png",
        },
        player: {
          id: 324276,
          name: "Andrei Rus",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Time wasting",
      },
      {
        time: {
          elapsed: 90,
          extra: 3,
        },
        team: {
          id: 6886,
          name: "Oţelul",
          logo: "https://media-1.api-sports.io/football/teams/6886.png",
        },
        player: {
          id: 142018,
          name: "Samuel Teles",
        },
        assist: {
          id: 70699,
          name: "P. Gaitán",
        },
        type: "subst",
        detail: "Substitution 5",
        comments: null,
      },
    ],
  };

  const Timeline = data.response.map((el) => {
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
                      source={require("../../../assets/teamLogo.png")}
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
                  source={require("../../../assets/topScorer.png")}
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
                      {el.player.name} |
                      <Text style={{ color: "#01B55C" }}> INTRA</Text>
                    </Text>
                    <View style={styles.iconActionStyle}>
                      <Image
                        style={styles.teamLogo}
                        source={require("../../../assets/teamLogo.png")}
                      />
                      <Text style={styles.teamName}> {el.team.name}</Text>
                    </View>
                  </View>
                  <Image
                    style={styles.playerPicture}
                    source={require("../../../assets/topScorer.png")}
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
                        source={require("../../../assets/teamLogo.png")}
                      />
                      <Text style={styles.teamName}> {el.team.name} </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.playerPicture}
                    source={require("../../../assets/gk.png")}
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
                        source={require("../../../assets/teamLogo.png")}
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
                    source={require("../../../assets/topScorer.png")}
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
                        source={require("../../../assets/teamLogo.png")}
                      />
                      <Text style={styles.teamName}> {el.team.name} </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.playerPicture}
                    source={require("../../../assets/coach.png")}
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
      <ScrollView>{Timeline}</ScrollView>
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
