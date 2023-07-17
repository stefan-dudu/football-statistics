import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DetailedTabs from "./DetailedTabs";
import CustomSwitch from "../../components/CustomSwitch";
import BigScoreCard from "../../components/BigScoreCard";
import TestComponent from "../../components/TestComponent";
import { COLORS } from "../../utils/colors";

const DetailsScreen = (params) => {
  const [detailsTab, setDetailsTab] = useState(1);

  // console.log("params", params.route.params.fixtureData);

  const data = {
    fixture: {
      id: 1,
      referee: "G. Găman",
      timezone: "UTC",
      date: "2022-07-18T18:30:00+00:00",
      timestamp: 1658169000,
      periods: {
        first: 1658169000,
        second: 1658172600,
      },
      venue: {
        id: 1312,
        name: "Stadionul Ilie Oană",
        city: "Ploieşti",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 283,
      name: "Liga I",
      country: "Romania",
      logo: "https://media-3.api-sports.io/football/leagues/283.png",
      flag: "https://media-2.api-sports.io/flags/ro.svg",
      season: 2022,
      round: "Regular Season - 1",
    },
    teams: {
      home: {
        id: 2598,
        name: "Petrolul Ploiesti",
        logo: "https://media-2.api-sports.io/football/teams/2598.png",
        winner: false,
      },
      away: {
        id: 2578,
        name: "FC Voluntari",
        logo: "https://media-3.api-sports.io/football/teams/2578.png",
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
        away: 0,
      },
      fulltime: {
        home: 0,
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
  };

  const onSelectSwitch = (value) => {
    setDetailsTab(value);
  };

  return (
    <View style={styles.pageWrapperStyle}>
      <View style={styles.wallpaperComponentStyle}>
        <View style={styles.testWrapper}>
          <BigScoreCard
            data={data}
            page={"details"}
            style={styles.scoreCardStyle}
          />
        </View>
        <View style={styles.wrapper}>
          <CustomSwitch
            style={styles.customSwitchStyle}
            selectionMode={1}
            option1={"Stats"}
            option2={"Summary"}
            option3={"Line-up"}
            option4={"H2H"}
            onSelectSwitch={onSelectSwitch}
          />
          {detailsTab == 1 && <Text>Stats</Text>}
          {detailsTab == 2 && <Text>Summary</Text>}
          {detailsTab == 3 && <Text>Line-up</Text>}
          {detailsTab == 4 && <Text>H2H</Text>}
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  pageWrapperStyle: {
    position: "relative",
    flexDirection: "column",
  },
  wallpaperComponentStyle: {
    position: "relative",
    width: "100%",
    height: 150,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    backgroundColor: COLORS.purple,
  },
  topComponent: {
    position: "relative",
  },
  customSwitchStyle: {
    position: "absolute",
  },

  wrapper: {
    marginTop: 80,
  },

  testWrapper: {
    top: 50,
    left: "9%",
    height: "auto",
  },
});
