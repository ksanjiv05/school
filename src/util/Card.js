import React from "react";
//
const Card = ({ title, value, backgroundColor, color }) => {
  console.log("hii", title);
  return (
    <div
      className="scard"
      style={{ backgroundColor: backgroundColor, color: color }}>
      <div className="scard-header">{title}</div>
      <div className="scard-body">{value}</div>
      <div className="card-footer">
        <a href="#">
          <span class="glyphicon glyphicon-forward"></span>
        </a>
      </div>
    </div>
  );
};

export default Card;
