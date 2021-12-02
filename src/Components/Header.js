import React from "react";

function Header({ header }) {
  return (
    <div>
      <h1 className="title is-1">{header}</h1>
    </div>
  );
}

export default Header;