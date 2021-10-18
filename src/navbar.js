import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <h1>StreamNow</h1>
        </div>
      </Link>
      <nav>
        <ul>
          <Link to="/movies">
            <li>Movies</li>
          </Link>
          <li>Series</li>
          <li>Trending</li>
        </ul>
      </nav>
    </header>
  );
};
const Searchform = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        name="query"
        id="query"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};
export default Navbar;
