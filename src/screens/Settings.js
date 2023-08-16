import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import AccordionItem from "../components/AccordionItem";

const Settings = () => {
  const ExternalLink = (props) => {
    const { url, children, style = {} } = props;

    const onPress = () =>
      Linking.canOpenURL(url).then(() => {
        Linking.openURL(url);
      });

    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.textStyle, { color: "#32bf6f" }]}>{children}</Text>
      </TouchableOpacity>
    );
  };

  const openEmailApp = (emailAddress) => {
    const mailtoUrl = `mailto:${emailAddress}`;

    Linking.canOpenURL(mailtoUrl).then((supported) => {
      if (supported) {
        Linking.openURL(mailtoUrl);
      } else {
        console.log("Email app is not available");
      }
    });
  };

  const emailAddress = "stefan01dev@gmail.com";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <AccordionItem
            title="Despre aplicatie ℹ️"
            content={
              <Text style={styles.textStyle}>
                Salutare {"\n"} Ne bucuram sa vedem ca iti place aplicatia
                noastra. {"\n"} Acesta este un proiect independent, care se
                bazeaza pe sprijinul utilizatorilor ca tine ca sa sustina
                continuarea si imbunatatirea aplicatiei. {"\n"} Momentan,
                aceasta nu genereaza niciun profit si functioneaza din fonduri
                proprii.{"\n"} Sustinerea ta ne ajuta sa mentinem aplicatie si
                sa adaugam imbunatatiri.{"\n"} Vă mulțumim că sunteți alături de
                noi în această călătorie.
                {"\n"}{" "}
                <ExternalLink url="https://revolut.me/stefan01dev">
                  Apasa aici pentru a ne face cinste cu o cafea ☕
                </ExternalLink>
              </Text>
            }
          />
          <AccordionItem
            title="Idei pentru implementare viitoare 📃"
            content={
              <Text style={styles.textStyle}>
                • Liga feminina de fotbal {"\n"}• Meciurile jucate ale unei
                echipe
                {"\n"}• Transferuri echipa/jucator {"\n"}• Evolutie echipa in
                campionat
                {"\n"}• Statistici antrenor {"\n"}• Palmares jucator/echipa{" "}
                {"\n"}• Selectare echipa favorita + notificari meci/gol {"\n"}•
                Statistici pentru meciuri viitoare {"\n"}• Sanse de victorie
                (cota){"\n"}• Asezare in teren
              </Text>
            }
          />
          <AccordionItem
            title="Idei? Probleme? 💡"
            // content="Pentru orice idee sau problema trimte-mi un email la "
            content={
              <View>
                <Text style={styles.textStyle}>
                  Pentru orice idee sau problema trimte-mi un email la{" "}
                  <TouchableOpacity onPress={() => openEmailApp(emailAddress)}>
                    <Text
                      style={{
                        color: "blue",
                        textDecorationLine: "underline",
                        fontSize: 16,
                      }}
                    >
                      {emailAddress}
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            }
          />
          <AccordionItem
            title="Cum functioneaza rating jucatorilor? 🏅"
            content={
              <Text style={styles.textStyle}>
                {" "}
                Rating-ul unui jucator face referire la prestatia acestuia in
                timpului unui meci sau a unui intreg sezon. In prezent doar
                ultima optiune este disponibila in meniul Statisctis.{"\n"}{" "}
                Acest rating este calculat in functie de performata jucatorului
                comparat cu alti jucatori de pe acceasi pozitie (Atacant,
                fundas, etc..).{"\n"} Diversi algoritmi sunt luati in calcul
                pentru stabilitirea ratingului.
              </Text>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 24,
  },
});
