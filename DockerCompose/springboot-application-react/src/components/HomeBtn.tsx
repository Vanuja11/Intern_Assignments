import React from "react";
import { Link } from "react-router-dom";

const HomeBtn = () => {
  return (
    <div >
      <Link to={"/home"}>
        <button className="Home-btn">
            Home
        </button>
      </Link>
    </div>
  );
};

export default HomeBtn;
