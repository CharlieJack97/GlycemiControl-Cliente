import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Button } from "@chakra-ui/react";

const Navbar = (props) => {
  
  return (
    <nav>
       <div className="logo"><a href="/" title="Home"><img src="./logo2.png"/></a></div>
       <div>
         <ColorModeSwitcher colorScheme='red' className="iconTheme"/>
         <Link to={'/'} className="authLink">
          <Button colorScheme='red' variant='ghost'>
            Home
          </Button>
         </Link>
         <Link to={'/about'} className="authLink">
          <Button colorScheme='red' variant='ghost'>
            MyIllness
          </Button>
         </Link>
         {props.user ? (
           <>
             <Link to={'/tracing'} className="authLink">
              <Button colorScheme='red' variant='ghost'>
                Tracking
              </Button>
             </Link>
              <Button className="nav-btn" onClick={props.handleLogout}>
                Logout
              </Button>
           </>
         ) : (
           <>
             <Link to={'/auth/signup'} className="authLink">
              <Button colorScheme='red' variant='ghost'>
                Signup
              </Button>
             </Link>
             <Link to={'/auth/login'} className="authLink">
              <Button colorScheme='red' variant='ghost'>
                Log In
              </Button>
             </Link>
           </>
         )}
       </div>
    </nav>
  );
};

export default Navbar;

