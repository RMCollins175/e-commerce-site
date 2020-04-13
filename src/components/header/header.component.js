import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import Crown from "../../assets/crown.png";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img src={Crown} style={styles}></img>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/contact" className="option">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link to="/signin" className="option">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;

const styles = {
  height: "35px",
  width: "35px",
};

