import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";

const LineUp = () => {
  const data = {
    get: "fixtures/lineups",
    parameters: {
      fixture: "1049765",
    },
    errors: [],
    results: 2,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        team: {
          id: 6886,
          name: "Oţelul",
          logo: "https://media-3.api-sports.io/football/teams/6886.png",
          colors: {
            player: {
              primary: "f5f4f4",
              number: "00499c",
              border: "f5f4f4",
            },
            goalkeeper: {
              primary: "ffff00",
              number: "ffffff",
              border: "222226",
            },
          },
        },
        coach: {
          id: 2987,
          name: "D. Munteanu",
          photo: "https://media-2.api-sports.io/football/coachs/2987.png",
        },
        formation: "4-3-3",
        startXI: [
          {
            player: {
              id: 43125,
              name: "R. Stoian",
              number: 12,
              pos: "G",
              grid: "1:1",
            },
          },
          {
            player: {
              id: 324276,
              name: "A. Rus",
              number: 14,
              pos: "D",
              grid: "2:4",
            },
          },
          {
            player: {
              id: 42747,
              name: "F. Yabré",
              number: 15,
              pos: "D",
              grid: "2:3",
            },
          },
          {
            player: {
              id: 122954,
              name: "A. López",
              number: 5,
              pos: "D",
              grid: "2:2",
            },
          },
          {
            player: {
              id: 11063,
              name: "M. Zhelev",
              number: 2,
              pos: "D",
              grid: "2:1",
            },
          },
          {
            player: {
              id: 142018,
              name: "Samuel Teles",
              number: 21,
              pos: "M",
              grid: "3:3",
            },
          },
          {
            player: {
              id: 42683,
              name: "I. Neagu",
              number: 8,
              pos: "M",
              grid: "3:2",
            },
          },
          {
            player: {
              id: 91389,
              name: "J. Cisotti",
              number: 30,
              pos: "M",
              grid: "3:1",
            },
          },
          {
            player: {
              id: 108553,
              name: "A. Pop",
              number: 11,
              pos: "F",
              grid: "4:3",
            },
          },
          {
            player: {
              id: 7928,
              name: "K. Fatai",
              number: 90,
              pos: "F",
              grid: "4:2",
            },
          },
          {
            player: {
              id: 42731,
              name: "O. Ursu",
              number: 77,
              pos: "F",
              grid: "4:1",
            },
          },
        ],
        substitutes: [
          {
            player: {
              id: 161723,
              name: "Ș. Bodișteanu",
              number: 20,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 148823,
              name: "G. Cîrjan",
              number: 7,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 106009,
              name: "V. Jardan",
              number: 23,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 15446,
              name: "D. Živulić",
              number: 31,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 70699,
              name: "P. Gaitán",
              number: 27,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 148818,
              name: "Ș. Farcaș",
              number: 18,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 130133,
              name: "A. Păun",
              number: 55,
              pos: "G",
              grid: null,
            },
          },
          {
            player: {
              id: 97079,
              name: "C. Ghiocel",
              number: 16,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 125364,
              name: "G. Nedelea",
              number: 3,
              pos: "D",
              grid: null,
            },
          },
        ],
      },
      {
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-3.api-sports.io/football/teams/2589.png",
          colors: {
            player: {
              primary: "ff0000",
              number: "ffffff",
              border: "ff0000",
            },
            goalkeeper: {
              primary: "ffff00",
              number: "dd0000",
              border: "ffff00",
            },
          },
        },
        coach: {
          id: 2985,
          name: "M. Rednic",
          photo: "https://media-2.api-sports.io/football/coachs/2985.png",
        },
        formation: "4-2-3-1",
        startXI: [
          {
            player: {
              id: 42691,
              name: "F. Iacob",
              number: 93,
              pos: "G",
              grid: "1:1",
            },
          },
          {
            player: {
              id: 66830,
              name: "M. Roganović",
              number: 44,
              pos: "D",
              grid: "2:4",
            },
          },
          {
            player: {
              id: 11295,
              name: "A. Benga",
              number: 4,
              pos: "D",
              grid: "2:3",
            },
          },
          {
            player: {
              id: 10585,
              name: "I. Markov",
              number: 5,
              pos: "D",
              grid: "2:2",
            },
          },
          {
            player: {
              id: 46937,
              name: "A. Abeid",
              number: 18,
              pos: "D",
              grid: "2:1",
            },
          },
          {
            player: {
              id: 337776,
              name: "C. Mihai",
              number: 21,
              pos: "M",
              grid: "3:2",
            },
          },
          {
            player: {
              id: 53712,
              name: "C. Carp",
              number: 8,
              pos: "M",
              grid: "3:1",
            },
          },
          {
            player: {
              id: 366080,
              name: "R. Pop",
              number: 55,
              pos: "M",
              grid: "4:3",
            },
          },
          {
            player: {
              id: 2262,
              name: "A. Fábry",
              number: 10,
              pos: "M",
              grid: "4:2",
            },
          },
          {
            player: {
              id: 42510,
              name: "D. Dumitrașcu",
              number: 80,
              pos: "M",
              grid: "4:1",
            },
          },
          {
            player: {
              id: 125709,
              name: "G. Cooper",
              number: 9,
              pos: "F",
              grid: "5:1",
            },
          },
        ],
        substitutes: [
          {
            player: {
              id: 93291,
              name: "K. Leidsman",
              number: 39,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 42685,
              name: "A. Stahl",
              number: 7,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 42680,
              name: "D. Isac",
              number: 31,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 161730,
              name: "R. Mustacă",
              number: 11,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 119690,
              name: "V. Postolachi",
              number: 17,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 367531,
              name: "D. Iurasciuc",
              number: 26,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 426496,
              name: "B. Nortey",
              number: 15,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 426497,
              name: "A. Ekmekci",
              number: 99,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 72475,
              name: "D. Kucher",
              number: 13,
              pos: "G",
              grid: null,
            },
          },
        ],
      },
    ],
  };

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

  const TeamLogoNameFormation = data.response.map((el, i) => {
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
                  source={require("../../../assets/teamLogo.png")}
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
                  source={require("../../../assets/teamLogo2.png")}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  });

  const Manager = data.response.map((el) => {
    return (
      <Text style={styles.playerManagerStylingWrapper} key={el.coach.id}>
        {el.coach.name}
      </Text>
    );
  });

  const Starting11Home = data.response[0].startXI.map((el) => {
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

  const Starting11Away = data.response[1].startXI.map((el) => {
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

  const SubsHome = data.response[0].substitutes.map((el) => {
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

  const SubsAway = data.response[1].substitutes.map((el) => {
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
      <View style={styles.rowStyle}>{TeamLogoNameFormation}</View>
      <Text style={styles.middleTitles}>Manager</Text>
      <View style={styles.rowStyle}>{Manager}</View>
      <Text style={styles.middleTitles}>Starting XI</Text>
      <View style={styles.rowStyle}>
        <View>{Starting11Home}</View>
        <View>{Starting11Away}</View>
      </View>
      <Text style={styles.middleTitles}>Subs</Text>
      <View style={styles.rowStyle}>
        <View>{SubsHome}</View>
        <View>{SubsAway}</View>
      </View>
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
    paddingHorizontal: 20,
    width: Dimensions.get("window").width - 40,
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
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
  middleTitles: {
    color: "red",
    fontSize: 20,
    marginLeft: 120,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  nameFormationStyle: {
    backgroundColor: "white",
    alignItems: "center",
    alignContent: "center",
  },

  teamName: {
    fontWeight: "500",
  },

  teamFormation: {
    color: COLORS.gray,
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
    // backgroundColor: "red",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  playerManagerStylingWrapper: {
    // backgroundColor: "pink",
    borderBottomWidth: 1,
    borderColor: "lightgray",
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
