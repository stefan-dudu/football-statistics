import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PlayerStatsTab = ({ data }) => {
  // console.log("data", data);
  return (
    <View>
      <View>
        <Text>Meciuri</Text>
        <Text>
          Jucate: <Text>{data[0].games.appearences}</Text>
        </Text>
        <Text>
          Minute: <Text>{data[0].games.minutes}</Text>
        </Text>
        <Text>
          Pozitie: <Text>{data[0].games.position}</Text>
        </Text>
        <Text>
          Rating: <Text>{data[0].games.rating}</Text>
        </Text>
      </View>
      <View>
        <Text>Goluri</Text>
        <Text>
          Marcate: <Text>{data[0].goals.total}</Text>
        </Text>
        <Text>
          Assisturi: <Text>{data[0].games.assists}</Text>
        </Text>
      </View>
    </View>
  );
};

export default PlayerStatsTab;

const styles = StyleSheet.create({});
