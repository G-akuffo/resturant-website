import React from "react";

const Header = () => {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>it's a great time for a good taste of burger</h3>
        <h1>
          <span>burger</span> for <br /> weeks
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
