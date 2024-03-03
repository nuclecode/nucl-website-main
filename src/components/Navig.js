import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, useMediaQuery, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as Logo } from '../logo-website.svg';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; 


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)'); // Determine if the viewport is mobile
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = (route) => {
    navigate(route);
    setMenuOpen(false);
  };


  return (
    <AppBar position="fixed" color="default">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography>
          <Button component="a" href="/" color="inherit">
          <Logo style={{ height: 40, width: 'auto' }} />
          </Button>
        </Typography>
{/* BEGINNING OF MOBILE BURGER MENU */}
        {isMobile ? (
          <>
            <IconButton onClick={toggleMenu} color="inherit" sx={{ ml: 'auto' }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={null}
              open={menuOpen}
              onClose={toggleMenu}
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }} 
              transformOrigin={{ vertical: 'top', horizontal: 'left' }} 
              sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 'auto' } }}
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
              <Button onClick={() => handleButtonClick('/')} color="inherit" sx={{ mx: 2, textTransform: 'capitalize' }}>
                Home
              </Button>
              <Button onClick={() => handleButtonClick('/portfolio')} color="inherit" sx={{ mx: 2, textTransform: 'capitalize' }}>
                Portfolio
              </Button>
              <Button onClick={() => handleButtonClick('/solutions')} color="inherit" sx={{ mx: 2, textTransform: 'capitalize' }}>
                Solutions
              </Button>
              <Button onClick={() => handleButtonClick('/about')} color="inherit" sx={{ mx: 2, textTransform: 'capitalize' }}>
                About us
              </Button>
              <Button onClick={() => handleButtonClick('/contact')} color="inherit" sx={{ mx: 2, textTransform: 'capitalize' }}>
                Contact us
              </Button>
            </div>
            <div>
              <Button
                onClick={() => handleButtonClick('/start-a-project')}
                color="inherit"
                variant="outlined" // Set the variant to outlined
                sx={{ mx: 2, borderColor: 'pink', textTransform: 'capitalize' }} // Set the border color to pink
              >
                Start a project
              </Button>
              <Button
                onClick={() => handleButtonClick('/schedule-a-call')}
                color="inherit"
                variant="outlined" // Set the variant to outlined
                sx={{ mx: 2, borderColor: 'pink', textTransform: 'capitalize' }} // Set the border color to pink
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


//START OF INTERESTING NAVBAR
// import React from "react";
// import { Link } from 'react-router-dom';
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";

// import {
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Menu,
// } from "@mui/material";

// import Slide from "@mui/material/Slide";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import CssBaseline from "@mui/material/CssBaseline";
// import { ReactComponent as Logo } from '../logo-website.svg';


// function HideOnScroll(props){
//   const { children } = props;
//   const trigger =useScrollTrigger();
  
//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// function ResponsiveAppBar(props) {
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const theme = useTheme();
//   console.log(theme);
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(isMatch);

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <HideOnScroll {...props}>
//         <AppBar
//           className="navbar1"
//           style={{
//             width: "93.5%",
//             right: "3.2%",
//             border: "2px solid white",
//             borderRadius: "30px",
//             background:
//               "#fff",
//           }}
//         >
//           <Container maxWidth="xl">
//             <Toolbar disableGutters>
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="a"
//                 href="/"
//                 sx={{
//                   mr: 2,
//                   display: { xs: "none", md: "flex" },
//                   fontFamily: "monospace",
//                   fontWeight: 700,
//                   letterSpacing: ".3rem",
//                   color: "000",
//                   textDecoration: "none",
//                 }}
//                 className="cursorp"
//               >
//                 <Logo
//                   sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
//                   className="cursorp Tab8 animate__animated animate__backInLeft"
//                 >
//                   <img
//                     src={Logo}
//                     style={{ width: "100%", height: "auto" }}
//                     alt="Logo"
//                     width={100}
//                     height={100}
//                     loading="lazy"
//                   />
//                   </Logo>
//               </Typography>

//               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//                 <IconButton
//                   size="large"
//                   aria-label="account of current user"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleOpenNavMenu}
//                   color="inherit"
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </Box>

