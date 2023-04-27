import { AnyAction } from "redux";
import { GET_BOT_SETTING, SET_BOT_SETTING } from "./actiontypes";
import axios from "axios";
import Chatbot from "@/pages/chatbot";

export const getSetting = (chatbot_id: string) => {
  return axios.get(`http://localhost:8080/api/setting/get/${chatbot_id}`);
};

export const updateSetting = (settingData: any) => (dispatch: AnyAction) => {
  return axios.post("http://localhost:8080/api/setting/update", settingData);
};

export const createSetting = (settingData: any) => {
  return axios.post("http://localhost:8080/api/setting/create", settingData);
};
