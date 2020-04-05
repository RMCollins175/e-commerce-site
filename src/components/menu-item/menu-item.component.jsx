import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const Menuitem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  console.log(match);
  console.log(linkUrl);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`shop${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(Menuitem);
// by wrapping like this, it will return us back a Menuitem component with access to location and history props
// that we would have otherwise had to prop drill from menu-item's parent component, in this case, homepage
