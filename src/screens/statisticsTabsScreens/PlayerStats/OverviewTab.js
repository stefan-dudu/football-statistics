import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
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
      <View style={styles.rowWrapper}>
        <AntDesign name="idcard" size={24} color={COLORS.mainGreen} />
        <Text style={styles.textStyle}>
          Prenume : <Text style={styles.accentText}>{data.firstname}</Text>
        </Text>
      </View>
      <View style={styles.rowWrapper}>
        <AntDesign name="idcard" size={24} color={COLORS.mainGreen} />
        <Text style={styles.textStyle}>
          Nume: <Text style={styles.accentText}>{data.lastname}</Text>
        </Text>
      </View>
      <View style={styles.rowWrapper}>
        <Feather name="calendar" size={24} color={COLORS.mainGreen} />
        <Text style={styles.textStyle}>
          Varsta: <Text style={styles.accentText}>{data.age} ani</Text>
        </Text>
      </View>
      <View style={styles.rowWrapper}>
        <FontAwesome name="birthday-cake" size={24} color={COLORS.mainGreen} />
        <Text style={styles.textStyle}>
          Data nasterii:{" "}
          <Text style={styles.accentText}>{data.birth.date}</Text>
        </Text>
      </View>
      <View style={styles.rowWrapper}>
        <MaterialIcons name="place" size={24} color={COLORS.mainGreen} />
        <Text style={styles.textStyle}>
          Locul nasterii:{" "}
          <Text style={styles.accentText}>
            {data.birth.place}, {data.birth.country}
          </Text>
        </Text>
      </View>

      <View style={styles.rowWrapper}>
        <AntDesign name="flag" size={24} color={COLORS.mainGreen} />
        <Text style={styles.textStyle}>
          Nationalitate:{" "}
          <Text style={styles.accentText}>{data.nationality} </Text>
        </Text>
        <Image
          style={styles.teamLogoStyle}
          // source={require("../../../assets/teamLogo2.png")}
          source={{ uri: countryFlag }}
        />
      </View>
      <View style={styles.rowWrapper}>
        <MaterialIcons name="height" size={24} color={COLORS.mainGreen} />
        <Text style={styles.textStyle}>
          Inaltime: <Text style={styles.accentText}>{data.height}</Text>
        </Text>
      </View>
      <View style={styles.rowWrapper}>
        <FontAwesome5
          name="weight-hanging"
          size={24}
          color={COLORS.mainGreen}
        />
        <Text style={styles.textStyle}>
          Greutate: <Text style={styles.accentText}>{data.weight}</Text>
        </Text>
      </View>
    </View>
  );
};

export default OverviewTab;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "500",
    fontSize: 16,
    color: COLORS.mediumGray,
    marginLeft: 10,
    // marginBottom: 20,

    // backgroundColor: "lightgreen",
    // borderWidth: 2,
  },

  accentText: {
    color: "black",
    fontSize: 18,
  },

  teamLogoStyle: {
    width: 60,
    height: 50,
  },

  rowWrapper: {
    // backgroundColor: COLORS.lightGray,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    verticalAlign: "center",
    width: Dimensions.get("window").width * 0.92,
    borderWidth: 1,
    borderColor: COLORS.lightGreen,
    borderRadius: 16,
    marginVertical: 10,
    paddingVertical: 10,
    paddingLeft: 10,
  },
});
