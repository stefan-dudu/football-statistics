import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DetailedTabs from "./DetailedTabs";
import CustomSwitch from "../../components/CustomSwitch";

const DetailsScreen = (params) => {
  const [detailsTab, setDetailsTab] = useState(1);

  // console.log("params", params.route.params.fixtureData);
  const parameters = params?.route?.params?.fixtureData;
  const competition = parameters?.league?.name;
  const round = parameters?.league?.round;
  const score = (
    <Text>
      {parameters?.teams?.home.name} {parameters?.goals?.home} :{" "}
      {parameters?.goals?.away} {parameters?.teams?.away.name}
    </Text>
  );

  const onSelectSwitch = (value) => {
    setDetailsTab(value);
  };

  return (
    <View>
      <Text>DetailsScreen</Text>
      <Text>{competition}</Text>
      <Text>Round: {round}</Text>
      {score}
      <CustomSwitch
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
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
