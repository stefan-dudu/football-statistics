import axios from "axios";

export default axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": process.env.API_KEY,
  },
});
