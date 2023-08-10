import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../utils/colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const OverviewTab = ({ data }) => {
  // console.log("data", data.nationality);
  const [countryFlag, setCountryFlag] = useState(null);
  // console.log("countryFlag", countryFlag);

  fetch(`https://restcountries.com/v3.1/name/${data.nationality}`)
    .then((response) => response.json())
    .then((data) => {
      const isoCode = data[0]?.cca2;
      if (isoCode) {
        const flagImage = `https://flagsapi.com/${isoCode}/flat/64.png`;
        setCountryFlag(flagImage);
      } else {
        console.log("ISO code not found for the given country name.");
      }
    })
    .catch((error) => console.error("Error fetching data:", error));

  return (
    <View>
      <Text style={styles.textStyle}>
        <AntDesign name="idcard" size={24} /> Prenume :{" "}
        <Text style={styles.accentText}>{data.firstname}</Text>
      </Text>
      <Text style={styles.textStyle}>
        <AntDesign name="idcard" size={24} /> Nume:{" "}
        <Text style={styles.accentText}>{data.lastname}</Text>
      </Text>
      <Text style={styles.textStyle}>
        <Feather name="calendar" size={24} /> Varsta:{" "}
        <Text style={styles.accentText}>{data.age} ani</Text>
      </Text>
      <Text style={styles.textStyle}>
        <FontAwesome name="birthday-cake" size={24} /> Data nasterii:{" "}
        <Text style={styles.accentText}>{data.birth.date}</Text>
      </Text>
      <Text style={styles.textStyle}>
        <MaterialIcons name="place" size={24} /> Locul nasterii:{" "}
        <Text style={styles.accentText}>
          {data.birth.place}, {data.birth.country}
        </Text>
      </Text>

      <View style={styles.nationalitateWrapper}>
        <Text style={styles.textStyle}>
          <AntDesign name="flag" size={24} /> Nationalitate:{" "}
          <Text style={styles.accentText}>{data.nationality} </Text>
        </Text>
        <Image
          style={styles.teamLogoStyle}
          // source={require("../../../assets/teamLogo2.png")}
          source={{ uri: countryFlag }}
        />
      </View>

      <Text style={styles.textStyle}>
        <MaterialIcons name="height" size={24} /> Inaltime:{" "}
        <Text style={styles.accentText}>{data.height}</Text>
      </Text>
      <Text style={styles.textStyle}>
        <FontAwesome5 name="weight-hanging" size={24} /> Greutate:{" "}
        <Text style={styles.accentText}>{data.weight}</Text>
      </Text>
      {/* <Text style={styles.textStyle}>
        Accidentat: <Text style={styles.accentText}>{data.injured}</Text>
      </Text> */}
    </View>
  );
};

export default OverviewTab;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "500",
    fontSize: 16,
    color: COLORS.mediumGray,
    marginLeft: 5,
    // marginBottom: 20,
    paddingVertical: 10,
    // backgroundColor: "lightgreen",
  },

  accentText: {
    color: "black",
    fontSize: 18,
  },

  teamLogoStyle: {
    width: 60,
    height: 50,
  },

  nationalitateWrapper: {
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    verticalAlign: "center",
  },
});
