import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <a> Topics</a>
      <Link to="/articles"> Articles</Link>
      <a> Users</a>
    </nav>
  );
};

export default NavBar;
