import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { getCommentsById } from "../api";

const Comments = (article_id) => {
  const id = article_id.article_id;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   const { article_id } = useParams();

  useEffect(() => {
    getCommentsById(id).then((commentsData) => {
      //console.log(comments, "log of DATA");
      setComments(commentsData);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else console.log(comments, "log of COMMENTS");
  return (
    <article>
      <div className="comments-container">
        <h2>Comments:</h2>
        {comments.comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="comment-card">
              {/* import user data to add commenter avatar */}
              <p>
                {comment.author}:{comment.body}
              </p>
              <p>
                Votes:{comment.votes} | Posted:{comment.created_at}
              </p>
              {/* <img className="article-img" src={article.article_img_url}></img>
              <div className="article-info">
                <Link to={`/articles/${article.article_id}`}>
                  <h2>{article.title}</h2>{" "}
                </Link>
                <p>Topic: {article.topic}</p>
                <p>by {article.author}</p>
              </div> */}
            </div>
          ); //make the topic be a link to topic page
        })}
      </div>
    </article>
  );
};

export default Comments;
//if there is time; add featured articles on welcome page.
