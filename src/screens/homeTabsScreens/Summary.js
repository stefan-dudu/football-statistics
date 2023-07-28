import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React from "react";

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
        type: "Card",
        detail: "Yellow Card",
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
        detail: "Yellow Card",
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
    return (
      <View
        key={el.time.elapsed + el.player.id}
        style={styles.timelineContainer}
      >
        <View
          style={[
            el.team.id == homeTeamID
              ? styles.eventWrapperHome
              : styles.eventWrapperAway,
          ]}
        >
          {/* left side info */}
          <View>
            <Text>Type: {el.type}</Text>
            <Text>Who : {el.player.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.teamLogo}
                source={require("../../../assets/teamLogo.png")}
              />
              <Text> {el.team.name} </Text>
            </View>
          </View>

          {/* right side info */}
          <View>
            <Text>Min: {el.time.elapsed}'</Text>
            <Image
              style={styles.playerPicture}
              source={require("../../../assets/profile_pic.jpeg")}
            />
          </View>
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
    // minHeight: "100%",
    // backgroundColor: "lightgreen",
    display: "flex",
    justifyContent: "space-between",

    width: Dimensions.get("window").width - 60,
    // width: 300,
  },

  timelineContainer: {
    // backgroundColor: "gray",
    display: "flex",
    // alignContent: "center",
    // justifyContent: "center",
    // flexDirection: "column-reverse",
    alignItems: "center",
    // marginTop: -100,
  },

  timeStyling: {
    marginTop: 40,
    marginBottom: -60,
  },

  playerPicture: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: "stretch",
  },

  teamLogo: {
    width: 20,
    height: 20,
    borderRadius: 50,
    resizeMode: "stretch",
  },

  eventWrapperHome: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 17,
    width: Dimensions.get("window").width - 70,
    backgroundColor: "white",
    marginVertical: 5,
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
    width: Dimensions.get("window").width - 70,
    backgroundColor: "white",
    marginVertical: 5,
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
});
