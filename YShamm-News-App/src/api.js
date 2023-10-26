import axios from "axios";

const request = axios.create({
  baseURL: "https://shamm-news-api.onrender.com/",
});

export const getAllArticles = () => {
  return request.get("api/articles").then((response) => {
    console.log(response, "response");
    return response.data;
  });
};
