// import React from 'react';
// import { AppBar, Toolbar, Button, IconButton, Typography, Container, Hidden, Menu, MenuItem, CardActions, SvgIcon } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { ReactComponent as logoNucl } from '../logo-website.svg';

// function LogoIcon(props) {
//   return (
//     <SvgIcon component={logoNucl} {...props} viewBox="0 0 179 50" />
//   );
// }


// function Navbar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" color="inherit">
//       <Container>
//         <Toolbar>
//           {/* Logo */}
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <LogoIcon />
//           </IconButton>
//           <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
//           </Typography>
//           {/* Sandwich Menu Icon */}
//           <Hidden mdUp>
//             <IconButton color="inherit" aria-label="open menu" onClick={handleMenuOpen}>
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//             >
//               <MenuItem onClick={handleMenuClose}><a href="#link1">Link 1</a></MenuItem>
//               <MenuItem onClick={handleMenuClose}><a href="#link2">Link 2</a></MenuItem>
//               <MenuItem onClick={handleMenuClose}><a href="#link3">Link 3</a></MenuItem>
//               <MenuItem onClick={handleMenuClose}><a href="#link4">Link 4</a></MenuItem>
//               <MenuItem onClick={handleMenuClose}><a href="#contact">Contact Us</a></MenuItem>
//             </Menu>
//           </Hidden>
//           {/* Links */}
//           <Hidden smDown>
//             <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//               <CardActions>
//                 <Button color="inherit" href="#home" sx={{ fontFamily: 'Arial', fontSize: '16px', textTransform: 'none' }}>Home</Button>
//                 <Button color="inherit" href="#portfolio" sx={{ fontFamily: 'Arial', fontSize: '16px', textTransform: 'none' }}>Portfolio</Button>
//                 <Button color="inherit" href="#solutions" sx={{ fontFamily: 'Arial', fontSize: '16px', textTransform: 'none' }}>Solutions</Button>
//                 <Button color="inherit" href="#about" sx={{ fontFamily: 'Arial', fontSize: '16px', textTransform: 'none' }}>About</Button>
//               </CardActions>
//             </div>
//             <Button color="inherit" variant="outlined" href="#startproj" sx={{ fontFamily: 'Arial', fontSize: '16px', textTransform: 'none' }}>Start a project</Button>
//             <Button color="inherit" variant="outlined" href="#contact" sx={{ fontFamily: 'Arial', fontSize: '16px', textTransform: 'none' }}>Contact us</Button>
//           </Hidden>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Navbar;
