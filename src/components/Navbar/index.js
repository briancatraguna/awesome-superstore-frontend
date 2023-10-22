import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import StoreIcon from "@mui/icons-material/Store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../routing/routes";
import { clearAuthState } from "../../redux/authSlice";

const pages = ["Dashboard", "Orders", "Cart"];
const settings = ["Profile", "Logout"];

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(false);
  const accessToken = useSelector((state) => state.auth.accessToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavMenuClick = (e, navMenu) => {
    // TODO PK Palak Keni - Navigate to nav menu screens
    
  };

  const handleUserMenuClick = (e, userMenu) => {
    if (userMenu === "Profile") {
      navigate(ROUTE_PATHS.userProfile);
    }
    if (userMenu === "Logout") {
      dispatch(clearAuthState());
      navigate(ROUTE_PATHS.login);
    }
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StoreIcon
            fontSize="large"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            href="/"
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AWESOME INC.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={(e) => handleNavMenuClick(e, page)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(e) => handleNavMenuClick(e, page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {(accessToken !== null && accessToken !== undefined) &&
          (
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User options">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonIcon htmlColor="white" fontSize="large" alt="User" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >{settings.map((setting) => (
                <MenuItem 
                  key={setting} 
                  onClick={(e) => handleUserMenuClick(e, setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          )
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
