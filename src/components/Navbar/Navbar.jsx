import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

const Navbar = (props) => {
  
  return (
    <nav>
       <Box className="logo"><Link to="/" title="Home"><img src="./logo2.png"/></Link></Box>
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
       
          
        {props.user ?(
          <>
          <Link to={'/tracing'} className='authLink'>
              <Button colorScheme='red' variant='ghost'>
                Tracing
              </Button>
             </Link>
            <Menu>
              <MenuButton className="authLink" as={Button} colorScheme='red'>
                {props.user?.username}
              </MenuButton>
              <MenuList>
                  <MenuItem><button onClick={props.handleLogout}>Logout</button></MenuItem>
              </MenuList>
            </Menu>
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

