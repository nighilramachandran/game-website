import axios from "axios";

// bdb97f6322864cbb9c55e57aa68b2c2e

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  // headers: {
  //   "api-key": "bdb97f6322864cbb9c55e57aa68b2c2e",
  // },
  params: {
    key: "bdb97f6322864cbb9c55e57aa68b2c2e",
  },
});
