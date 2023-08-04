import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";

const Head2Head = () => {
  const data = {
    get: "fixtures/headtohead",
    parameters: {
      h2h: "33-34",
      last: "10",
    },
    errors: [],
    results: 10,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        fixture: {
          id: 868233,
          referee: "S. Attwell",
          timezone: "UTC",
          date: "2023-04-02T15:30:00+00:00",
          timestamp: 1680449400,
          periods: {
            first: 1680449400,
            second: 1680453000,
          },
          venue: {
            id: 562,
            name: "St. James' Park",
            city: "Newcastle upon Tyne",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-3.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2022,
          round: "Regular Season - 29",
        },
        teams: {
          home: {
            id: 34,
            name: "Newcastle",
            logo: "https://media-1.api-sports.io/football/teams/34.png",
            winner: true,
          },
          away: {
            id: 33,
            name: "Man Utd",
            logo: "https://media-2.api-sports.io/football/teams/33.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 0,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 2,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 998280,
          referee: "D. Coote",
          timezone: "UTC",
          date: "2023-02-26T16:30:00+00:00",
          timestamp: 1677429000,
          periods: {
            first: 1677429000,
            second: 1677432600,
          },
          venue: {
            id: 489,
            name: "Wembley Stadium",
            city: "London",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 48,
          name: "League Cup",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/48.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2022,
          round: "Final",
        },
        teams: {
          home: {
            id: 33,
            name: "Man Utd",
            logo: "https://media-1.api-sports.io/football/teams/33.png",
            winner: true,
          },
          away: {
            id: 34,
            name: "Newcastle",
            logo: "https://media-3.api-sports.io/football/teams/34.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 0,
        },
        score: {
          halftime: {
            home: 2,
            away: 0,
          },
          fulltime: {
            home: 2,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 868052,
          referee: "C. Pawson",
          timezone: "UTC",
          date: "2022-10-16T13:00:00+00:00",
          timestamp: 1665925200,
          periods: {
            first: 1665925200,
            second: 1665928800,
          },
          venue: {
            id: 556,
            name: "Old Trafford",
            city: "Manchester",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-3.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2022,
          round: "Regular Season - 11",
        },
        teams: {
          home: {
            id: 33,
            name: "Man Utd",
            logo: "https://media-1.api-sports.io/football/teams/33.png",
            winner: null,
          },
          away: {
            id: 34,
            name: "Newcastle",
            logo: "https://media-2.api-sports.io/football/teams/34.png",
            winner: null,
          },
        },
        goals: {
          home: 0,
          away: 0,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 0,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 710741,
          referee: "C. Pawson",
          timezone: "UTC",
          date: "2021-12-27T20:00:00+00:00",
          timestamp: 1640635200,
          periods: {
            first: 1640635200,
            second: 1640638800,
          },
          venue: {
            id: 562,
            name: "St. James' Park",
            city: "Newcastle upon Tyne",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2021,
          round: "Regular Season - 19",
        },
        teams: {
          home: {
            id: 34,
            name: "Newcastle",
            logo: "https://media-1.api-sports.io/football/teams/34.png",
            winner: null,
          },
          away: {
            id: 33,
            name: "Man Utd",
            logo: "https://media-2.api-sports.io/football/teams/33.png",
            winner: null,
          },
        },
        goals: {
          home: 1,
          away: 1,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 1,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 710593,
          referee: "A. Taylor",
          timezone: "UTC",
          date: "2021-09-11T14:00:00+00:00",
          timestamp: 1631368800,
          periods: {
            first: 1631368800,
            second: 1631372400,
          },
          venue: {
            id: 556,
            name: "Old Trafford",
            city: "Manchester",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2021,
          round: "Regular Season - 4",
        },
        teams: {
          home: {
            id: 33,
            name: "Man Utd",
            logo: "https://media-1.api-sports.io/football/teams/33.png",
            winner: true,
          },
          away: {
            id: 34,
            name: "Newcastle",
            logo: "https://media-2.api-sports.io/football/teams/34.png",
            winner: false,
          },
        },
        goals: {
          home: 4,
          away: 1,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 4,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 592742,
          referee: "P. Tierney",
          timezone: "UTC",
          date: "2021-02-21T19:00:00+00:00",
          timestamp: 1613934000,
          periods: {
            first: 1613934000,
            second: 1613937600,
          },
          venue: {
            id: 556,
            name: "Old Trafford",
            city: "Manchester",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-2.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2020,
          round: "Regular Season - 25",
        },
        teams: {
          home: {
            id: 33,
            name: "Man Utd",
            logo: "https://media-3.api-sports.io/football/teams/33.png",
            winner: true,
          },
          away: {
            id: 34,
            name: "Newcastle",
            logo: "https://media-1.api-sports.io/football/teams/34.png",
            winner: false,
          },
        },
        goals: {
          home: 3,
          away: 1,
        },
        score: {
          halftime: {
            home: 1,
            away: 1,
          },
          fulltime: {
            home: 3,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 592187,
          referee: "C. Pawson",
          timezone: "UTC",
          date: "2020-10-17T19:00:00+00:00",
          timestamp: 1602961200,
          periods: {
            first: 1602961200,
            second: 1602964800,
          },
          venue: {
            id: 562,
            name: "St. James' Park",
            city: "Newcastle upon Tyne",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-2.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2020,
          round: "Regular Season - 5",
        },
        teams: {
          home: {
            id: 34,
            name: "Newcastle",
            logo: "https://media-1.api-sports.io/football/teams/34.png",
            winner: false,
          },
          away: {
            id: 33,
            name: "Man Utd",
            logo: "https://media-3.api-sports.io/football/teams/33.png",
            winner: true,
          },
        },
        goals: {
          home: 1,
          away: 4,
        },
        score: {
          halftime: {
            home: 1,
            away: 1,
          },
          fulltime: {
            home: 1,
            away: 4,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 157201,
          referee: "Kevin Friend, England",
          timezone: "UTC",
          date: "2019-12-26T17:30:00+00:00",
          timestamp: 1577381400,
          periods: {
            first: 1577381400,
            second: 1577385000,
          },
          venue: {
            id: 556,
            name: "Old Trafford",
            city: "Manchester",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2019,
          round: "Regular Season - 19",
        },
        teams: {
          home: {
            id: 33,
            name: "Man Utd",
            logo: "https://media-1.api-sports.io/football/teams/33.png",
            winner: true,
          },
          away: {
            id: 34,
            name: "Newcastle",
            logo: "https://media-1.api-sports.io/football/teams/34.png",
            winner: false,
          },
        },
        goals: {
          home: 4,
          away: 1,
        },
        score: {
          halftime: {
            home: 3,
            away: 1,
          },
          fulltime: {
            home: 4,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 157090,
          referee: "Mike Dean, England",
          timezone: "UTC",
          date: "2019-10-06T15:30:00+00:00",
          timestamp: 1570375800,
          periods: {
            first: 1570375800,
            second: 1570379400,
          },
          venue: {
            id: 562,
            name: "St. James' Park",
            city: "Newcastle upon Tyne",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2019,
          round: "Regular Season - 8",
        },
        teams: {
          home: {
            id: 34,
            name: "Newcastle",
            logo: "https://media-2.api-sports.io/football/teams/34.png",
            winner: true,
          },
          away: {
            id: 33,
            name: "Man Utd",
            logo: "https://media-1.api-sports.io/football/teams/33.png",
            winner: false,
          },
        },
        goals: {
          home: 1,
          away: 0,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 1,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 272,
          referee: "Andre Marriner, England",
          timezone: "UTC",
          date: "2019-01-02T20:00:00+00:00",
          timestamp: 1546459200,
          periods: {
            first: 1546459200,
            second: 1546462800,
          },
          venue: {
            id: 562,
            name: "St James' Park",
            city: "Newcastle upon Tyne",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-2.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2018,
          round: "Regular Season - 21",
        },
        teams: {
          home: {
            id: 34,
            name: "Newcastle",
            logo: "https://media-2.api-sports.io/football/teams/34.png",
            winner: false,
          },
          away: {
            id: 33,
            name: "Man Utd",
            logo: "https://media-3.api-sports.io/football/teams/33.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 2,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 0,
            away: 2,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
  };

  const h2h = data.response.map((el) => {
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
              source={require("../../../assets/teamLogo.png")}
            />
            <Text style={styles.teamsName}>{el.teams.home.name}</Text>
          </View>
          <View style={styles.middle}>
            <Text style={styles.score}>{el.goals.home}</Text>
            {/* middle ( score + league logo) */}
            <Image
              style={styles.leagueLogoStyle}
              source={require("../../../assets/premierLeague.png")}
            />
            <Text style={styles.score}>{el.goals.home}</Text>
          </View>
          <View style={styles.rightSide}>
            {/* right side */}
            <Image
              style={styles.teamLogoStyle}
              source={require("../../../assets/teamLogo2.png")}
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
      <Text style={styles.titleStyling}>
        Rezultatatele in ultimele {data.results} infruntari
      </Text>
      {h2h}
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
  },

  teamLogoStyle: {
    width: 50,
    height: 50,
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
    color: COLORS.powerOrange,
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
