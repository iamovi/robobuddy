import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="SearchDiv">
      <input type="search" placeholder="Search robots.." className="Searchinput" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;
