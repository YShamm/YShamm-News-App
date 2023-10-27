import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticleById, voteUpArticleById, voteDownArticleById } from "../api";

import Comments from "./Comments";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [articleVotes, setArticleVotes] = useState(0);

  const { article_id } = useParams(); //we get this from the path in app.jsx?

  const incVote = () => {
    setArticleVotes(articleVotes + 1);
    voteUpArticleById(article_id);
  };

  const decVote = () => {
    setArticleVotes(articleVotes - 1);
    voteDownArticleById(article_id);
  };

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      console.log(articleData, "log of DATA");
      setArticle(articleData);
      setIsLoading(false);
      setArticleVotes(articleData.article.votes);
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
          <img
            src={article.article.article_img_url}
            alt="supplementary image relating to the article"
          ></img>
          <p>
            Published: {article.article.created_at} | Votes: {articleVotes}
          </p>
          <p>{article.article.body}</p>
          <button onClick={incVote}>vote up</button>
          <button onClick={decVote}>vote up</button>

          <Comments article_id={article_id} />
        </div>
      </article>
    );
};

export default Article;
