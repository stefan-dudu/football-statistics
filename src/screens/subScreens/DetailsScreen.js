import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DetailedTabs from "./DetailedTabs";
import CustomSwitch from "../../components/CustomSwitch";

const DetailsScreen = (params) => {
  const [detailsTab, setDetailsTab] = useState(1);

  // console.log("params", params.route.params.fixtureData);
  const parameters = params?.route?.params.fixtureData;
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
        option1={"free"}
        option2={"paid"}
        onSelectSwitch={onSelectSwitch}
      />

      {detailsTab == 1 && <Text>1st tab</Text>}
      {detailsTab == 2 && <Text>2nd tab</Text>}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
