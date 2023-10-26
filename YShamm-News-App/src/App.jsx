// import { useState } from "react";
import "./App.css";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router-dom";

import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
// import Comments from "./components/Comments";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<Article />} />
        {/* <Route
          path="api/articles/:article_id/comments"
          element={<Comments />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
