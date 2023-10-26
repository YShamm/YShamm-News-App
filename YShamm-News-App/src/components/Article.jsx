import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticleById } from "../api";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      console.log(article, "log of DATA");
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else
    return (
      <article>
        <div className="article-container">
          <h3>{article.article.title}</h3>
          <p>
            Topic: {article.article.topic} | Author: {article.article.author}
          </p>
          <img src={article.article.article_img_url}></img>
          <p>Published: {article.article.created_at}</p>
          <p>{article.article.body}</p>
        </div>
      </article>
    );
};

export default Article;
