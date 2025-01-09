import axios from "axios";

export const fetchUser = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  console.log(response.data);
  return response.data;
};
