import axios from "axios";

export const getSetting = (chatbot_id: string) => {
  return axios.get(`http://localhost:8080/api/setting/get/${chatbot_id}`);
};

export const updateSetting = (settingData: any) => {
  return axios.post("http://localhost:8080/api/setting/update", settingData);
};

export const createSetting = (settingData: any) => {
  return axios.post("http://localhost:8080/api/setting/create", settingData);
};

export const getChatbotList = (sendData: any) => {
  return axios.post("http://localhost:8080/api/setting/getChatList", sendData);
};
