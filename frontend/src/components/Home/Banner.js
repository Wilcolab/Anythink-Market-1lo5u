import React from "react";
import logo from "../../imgs/logo.png";
import { SearchBox } from "./SearchBox";

const Banner = ({onSearch}) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="home-search">
          <span>A place to get </span>
          <SearchBox onSearch={onSearch}/>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
