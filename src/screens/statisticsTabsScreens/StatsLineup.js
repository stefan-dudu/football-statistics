import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

const StatsLineup = () => {
  const coachData = {
    get: "coachs",
    parameters: {
      team: "2598",
    },
    errors: [],
    results: 5,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        id: 1202,
        name: "V. Moldovan",
        firstname: "Viorel Dinu",
        lastname: "Moldovan",
        age: 51,
        birth: {
          date: "1972-07-08",
          place: "Bistriţa",
          country: "Romania",
        },
        nationality: "Romania",
        height: "177 cm",
        weight: "75 kg",
        photo: "https://media-1.api-sports.io/football/coachs/1202.png",
        team: {
          id: 2598,
          name: "Petrolul 52",
          logo: "https://media-3.api-sports.io/football/teams/2598.png",
        },
        career: [
          {
            team: {
              id: 2598,
              name: "Petrolul 52",
              logo: "https://media-3.api-sports.io/football/teams/2598.png",
            },
            start: "2020-08-01",
            end: "2021-03-01",
          },
          {
            team: {
              id: 2586,
              name: "Chindia Târgovişte",
              logo: "https://media-3.api-sports.io/football/teams/2586.png",
            },
            start: "2018-06-01",
            end: "2020-06-01",
          },
          {
            team: {
              id: 108,
              name: "Auxerre",
              logo: "https://media-1.api-sports.io/football/teams/108.png",
            },
            start: "2016-07-01",
            end: "2016-09-01",
          },
          {
            team: {
              id: 8218,
              name: "Romania U21",
              logo: "https://media-2.api-sports.io/football/teams/8218.png",
            },
            start: "2014-07-01",
            end: "2014-10-01",
          },
          {
            team: {
              id: 6231,
              name: "Rapid",
              logo: "https://media-2.api-sports.io/football/teams/6231.png",
            },
            start: "2013-09-01",
            end: "2014-06-01",
          },
          {
            team: {
              id: null,
              name: "Sportul Studențesc",
              logo: null,
            },
            start: "2010-09-01",
            end: "2010-10-01",
          },
          {
            team: {
              id: 2613,
              name: "Braşov",
              logo: "https://media-1.api-sports.io/football/teams/2613.png",
            },
            start: "2009-07-01",
            end: "2010-06-01",
          },
        ],
      },
      {
        id: 4118,
        name: "M. Cornățeanu",
        firstname: "Mugurel Florin",
        lastname: "Cornățeanu",
        age: 47,
        birth: {
          date: "1972-02-21",
          place: "Constanța",
          country: "Romania",
        },
        nationality: "Romania",
        height: null,
        weight: null,
        photo: "https://media-2.api-sports.io/football/coachs/4118.png",
        team: {
          id: 2598,
          name: "Petrolul 52",
          logo: "https://media-1.api-sports.io/football/teams/2598.png",
        },
        career: [
          {
            team: {
              id: 2598,
              name: "Petrolul 52",
              logo: "https://media-1.api-sports.io/football/teams/2598.png",
            },
            start: "2018-11-29",
            end: "2019-03-25",
          },
          {
            team: {
              id: 16286,
              name: "Dinamo Bucureşti II",
              logo: "https://media-2.api-sports.io/football/teams/16286.png",
            },
            start: "2014-01-09",
            end: "2014-04-15",
          },
          {
            team: {
              id: null,
              name: "Fortuna",
              logo: null,
            },
            start: "2013-08-02",
            end: "2013-08-22",
          },
          {
            team: {
              id: null,
              name: "Callatis 2012",
              logo: null,
            },
            start: "2012-09-01",
            end: "2013-07-31",
          },
          {
            team: {
              id: null,
              name: "Callatis Mangalia",
              logo: null,
            },
            start: "2011-10-10",
            end: "2012-06-30",
          },
        ],
      },
      {
        id: 4131,
        name: "O. Grigore",
        firstname: "Octavian",
        lastname: "Grigore",
        age: 59,
        birth: {
          date: "1964-06-15",
          place: "Urlaţi",
          country: "Romania",
        },
        nationality: "Romania",
        height: null,
        weight: null,
        photo: "https://media-2.api-sports.io/football/coachs/4131.png",
        team: {
          id: 2598,
          name: "Petrolul 52",
          logo: "https://media-1.api-sports.io/football/teams/2598.png",
        },
        career: [
          {
            team: {
              id: 2598,
              name: "Petrolul 52",
              logo: "https://media-1.api-sports.io/football/teams/2598.png",
            },
            start: "2021-03-01",
            end: "2021-05-01",
          },
          {
            team: {
              id: 2598,
              name: "Petrolul 52",
              logo: "https://media-1.api-sports.io/football/teams/2598.png",
            },
            start: "2018-10-01",
            end: "2018-11-01",
          },
          {
            team: {
              id: 2598,
              name: "Petrolul 52",
              logo: "https://media-1.api-sports.io/football/teams/2598.png",
            },
            start: "2016-07-01",
            end: "2017-11-01",
          },
          {
            team: {
              id: null,
              name: "Dunărea Galaţi",
              logo: null,
            },
            start: "2013-04-01",
            end: "2013-06-01",
          },
          {
            team: {
              id: null,
              name: "Fortuna",
              logo: null,
            },
            start: "2012-09-01",
            end: "2012-12-01",
          },
          {
            team: {
              id: 14595,
              name: "Unirea Urziceni",
              logo: "https://media-2.api-sports.io/football/teams/14595.png",
            },
            start: "2010-09-01",
            end: "2011-02-01",
          },
        ],
      },
      {
        id: 12786,
        name: "N. Constantin",
        firstname: "Nicolae",
        lastname: "Constantin",
        age: 50,
        birth: {
          date: "1973-12-09",
          place: "Filipeştii de Târg",
          country: "Romania",
        },
        nationality: "Romania",
        height: "180 cm",
        weight: "75 kg",
        photo: "https://media-1.api-sports.io/football/coachs/12786.png",
        team: {
          id: 2598,
          name: "Petrolul 52",
          logo: "https://media-2.api-sports.io/football/teams/2598.png",
        },
        career: [
          {
            team: {
              id: 2598,
              name: "Petrolul 52",
              logo: "https://media-2.api-sports.io/football/teams/2598.png",
            },
            start: "2021-05-01",
            end: "2023-02-01",
          },
          {
            team: {
              id: 6854,
              name: "Comuna Recea",
              logo: "https://media-2.api-sports.io/football/teams/6854.png",
            },
            start: "2020-09-01",
            end: "2020-12-01",
          },
          {
            team: {
              id: 6861,
              name: "Filiaşi",
              logo: "https://media-3.api-sports.io/football/teams/6861.png",
            },
            start: "2019-12-01",
            end: "2020-06-01",
          },
        ],
      },
      {
        id: 19348,
        name: "F. Pârvu",
        firstname: "Florin Cristian",
        lastname: "Pârvu",
        age: 48,
        birth: {
          date: "1975-04-02",
          place: "Ploiești",
          country: "Romania",
        },
        nationality: "Romania",
        height: "184 cm",
        weight: null,
        photo: "https://media-3.api-sports.io/football/coachs/19348.png",
        team: {
          id: 2598,
          name: "Petrolul 52",
          logo: "https://media-3.api-sports.io/football/teams/2598.png",
        },
        career: [
          {
            team: {
              id: 2598,
              name: "Petrolul 52",
              logo: "https://media-3.api-sports.io/football/teams/2598.png",
            },
            start: "2023-02-01",
            end: null,
          },
          {
            team: {
              id: null,
              name: "Turnu Severin",
              logo: null,
            },
            start: "2011-11-01",
            end: "2011-12-01",
          },
          {
            team: {
              id: null,
              name: "Chimia Brazi",
              logo: null,
            },
            start: "2010-09-01",
            end: "2010-11-01",
          },
        ],
      },
    ],
  };

  const players = {
    get: "players/squads",
    parameters: {
      team: "2598",
    },
    errors: [],
    results: 1,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        team: {
          id: 2598,
          name: "Petrolul Ploiesti",
          logo: "https://media-1.api-sports.io/football/teams/2598.png",
        },
        players: [
          {
            id: 42765,
            name: "G. Gavrilaş",
            age: 33,
            number: 1,
            position: "Goalkeeper",
            photo: "https://media-3.api-sports.io/football/players/42765.png",
          },
          {
            id: 42764,
            name: "M. Eşanu",
            age: 25,
            number: 12,
            position: "Goalkeeper",
            photo: "https://media-2.api-sports.io/football/players/42764.png",
          },
          {
            id: 324930,
            name: "A. Jercălău",
            age: 18,
            number: 35,
            position: "Goalkeeper",
            photo: "https://media-3.api-sports.io/football/players/324930.png",
          },
          {
            id: 30948,
            name: "L. Zima",
            age: 29,
            number: 38,
            position: "Goalkeeper",
            photo: "https://media-2.api-sports.io/football/players/30948.png",
          },
          {
            id: 16108,
            name: "Marian Huja",
            age: 24,
            number: 2,
            position: "Defender",
            photo: "https://media-1.api-sports.io/football/players/16108.png",
          },
          {
            id: 37578,
            name: "B. Meijers",
            age: 26,
            number: 3,
            position: "Defender",
            photo: "https://media-1.api-sports.io/football/players/37578.png",
          },
          {
            id: 50084,
            name: "P. Papp",
            age: 34,
            number: 4,
            position: "Defender",
            photo: "https://media-3.api-sports.io/football/players/50084.png",
          },
          {
            id: 42569,
            name: "V. Țicu",
            age: 23,
            number: 5,
            position: "Defender",
            photo: "https://media-1.api-sports.io/football/players/42569.png",
          },
          {
            id: 50222,
            name: "I. Latovlevici",
            age: 37,
            number: 14,
            position: "Defender",
            photo: "https://media-1.api-sports.io/football/players/50222.png",
          },
          {
            id: 65365,
            name: "G. Pashov",
            age: 33,
            number: 26,
            position: "Defender",
            photo: "https://media-3.api-sports.io/football/players/65365.png",
          },
          {
            id: 234653,
            name: "Garutti",
            age: 29,
            number: 34,
            position: "Defender",
            photo: "https://media-2.api-sports.io/football/players/234653.png",
          },
          {
            id: 404526,
            name: "S. Doua",
            age: 22,
            number: 71,
            position: "Defender",
            photo: "https://media-3.api-sports.io/football/players/404526.png",
          },
          {
            id: 41717,
            name: "Pedro Justiniano",
            age: 23,
            number: null,
            position: "Defender",
            photo: "https://media-2.api-sports.io/football/players/41717.png",
          },
          {
            id: 61971,
            name: "Jefferson",
            age: 29,
            number: 6,
            position: "Midfielder",
            photo: "https://media-3.api-sports.io/football/players/61971.png",
          },
          {
            id: 28539,
            name: "G. Grozav",
            age: 33,
            number: 7,
            position: "Midfielder",
            photo: "https://media-2.api-sports.io/football/players/28539.png",
          },
          {
            id: 55320,
            name: "Jair",
            age: 29,
            number: 8,
            position: "Midfielder",
            photo: "https://media-3.api-sports.io/football/players/55320.png",
          },
          {
            id: 44383,
            name: "C. Budescu",
            age: 34,
            number: 10,
            position: "Midfielder",
            photo: "https://media-2.api-sports.io/football/players/44383.png",
          },
          {
            id: 72368,
            name: "T. Seto",
            age: 37,
            number: 11,
            position: "Midfielder",
            photo: "https://media-3.api-sports.io/football/players/72368.png",
          },
          {
            id: 40504,
            name: "S. Hanca",
            age: 31,
            number: 20,
            position: "Midfielder",
            photo: "https://media-1.api-sports.io/football/players/40504.png",
          },
          {
            id: 46058,
            name: "S. Purtić",
            age: 25,
            number: 25,
            position: "Midfielder",
            photo: "https://media-3.api-sports.io/football/players/46058.png",
          },
          {
            id: 401556,
            name: "Juan Andres Pătrașcu",
            age: 19,
            number: 36,
            position: "Midfielder",
            photo: "https://media-3.api-sports.io/football/players/401556.png",
          },
          {
            id: 367688,
            name: "M. Rădulescu",
            age: 18,
            number: 41,
            position: "Midfielder",
            photo: "https://media-2.api-sports.io/football/players/367688.png",
          },
          {
            id: 367689,
            name: "M. Ioniță",
            age: 16,
            number: 43,
            position: "Midfielder",
            photo: "https://media-2.api-sports.io/football/players/367689.png",
          },
          {
            id: 43307,
            name: "L. Dumitriu",
            age: 31,
            number: 44,
            position: "Midfielder",
            photo: "https://media-2.api-sports.io/football/players/43307.png",
          },
          {
            id: 3239,
            name: "I. Diomandé",
            age: 31,
            number: 82,
            position: "Midfielder",
            photo: "https://media-3.api-sports.io/football/players/3239.png",
          },
          {
            id: 136246,
            name: "M. Constantinescu",
            age: 21,
            number: 95,
            position: "Midfielder",
            photo: "https://media-3.api-sports.io/football/players/136246.png",
          },
          {
            id: 42571,
            name: "M. Bratu",
            age: 21,
            number: 98,
            position: "Midfielder",
            photo: "https://media-1.api-sports.io/football/players/42571.png",
          },
          {
            id: 307497,
            name: "A. Musi",
            age: 19,
            number: 99,
            position: "Midfielder",
            photo: "https://media-3.api-sports.io/football/players/307497.png",
          },
          {
            id: 309892,
            name: "A. Boțogan",
            age: 19,
            number: null,
            position: "Midfielder",
            photo: "https://media-3.api-sports.io/football/players/309892.png",
          },
          {
            id: 41896,
            name: "C. Irobiso",
            age: 30,
            number: 9,
            position: "Attacker",
            photo: "https://media-1.api-sports.io/football/players/41896.png",
          },
          {
            id: 356687,
            name: "I. Răducan",
            age: 18,
            number: 13,
            position: "Attacker",
            photo: "https://media-1.api-sports.io/football/players/356687.png",
          },
          {
            id: 66844,
            name: "Z. Petrović",
            age: 26,
            number: 17,
            position: "Attacker",
            photo: "https://media-1.api-sports.io/football/players/66844.png",
          },
          {
            id: 127332,
            name: "R. Bucur",
            age: 21,
            number: 24,
            position: "Attacker",
            photo: "https://media-2.api-sports.io/football/players/127332.png",
          },
          {
            id: 381697,
            name: "I. Cojocaru",
            age: 20,
            number: 77,
            position: "Attacker",
            photo: "https://media-2.api-sports.io/football/players/381697.png",
          },
          {
            id: 324272,
            name: "Z. Mitrov",
            age: 21,
            number: 93,
            position: "Attacker",
            photo: "https://media-3.api-sports.io/football/players/324272.png",
          },
        ],
      },
    ],
  };

  const coach = coachData.response[0];

  const goalkeepers = players.response[0].players.filter(
    (pos) => pos.position == "Goalkeeper"
  );

  const defenders = players.response[0].players.filter(
    (pos) => pos.position == "Defender"
  );

  const midfielderers = players.response[0].players.filter(
    (pos) => pos.position == "Midfielder"
  );

  const attackers = players.response[0].players.filter(
    (pos) => pos.position == "Attacker"
  );

  // console.log("goalkeepers", goalkeepers);

  const CoachCard = () => {
    // console.log("coach", coachData.response[0].name);
    return (
      <View style={styles.playerCardWrapper}>
        <View style={styles.playerTopPart}>
          {/* top part */}
          <Image
            style={styles.playerPicStyle}
            source={require("../../../assets/coach.png")}
          />
          <View style={styles.playerTopRight}>
            {/* details - right side */}
            <Text>Ani</Text>
            <Text style={styles.playerAgeNumber}>
              {coachData.response[0].age}
            </Text>
          </View>
        </View>

        <View style={styles.playerBottomPart}>
          <Text style={styles.playerName}>{coachData.response[0].name}</Text>
          <Text>Antrenor</Text>
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
              source={require("../../../assets/gk.png")}
            />
            <View style={styles.playerTopRight}>
              {/* details - right side */}
              <Text>Ani</Text>
              <Text style={styles.playerAgeNumber}>{el.age}</Text>
              <Text>Nr</Text>
              <Text style={styles.playerAgeNumber}>{el.number}</Text>
            </View>
          </View>

          <View style={styles.playerBottomPart}>
            <Text style={styles.playerName}>{el.name}</Text>
            <Text>{el.position}</Text>
          </View>
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
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
  );
};

export default StatsLineup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    // height: 500,
  },

  playerCardWrapper: {
    flexDirection: "column",
    margin: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: "lightgray",
    borderRadius: 16,
    width: "44%",
    height: "auto",
    // paddingBottom: 20,
    // backgroundColor: "red",
  },

  playerTopPart: { flexDirection: "row", justifyContent: "space-around" },
  playerTopRight: {},

  playerBottomPart: {},

  categoryWrapper: {
    // backgroundColor: "lightgreen",
    flexDirection: "row",
    width: Dimensions.get("window").width - 40,
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
    fontSize: 20,
    fontWeight: "600",
  },

  positionTitleStyle: {
    color: "gray",
    fontSize: 20,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    width: Dimensions.get("window").width - 40,
  },
});
