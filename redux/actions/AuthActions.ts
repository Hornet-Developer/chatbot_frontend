import axios from "axios";

export const googleAuth = async (googleData: any) => {
  console.log("googleData: ", googleData);
  const res = await axios.post(
    "http://localhost:8080/api/auth/google",
    googleData
  );
  console.log(res.data);
};
