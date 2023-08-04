import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import apiSports from "../api/api-sports";
import BigScoreCard from "./BigScoreCard";
import { COLORS } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const LiveMatches = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [liveMatchesData, setLiveMatchesData] = useState(null);
  const [isError, setIsError] = useState("");

  const getLiveMatches = async () => {
    try {
      const response = await apiSports.get("/fixtures", {
        params: {
          league: 283,
          season: 2023,
          live: "all",
        },
      });
      response?.data.errors.requests.includes &&
        setIsError("Max limit for today been reached");

      response?.data.results > 0 && setLiveMatchesData(response?.data);
      setLoading(false);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  const data3 = {
    get: "fixtures",
    parameters: {
      live: "all",
    },
    errors: [],
    results: 2,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        fixture: {
          id: 1029995,
          referee: null,
          timezone: "UTC",
          date: "2023-08-03T08:00:00+00:00",
          timestamp: 1691049600,
          periods: {
            first: 1691049600,
            second: null,
          },
          venue: {
            id: 19787,
            name: "Stadion Gelora B.J. Habibie",
            city: "Lompoe",
          },
          status: {
            long: "First Half",
            short: "1H",
            elapsed: 13,
          },
        },
        league: {
          id: 274,
          name: "Liga 1",
          country: "Indonesia",
          logo: "https://media-1.api-sports.io/football/leagues/274.png",
          flag: "https://media-3.api-sports.io/flags/id.svg",
          season: 2023,
          round: "Regular Season - 6",
        },
        teams: {
          home: {
            id: 559,
            name: "PSM Makassar",
            logo: "https://media-1.api-sports.io/football/teams/2441.png",
            winner: null,
          },
          away: {
            id: 632,
            name: "Persik Kediri",
            logo: "https://media-1.api-sports.io/football/teams/4241.png",
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
            home: null,
            away: null,
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
        events: [],
      },
      {
        fixture: {
          id: 1097173,
          referee: null,
          timezone: "UTC",
          date: "2023-08-03T08:00:00+00:00",
          timestamp: 1691049600,
          periods: {
            first: 1691049600,
            second: null,
          },
          venue: {
            id: 19535,
            name: "Busan Asiad Main Stadium",
            city: "Busan",
          },
          status: {
            long: "First Half",
            short: "1H",
            elapsed: 10,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 1",
        },
        teams: {
          home: {
            id: 635,
            name: "Jeonbuk Motors",
            logo: "https://media-3.api-sports.io/football/teams/2762.png",
            winner: null,
          },
          away: {
            id: 2246,
            name: "Paris Saint Germain",
            logo: "https://media-2.api-sports.io/football/teams/85.png",
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
            home: null,
            away: null,
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
        events: [],
      },
      {
        fixture: {
          id: 239625,
          referee: null,
          timezone: "UTC",
          date: "2020-02-06T14:00:00+00:00",
          timestamp: 1580997600,
          periods: {
            first: 1580997600,
            second: null,
          },
          venue: {
            id: 1887,
            name: "Stade Municipal",
            city: "Oued Zem",
          },
          status: {
            long: "Halftime",
            short: "HT",
            elapsed: 45,
          },
        },
        league: {
          id: 200,
          name: "Botola Pro",
          country: "Morocco",
          logo: "https://media.api-sports.io/football/leagues/115.png",
          flag: "https://media.api-sports.io/flags/ma.svg",
          season: 2019,
          round: "Regular Season - 14",
        },
        teams: {
          home: {
            id: 2579,
            name: "Rapide Oued ZEM",
            logo: "https://media.api-sports.io/football/teams/967.png",
            winner: false,
          },
          away: {
            id: 2581,
            name: "Wydad AC",
            logo: "https://media.api-sports.io/football/teams/968.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 1,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: null,
            away: null,
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

  const matchData = data3?.response?.map((el, i) => {
    // const matchData = liveMatchesData?.response?.map((el) => {
    // console.log("i", i);
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            fixtureData: el,
            typeOfMatch: "live",
          })
        }
        key={el.fixture.id}
      >
        <BigScoreCard data={el} page={"home"} i={i} />
      </TouchableOpacity>
    );
  });

  useEffect(() => {
    // getLiveMatches();
  }, []);

  return (
    <View style={styles.containerStyle}>
      {
        loading ? (
          // Show a loading spinner or message while waiting for data
          <Text>Loading...</Text>
        ) : (
          data3 && (
            // Render the data when it's available
            <>
              <Text style={styles.textHeader}>Meciuri live</Text>
              <ScrollView horizontal>{matchData}</ScrollView>
            </>
          )
        )
        // : isError ? (
        //   // Handle the case when no data is available or an error occurred
        //   <Text> </Text>
        // ) : (
        //   // Handle the case when no data is available or an error occurred
        //   <Text>Some other error</Text>
        // )
      }
    </View>
  );
};

export default LiveMatches;

const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: "pink",
    paddingTop: 25,
    flexDirection: "column",
  },

  textHeader: {
    marginLeft: 16,
    marginBottom: 16,
    fontSize: 25,
    color: COLORS.titleDarkGray,
    fontWeight: "600",
  },
});
