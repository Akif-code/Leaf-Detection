// import { Box } from "@mui/joy";
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/Auth/AuthProvider";

// function Navbar() {

//   const {isLoggedIn, signout} = useContext(AuthContext)

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
//         {isLoggedIn ? <><Link to="/home">Home</Link>
//         {/* <Link to="/auth">Signup/Login</Link> */}
//         <Link to="/predict">Prediction</Link>
//         <Link to="/about">About Us</Link>
//         <Link onClick={() => } >Logout</Link>
//         </> : <Link to="/auth" >Login / Signup</Link>}
        
//     </Box>
//   );
// }

// export default Navbar;

import React, { useContext } from 'react';
import { Box, Button, Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, LogOut, Home, Activity, Info,RefreshCcw } from 'lucide-react';
import { AuthContext } from '../context/Auth/AuthProvider';

const Navbar = ({reset}) => {
  const { isLoggedIn, signout } = useContext(AuthContext);
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const showReset = pathname === "/predict"

  const NavLink = ({ to, children, icon: Icon, onClick }) => (
    <Button
      component={Link}
      to={to}
      variant="plain"
      color="neutral"
      startDecorator={Icon && <Icon size={18} />}
      sx={{
        '&:hover': {
          bgcolor: 'background.level1',
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  if (!isLoggedIn) {
    return (
      <Button
        component={Link}
        to="/auth"
        variant="solid"
        color="success"
        startDecorator={<User size={18} />}
        sx={{
          boxShadow: 'sm',
        }}
      >
        Login / Signup
      </Button>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 1, md: 2 },
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
        <NavLink to="/home" icon={Home}>Home</NavLink>
        <NavLink to="/predict" icon={Activity}>Prediction</NavLink>
        <NavLink to="/about" icon={Info}>About Us</NavLink>
        {showReset && <NavLink onClick={reset} icon={RefreshCcw}>Reset</NavLink>}
      </Box>

      {/* Mobile Menu */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Dropdown>
          <MenuButton
            variant="outlined"
            color="neutral"
            sx={{ minWidth: 0, p: 1 }}
          >
            <User size={20} />
          </MenuButton>
          <Menu
            sx={{
              minWidth: 180,
              bgcolor: 'background.surface',
            }}
          >
            <MenuItem component={Link} to="/home">
              <Home size={18} />
              Home
            </MenuItem>
            <MenuItem component={Link} to="/predict">
              <Activity size={18} />
              Prediction
            </MenuItem>
            <MenuItem component={Link} to="/about">
              <Info size={18} />
              About Us
            </MenuItem>
           {showReset && <MenuItem component={Link} onClick={reset}>
              <RefreshCcw size={18} />
              Reset
            </MenuItem>}
            <MenuItem onClick={() => signout()}>
              <LogOut size={18} />
              Logout
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>

      {/* Desktop Logout Button */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => signout()}
          startDecorator={<LogOut size={18} />}
          sx={{
            '&:hover': {
              bgcolor: 'danger.softBg',
              borderColor: 'danger.outlinedBorder',
              color: 'danger.solidBg',
            },
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;