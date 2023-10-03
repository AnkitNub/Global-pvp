import React, { useState } from "react";
import "./items.css";

const Items = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="item">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="data">
          <img
            src={props.data.img}
            alt={props.data.Name}
            className={isShown ? "show" : ""}
          />
          <h3>{props.data.Name}</h3>
          {isShown && <p className="imp">{props.data.description} </p>}
        </div>
      </button>
    </div>
  );
};

export default Items;
