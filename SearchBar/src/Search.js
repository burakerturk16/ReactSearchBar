import React from "react";

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          value={props.contactsValue}
          onChange={props.onChangeHandler}
          className="prompt"
          type="text"
          placeholder="Search"
        />
        <i className="search icon" />
      </div>
      <div className="results" />
    </div>
  );
};

export default Search;
