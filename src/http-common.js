import axios from "axios";

export default axios.create({
  baseURL: "https://account-wallet-backend.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});