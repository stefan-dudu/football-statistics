import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";

const LimitExplained = () => {
  const ExternalLink = (props) => {
    const { url, children, style = {} } = props;

    const onPress = () =>
      Linking.canOpenURL(url).then(() => {
        Linking.openURL(url);
      });

    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.textStyle, { color: COLORS.mainGreen }]}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.parentWrapper}>
      <Text style={styles.textStyle}>
        Salutare {"\n"}
        Ne bucuram sa vedem ca iti place aplicatia noastra. {"\n"}
        Acesta este un proiect independent, care se bazeaza pe sprijinul
        utilizatorilor ca tine ca sa sustina continuarea si imbunatatirea
        aplicatiei. {"\n"}
        Sustinerea ta ne ajuta sa crestem si sa iti oferim o experienta cat mai
        buna.{"\n"}
        Vă mulțumim că sunteți alături de noi în această călătorie.{"\n"}
        <ExternalLink url="https://revolut.me/stefan01dev">
          Apasa aici ne poti face cinste cu o cafea ☕
        </ExternalLink>
      </Text>
    </View>
  );
};

export default LimitExplained;

const styles = StyleSheet.create({
  parentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    // backgroundColor: "pink",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 200,
    paddingHorizontal: 30,
  },

  textStyle: {
    fontSize: 16,
    lineHeight: 24,
  },
});
