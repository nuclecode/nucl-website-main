import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, useMediaQuery, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as Logo } from '../logo-website.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)'); // Determine if the viewport is mobile
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = (route) => {
    navigate(route);
    setMenuOpen(false); // Close the menu after clicking a button on mobile
  };

  return (
    <AppBar position="fixed" color="default">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">
          <Logo style={{ height: 40, width: 'auto' }} />
        </Typography>
        {isMobile ? (
          <>
            <IconButton onClick={toggleMenu} color="inherit" sx={{ ml: 'auto' }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={null}
              open={menuOpen}
              onClose={toggleMenu}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={() => handleButtonClick('/')}>Home</MenuItem>
              <MenuItem onClick={() => handleButtonClick('/portfolio')}>Portfolio</MenuItem>
              <MenuItem onClick={() => handleButtonClick('/solutions')}>Solutions</MenuItem>
              <MenuItem onClick={() => handleButtonClick('/about')}>About us</MenuItem>
              <MenuItem onClick={() => handleButtonClick('/contact')}>Contact us</MenuItem>
              <MenuItem onClick={() => handleButtonClick('/start-a-project')}>
                Start a project
              </MenuItem>
              <MenuItem onClick={() => handleButtonClick('/schedule-a-call')}>
                Book a Chat
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <div>
              <Button onClick={() => handleButtonClick('/')} color="inherit" sx={{ mx: 2 }}>
                Home
              </Button>
              <Button onClick={() => handleButtonClick('/portfolio')} color="inherit" sx={{ mx: 2 }}>
                Portfolio
              </Button>
              <Button onClick={() => handleButtonClick('/solutions')} color="inherit" sx={{ mx: 2 }}>
                Solutions
              </Button>
              <Button onClick={() => handleButtonClick('/about')} color="inherit" sx={{ mx: 2 }}>
                About us
              </Button>
              <Button onClick={() => handleButtonClick('/contact')} color="inherit" sx={{ mx: 2 }}>
                Contact us
              </Button>
            </div>
            <div>
              <Button
                onClick={() => handleButtonClick('/start-a-project')}
                color="inherit"
                variant="contained"
                sx={{ mx: 2 }}
              >
                Start a project
              </Button>
              <Button
                onClick={() => handleButtonClick('/schedule-a-call')}
                color="inherit"
                variant="contained"
                sx={{ mx: 2 }}
              >
                Book a Chat
              </Button>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;




//START OF WORKING NAVIG COMPONENT
// import React, { useState } from 'react';
// import './Navbar.css'; 
// import { Link } from 'react-router-dom';


// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const isMobile = useMediaQuery('(max-width:768px)');

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">Logo</div>
//         <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
//           <div className="navbar-links-mobile">
//             <button className="menu-icon" onClick={toggleMenu}>
//               {menuOpen ? '✕' : '☰'}
//             </button>
//             {menuOpen && (
                
//               <div className="menu-dropdown">
//                 <Link to="/">Home</Link>
//                 <Link to="/portfolio">Portfolio</Link>
//                 <Link to="/solutions">Solutions</Link>
//                 <Link to="/about">About us</Link>
//                 <Link to="/contact">Contact us</Link>
//                 <Link to="/start-a-project" className="cta-button">Start a project</Link>
//                 <Link to="/schedule-a-call" className="cta-button">Book a Chat</Link>
//               </div> 
//             )}
//           </div>
//           <div className="navbar-links-desktop">
//                 <Link to="/">Home</Link>
//                 <Link to="/portfolio">Portfolio</Link>
//                 <Link to="/solutions">Solutions</Link>
//                 <Link to="/about">About us</Link>
//                 <Link to="/contact">Contact us</Link>
//           </div>
//         </div>
//         <div className="navbar-buttons">
//                 <Link to="/start-a-project" className="cta-button">Start a project</Link>
//                 <Link to="/schedule-a-call" className="cta-button">Chat with Viola</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
