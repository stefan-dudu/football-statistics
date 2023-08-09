import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OverviewTab = ({ data }) => {
  // console.log("data", data);
  return (
    <View>
      <Text>
        Prenume: <Text>{data.firstname}</Text>
      </Text>
      <Text>
        Nume: <Text>{data.lastname}</Text>
      </Text>
      <Text>
        Varsta: <Text>{data.age}</Text>
      </Text>
      <Text>
        Data nasterii: <Text>{data.birth.date}</Text>
      </Text>
      <Text>
        Locul nasterii:{" "}
        <Text>
          {data.birth.place}, {data.birth.country}
        </Text>
      </Text>
      <Text>
        Nationalitate: <Text>{data.nationality}</Text>
      </Text>
      <Text>
        Inaltime: <Text>{data.height}</Text>
      </Text>
      <Text>
        Greutate: <Text>{data.weight}</Text>
      </Text>
      <Text>
        Accidentat: <Text>{data.injured}</Text>
      </Text>
    </View>
  );
};

export default OverviewTab;

const styles = StyleSheet.create({});
