import axios from "axios";

export const sendRequestAxios = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
