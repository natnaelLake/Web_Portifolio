import axios from "axios";

export const getProfileDataAPI = async () =>
  await axios.get("https://my-web-portifolio-back-end.onrender.com/getData");
export const postProfileDataAPI = async (sendFile) => {
  const data = await axios.post(
    "https://my-web-portifolio-back-end.onrender.com/addData",
    sendFile
  );
  return data;
};
export const deleteProfileDataAPI = async (id) =>
  axios.delete(
    "https://my-web-portifolio-back-end.onrender.com/deleteData/" + id
  );
export const updateProfileDataAPI = async (id) =>
  axios.patch(
    "https://my-web-portifolio-back-end.onrender.com/updateData/" + id
  );
export const LoginAPI = async (sendFile) => {
    console.log(sendFile)
  const { data } = await axios.post(
    "http://localhost:5500/login",
    sendFile
  );
  console.log('data in api',data)
  return data;
};
