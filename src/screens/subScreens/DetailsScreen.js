import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DetailedTabs from "./DetailedTabs";
import CustomSwitch from "../../components/CustomSwitch";
import BigScoreCard from "../../components/BigScoreCard";
import TestComponent from "../../components/TestComponent";
import { COLORS } from "../../utils/colors";
import Head2Head from "../tabsScreens/Head2Head";
import LineUp from "../tabsScreens/LineUp";
import Stats from "../tabsScreens/Stats";
import Summary from "../tabsScreens/Summary";
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
      <View style={styles.topPartWrapper}>
        <View style={styles.scoreCardWrapper}>
          <BigScoreCard
            data={data}
            page={"details"}
            style={styles.scoreCardStyle}
          />
          <View style={styles.bottonHalfWrapper}>
            <View style={styles.bottomContainer}>
              <View style={styles.customSwitchStyle}>
                <View style={{ top: 20, width: "90%", left: 18 }}>
                  <CustomSwitch
                    selectionMode={1}
                    option1={"Stats"}
                    option2={"Summary"}
                    option3={"Line-up"}
                    option4={"H2H"}
                    onSelectSwitch={onSelectSwitch}
                  />
                  <View style={{ top: 20 }}>
                    {detailsTab == 1 && <Stats />}
                    {detailsTab == 2 && <Summary />}
                    {detailsTab == 3 && <LineUp />}
                    {detailsTab == 4 && <Head2Head />}
                  </View>
                </View>
              </View>
            </View>
          </View>
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
  topPartWrapper: {
    position: "relative",
    width: "100%",
    height: 150,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    backgroundColor: COLORS.purple,
  },

  bottonHalfWrapper: {
    // top: 50,
    height: "auto",
    backgroundColor: "red",
    // width: "100%",
    borderRadius: 10,
    position: "relative",
  },

  customSwitchStyle: {
    position: "absolute",
    // marginTop: 80,
    backgroundColor: "white",
    borderRadius: 10,
    width: "94%",
    top: 25,
    height: 500,
  },

  scoreCardWrapper: {
    top: 50,
    left: "3%",
    height: "auto",
    position: "relative",
  },

  bottomContainer: {
    position: "absolute",
    // marginTop: 20,
    width: "100%",
  },
});
