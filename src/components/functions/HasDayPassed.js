import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HasDayPassed = async () => {
  try {
    const lastApiCallTimestamp = await AsyncStorage.getItem(
      "lastApiCallTimestamp"
    );
    // console.log("lastApiCallTimestamp x", lastApiCallTimestamp);
    console.log("test");
    if (!lastApiCallTimestamp) {
      // First time API call, or timestamp cleared
      return true;
    }

    const currentTime = new Date().getTime();
    const lastCallTime = parseInt(lastApiCallTimestamp, 10);
    const millisecondsInADay = 24 * 60 * 60 * 1000;
console.log('lastCallTime', lastCallTime)
    return currentTime - lastCallTime >= millisecondsInADay;
  } catch (error) {
    console.error("Error reading timestamp:", error);
    return false;
  }
};

export default HasDayPassed;

const styles = StyleSheet.create({});
