import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticleById, voteUpArticleById, voteDownArticleById } from "../api";

import Comments from "./Comments";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [articleVotes, setArticleVotes] = useState(0);
  const [voteUpDisabled, setVoteUpDisabled] = useState(false);
  const [voteDownDisabled, setVoteDownDisabled] = useState(false);

  const { article_id } = useParams(); //we get this from the path in app.jsx?

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      console.log(articleData, "log of DATA");
      setArticle(articleData);
      setArticleVotes(articleData.article.votes);
      setIsLoading(false);
    });
  }, [article_id]);

  const incVote = () => {
    if (!voteDownDisabled) {
      setArticleVotes(articleVotes + 1);
      voteUpArticleById(article_id);
      setVoteUpDisabled(true);
      setVoteDownDisabled(false);
    } else {
      setArticleVotes(articleVotes + 2);
      voteUpArticleById(article_id);
      voteUpArticleById(article_id);
      setVoteUpDisabled(true);
      setVoteDownDisabled(false);
    }
  };

  const decVote = () => {
    if (!voteUpDisabled) {
      setArticleVotes(articleVotes - 1);
      voteDownArticleById(article_id);
      setVoteUpDisabled(false);
      setVoteDownDisabled(true);
    } else {
      setArticleVotes(articleVotes - 2);
      voteDownArticleById(article_id);
      voteDownArticleById(article_id);
      setVoteUpDisabled(false);
      setVoteDownDisabled(true);
    }
  };

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
          <button onClick={incVote} disabled={voteUpDisabled}>
            vote up
          </button>
          <button onClick={decVote} disabled={voteDownDisabled}>
            vote down
          </button>

          <Comments article_id={article_id} />
        </div>
      </article>
    );
};

export default Article;
