import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";

const Stats = () => {
  const data = {
    get: "fixtures/statistics",
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
          logo: "https://media-2.api-sports.io/football/teams/6886.png",
        },
        statistics: [
          {
            type: "Shots on Goal",
            value: 5,
          },
          {
            type: "Shots off Goal",
            value: 6,
          },
          {
            type: "Total Shots",
            value: 12,
          },
          {
            type: "Blocked Shots",
            value: 1,
          },
          {
            type: "Shots insidebox",
            value: 6,
          },
          {
            type: "Shots outsidebox",
            value: 6,
          },
          {
            type: "Fouls",
            value: 19,
          },
          {
            type: "Corner Kicks",
            value: 3,
          },
          {
            type: "Offsides",
            value: null,
          },
          {
            type: "Ball Possession",
            value: "44%",
          },
          {
            type: "Yellow Cards",
            value: 2,
          },
          {
            type: "Red Cards",
            value: null,
          },
          {
            type: "Goalkeeper Saves",
            value: 3,
          },
          {
            type: "Total passes",
            value: 308,
          },
          {
            type: "Passes accurate",
            value: 188,
          },
          {
            type: "Passes %",
            value: "61%",
          },
          {
            type: "expected_goals",
            value: "1.64",
          },
        ],
      },
      {
        team: {
          id: 2589,
          name: "Uta Arad",
          logo: "https://media-3.api-sports.io/football/teams/2589.png",
        },
        statistics: [
          {
            type: "Shots on Goal",
            value: 4,
          },
          {
            type: "Shots off Goal",
            value: 3,
          },
          {
            type: "Total Shots",
            value: 9,
          },
          {
            type: "Blocked Shots",
            value: 2,
          },
          {
            type: "Shots insidebox",
            value: 3,
          },
          {
            type: "Shots outsidebox",
            value: 6,
          },
          {
            type: "Fouls",
            value: 15,
          },
          {
            type: "Corner Kicks",
            value: 3,
          },
          {
            type: "Offsides",
            value: null,
          },
          {
            type: "Ball Possession",
            value: "56%",
          },
          {
            type: "Yellow Cards",
            value: 5,
          },
          {
            type: "Red Cards",
            value: null,
          },
          {
            type: "Goalkeeper Saves",
            value: 4,
          },
          {
            type: "Total passes",
            value: 386,
          },
          {
            type: "Passes accurate",
            value: 288,
          },
          {
            type: "Passes %",
            value: "75%",
          },
          {
            type: "expected_goals",
            value: "0.57",
          },
        ],
      },
    ],
  };

  // console.log("1st obj", data.response[0].statistics[9].value);

  const RowBuilder = ({ number, text }) => {
    const homeValue = data.response[0].statistics[number].value || "-";
    const awayValue = data.response[1].statistics[number].value || "-";

    const styles2 = StyleSheet.create({
      homeAdvantageStyle: {
        borderLeftWidth: 5,
        borderLeftColor: COLORS.pink,
        fontSize: 20,
        paddingHorizontal: 10,
        color: COLORS.pink,
      },

      awayAdvantageStyle: {
        borderRightWidth: 5,
        borderRightColor: COLORS.pink,
        fontSize: 20,
        paddingHorizontal: 10,
        color: COLORS.pink,
      },

      defaultValueTextStyle: {
        color: COLORS.purple,
        fontSize: 20,
        paddingHorizontal: 10,
      },

      rowTitleStyle: {
        fontSize: 20,
        paddingHorizontal: 10,
        color: COLORS.titleDarkGray,
      },
    });

    return (
      <View style={styles.statRowWrapper}>
        <Text
          style={[
            homeValue > awayValue
              ? styles2.homeAdvantageStyle
              : styles2.defaultValueTextStyle,
          ]}
        >
          {homeValue}
        </Text>
        <Text style={styles2.rowTitleStyle}>{text}</Text>
        <Text
          style={[
            homeValue < awayValue
              ? styles2.awayAdvantageStyle
              : styles2.defaultValueTextStyle,
          ]}
        >
          {awayValue}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <RowBuilder number={9} text={"Posesie"} />
        <RowBuilder number={16} text={"Sanse De Gol"} />
        <RowBuilder number={6} text={"Faulturi"} />
        <RowBuilder number={7} text={"Cornere"} />
        <RowBuilder number={8} text={"Offside"} />
        <RowBuilder number={10} text={"Cartonase Galbene"} />
        <RowBuilder number={11} text={"Cartonase Rosii"} />
        <RowBuilder number={15} text={"Precizie Pase"} />
        <RowBuilder number={2} text={"Suturi totale"} />
        <RowBuilder number={0} text={"Suturi pe poarta"} />
        <RowBuilder number={1} text={"Suturi pe langa poarta"} />
        <RowBuilder number={3} text={"Suturi aparate"} />
        <RowBuilder number={4} text={"Suturi din afara careului"} />
        <RowBuilder number={5} text={"Suturi din careu"} />
        <RowBuilder number={12} text={"Mingii aparate"} />
        <RowBuilder number={13} text={"Numar total de pase"} />
        <RowBuilder number={14} text={"Numar pase cu success"} />
      </ScrollView>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  statRowWrapper: {
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
