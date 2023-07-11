import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import apiSports from "../api/api-sports";

const Home = () => {
  const [data, setData] = useState([]);

  const getStandings = async () => {
    try {
      const response = await apiSports.get("/standings", {
        params: {
          league: 283,
          season: 2022,
        },
      });
      console.log("response", response.data.response[0].league.standings[2]);
      setData(response.data.response[0].league.standings[2]);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  useEffect(() => {
    //Runs only on the first render
    getStandings();
  }, []);

  const demo = [
    { name: "Angel", age: 2 },
    { name: "bravo", age: 23 },
    { name: "charlie", age: 53 },
  ];

  // console.log("data", data);

  const mappedData = demo.map((el) => <Text>{el.name}</Text>);

  const mappeData2 =
    data.length > 0 && data.map((el) => <Text>{el.team.name}</Text>);

  // console.log(mappeData2);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home! x</Text>
      <Text>{data.country}</Text>
      {/* {mappedData} */}
      {mappeData2}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