//               <Typography
//                 variant="h5"
//                 noWrap
//                 component="a"
//                 href=""
//                 sx={{
//                   mr: 2,
//                   display: { xs: "flex", md: "none" },
//                   flexGrow: 1,
//                   fontFamily: "monospace",
//                   fontWeight: 700,
//                   letterSpacing: ".3rem",
//                   color: "inherit",
//                   textDecoration: "none",
//                 }}
//               >
//                 {" "}
//                 <Logo
//                   // alt="logo"
//                   // src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.preserve_transparency.progressive.sprite/v1693672396/logo_1_lk0neo.webp"
//                   sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
//                 >
//                   <img
//                     src={Logo}
//                     style={{ width: "100%", height: "auto" }}
//                     alt="Logo"
//                     width={100}
//                     height={100}
//                     loading="lazy"
//                   />
//                 </Logo>
//               </Typography>
//               <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//                 {isMatch ? (
//                   <IconButton
//                     size="large"
//                     aria-label="account of current user"
//                     aria-controls="menu-appbar"
//                     aria-haspopup="true"
//                     onClick={handleOpenNavMenu}
//                     color="inherit"
//                   >
//                     <MenuIcon />
//                   </IconButton>
//                 ) : (
//                   <>
//                     <Tabs centered sx={{ margin: "auto" }}>
//                       <Tab
//                         label={
//                           <p>
//                             Solutions
//                           </p>
//                         }
//                         onClick={() => {
//                           window.location.href = "/solutions";
//                         }}
//                         style={{
//                           textDecoration: "none",
//                           color: "#000",
//                         }}
//                         className="Tab1 animate__animated animate__zoomIn"
//                       />

//                       <Tab
//                         label={
//                           <p>
//                             Portfolio
//                           </p>
//                         }
//                         onClick={() => {
//                           window.location.href = "/portfolio";
//                         }}
//                         style={{
//                           textDecoration: "none",
//                           color: "#000",
//                         }}
//                         className="Tab2 animate__animated animate__zoomIn"
                  
//                       >
//                         {" "}
//                       </Tab>

//                       <Tab
//                         label={
//                           <p>
//                             About
//                           </p>
//                         }
//                         onClick={() => {
//                           window.location.href = "/about";
//                         }}
//                         style={{
//                           textDecoration: "none",
//                           color: "#000",
//                         }}
//                         className="Tab3 animate__animated animate__zoomIn"
//                       />

//                       <Tab
//                         label={
//                           <p>
//                             Contact
//                           </p>
//                         }
//                         onClick={() => {
//                           window.location.href = "/contact";
//                         }}
//                         style={{
//                           textDecoration: "none",
//                           color: "#000",
//                         }}
//                         className="Tab4 animate__animated animate__zoomIn"
//                       />
//                     </Tabs>
//                   </>
//                 )}
//               </Box>

//               <Box sx={{ flexGrow: 0 }}>
//                 <Menu
//                   id="menu-appbar-avatar"
//                   anchorEl={anchorElNav}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "left",
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: "top", // Adjust to match the new position
//                     horizontal: "right",
//                   }}
//                   open={Boolean(anchorElNav)}
//                   onClose={handleCloseNavMenu}
//                   sx={{
//                     display: { xs: "block", md: "none" },
//                   }}
//                 >
//                   {/* <Drawer
//                     open={isDrawerOpen}
//                     onClose={() => setIsDrawerOpen(false)}
//                   > */}
//                   <List className="DrawerList">
//                     <ListItemButton>
//                       <ListItemText
//                         primary={"Solutions"}
//                         onClick={() => {
//                           window.location.href = "/solutions";
//                         }}
//                       />
//                     </ListItemButton>

//                     <ListItemButton>
//                         <ListItemText
//                           primary={"Portfolio"}
//                           onClick={() => {
//                             window.location.href = "/portfolio";
//                           }} />
//                     </ListItemButton>

//                     <ListItemButton>
//                     <ListItemText
//                           primary={"About"}
//                           onClick={() => {
//                             window.location.href = "/about";
//                           }} />
//                     </ListItemButton>
//                     <ListItemButton>
//                     <ListItemText
//                           primary={"Contact"}
//                           onClick={() => {
//                             window.location.href = "/contact";
//                           }} />
//                     </ListItemButton>
//                   </List>
//                 </Menu>
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </HideOnScroll>
//     </React.Fragment>
//   );
// }
// export default ResponsiveAppBar;
//END OF THE INTERESTING NAVBAR


//
//
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
