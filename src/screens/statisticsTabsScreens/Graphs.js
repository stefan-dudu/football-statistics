import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import React from "react";
import SectionPieChart from "../../components/chartComponents/SectionPieChart";
import FormLinedChart from "../../components/chartComponents/FormLinedChart";
import GoalsHorizontalBarChart from "../../components/chartComponents/GoalsHorizontalBarChart";
import CardsCustomChart from "../../components/chartComponents/CardsCustomChart";
import PenaltyDonutChart from "../../components/chartComponents/PenaltyDonutChart";
import { COLORS } from "../../utils/colors";

const Graphs = ({ teamStatsData }) => {
  return (
    <View style={styles.wrapperStyle}>
      <View>
        <Text style={styles.graphSubtitle}>Evolutie</Text>
        <FormLinedChart form={teamStatsData.response.form} />
        <Text style={styles.graphSubtitle}>Rezultate</Text>
        <SectionPieChart data={teamStatsData.response.fixtures} />
        <View style={styles.textWrapper}>
          <Text style={styles.textStyling}>
            Cea mai clara victorie 🏠:{" "}
            <Text style={styles.textValue}>
              {teamStatsData.response.biggest.wins.home}
            </Text>
          </Text>
          <Text style={styles.textStyling}>
            Cea mai clara victorie ➡️:{" "}
            <Text style={styles.textValue}>
              {teamStatsData.response.biggest.wins.away}
            </Text>
          </Text>
          <Text style={styles.textStyling}>
            Cea mai clara infrangere 🏠:
            <Text style={styles.textValue}>
              {" "}
              {teamStatsData.response.biggest.loses.home || "-"}
            </Text>
          </Text>
          <Text style={styles.textStyling}>
            Cea mai clara infrangere ➡️:
            <Text style={styles.textValue}>
              {" "}
              {teamStatsData.response.biggest.loses.away || "-"}
            </Text>
          </Text>
        </View>
        <Text style={styles.graphSubtitle}>
          Goluri <Text style={{ color: COLORS.darkGreen }}>marcate</Text>{" "}
          acasa/deplasasre
        </Text>
        <GoalsHorizontalBarChart
          home={teamStatsData.response.goals.for.total.home}
          away={teamStatsData.response.goals.for.total.away}
        />
        <Text style={styles.graphSubtitle}>
          Goluri <Text style={{ color: COLORS.darkGreen }}>primite</Text>{" "}
          acasa/deplasasre
        </Text>
        <GoalsHorizontalBarChart
          home={teamStatsData.response.goals.against.total.home}
          away={teamStatsData.response.goals.against.total.away}
        />
        <CardsCustomChart cards={teamStatsData.response.cards} />
        <View style={styles.textWrapper}>
          <Text style={styles.textStyling}>
            Nr. meciuri fara gol primit :{" "}
            <Text style={styles.textValue}>
              {teamStatsData.response.clean_sheet.total}
            </Text>
          </Text>
          <Text style={styles.textStyling}>
            Nr. meciuri fara a inscrie :{" "}
            <Text style={styles.textValue}>
              {teamStatsData.response.failed_to_score.total}
            </Text>
          </Text>
        </View>
        {teamStatsData.response.penalty.total > 0 && (
          <PenaltyDonutChart data={teamStatsData.response.penalty} />
        )}
      </View>
    </View>
  );
};

export default Graphs;

const styles = StyleSheet.create({
  wrapperStyle: {
    width: Dimensions.get("window").width - 160,
    // backgroundColor: "red",
  },

  textWrapper: {
    marginVertical: 30,
    width: Dimensions.get("window").width * 0.94,
    marginLeft: 10,
  },

  textStyling: {
    fontSize: 23,
    marginBottom: 10,
    color: COLORS.mainGreen,
  },

  textValue: {
    color: COLORS.darkGray,
    fontWeight: "600",
  },

  graphSubtitle: {
    color: COLORS.mediumGray,
    fontSize: 20,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.lightGreen,
    width: Dimensions.get("window").width * 0.94,
    paddingBottom: 5,
    marginBottom: 15,
  },
});
