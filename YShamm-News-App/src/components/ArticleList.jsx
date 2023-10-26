import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllArticles } from "../api";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getAllArticles().then((articleListData) => {
      //console.log(articleList, "log of DATA");
      setArticleList(articleListData);
    });
  }, []);

  return (
    <article>
      <div className="list-container">
        {articleList.map((article) => {
          return (
            <div key={article.article_id} className="article-card">
              <img className="article-img" src={article.article_img_url}></img>
              <div className="article-info">
                <Link to={`/articles/${article.article_id}`}>
                  <h2>{article.title}</h2>{" "}
                </Link>
                <p>Topic: {article.topic}</p>
                <p>by {article.author}</p>
              </div>
            </div>
          ); //make the topic be a link to topic page
        })}
      </div>
    </article>
  );
};

export default ArticleList;
//if there is time; add featured articles on welcome page.
