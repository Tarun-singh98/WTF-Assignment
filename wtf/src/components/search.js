import React from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div className="search-outer-wrapper">
      <div className="search-inner-wrapper">
        <div className="search-bar">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search in GYMS" size="" />
        </div>
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
}

export default Search;
