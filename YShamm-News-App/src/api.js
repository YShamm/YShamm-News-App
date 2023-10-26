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

export const getArticleById = (article_id) => {
  return request.get(`api/articles/${article_id}`).then((response) => {
    console.log(response, "log of res");
    return response.data;
  });
};
//is :article_id just a back end thing?

export const getCommentsById = (article_id) => {
  return request.get(`api/articles/${article_id}/comments`).then((response) => {
    // console.log(response, "log of Comments res");
    return response.data;
  });
};
