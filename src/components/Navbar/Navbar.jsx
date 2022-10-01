import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Navbar = (props) => {
  return (
    <nav>
       <div className="logo"><a href="/" title="Home"><img src="./images/logo2.png"/></a></div>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
         
          
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
            <ColorModeSwitcher/>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

