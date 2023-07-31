import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";

const Stats = ({ data }) => {
  // console.log("1st obj", data.response[0].statistics[9].value);
  // console.log("data", data);

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
    <View style={styles.parentWRapper}>
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
      <RowBuilder number={13} text={"Nr total de pase"} />
      <RowBuilder number={14} text={"Nr pase finalizate"} />
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  parentWRapper: { width: Dimensions.get("window").width - 40 },

  statRowWrapper: {
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
