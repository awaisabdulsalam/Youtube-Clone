import axios from "axios";

// const BASE_URL = "https://youtube-v31.p.rapidapi.com/captions";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  // url: BASE_URL,
  params: {
    maxResults: 50,
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    // "X-RapidAPI-Key": import.meta.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "fb48050225msh3f5842038f8dda4p1a780fjsnc088c148e3c4",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetachFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return "Chal Oye";
  }
};
