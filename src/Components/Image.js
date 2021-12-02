import React from "react";

function Image({ pic }) {
  return (
        <div className="columns is-centered">
            <img className="column is-three-quarters" src={pic} alt='Mexican breakfast' width="400" height="600"/>
        </div>
  );
}

export default Image;