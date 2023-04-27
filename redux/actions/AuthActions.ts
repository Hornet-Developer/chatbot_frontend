import { AnyAction } from "redux";
import { GET_BOT_SETTING, SET_BOT_SETTING } from "./actiontypes";
import axios from "axios";

export const googleAuth = (googleData: any) => {
  console.log("googleData: ", googleData);
  return axios.post(
    "http://localhost:8080/api/auth/google",
    googleData.tokenId
  );
};
