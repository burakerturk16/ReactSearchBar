import React from "react";

const List = props => {
  return (
    <div className="ui middle aligned divided medium list main-div">
      <div className="item">
    
        <img
          className="ui avatar image"
          src={props.imageUrl}
          alt={props.name}
        />
        <div className="content">{props.name}</div>
      </div>
    </div>
  );
};

export default List;
