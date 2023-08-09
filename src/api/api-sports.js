import axios from "axios";

export default axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": "13e62d9b05d6a2943e4605b902033228",
    // "x-apisports-key": "e556890211869fc7dd70cff32efb8e09",
  },
});
