import { memo } from "react";

import { map } from "lodash";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { navbarValues } from "../../data/other";
import { navbarSX } from "../../helper/styleObjects/navbar";
import { searchIcon, shoppingIcon, userIcon } from "../other/SvgComponent";

import logo from "../../assets/images/vectors/logo.webp";

export const Navbar = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid className="navbar-container" sx={navbarSX}>
      <Grid className="logo-wrapper">
        <Box className="logo" component="img" src={logo} />
      </Grid>
      <Grid className="nav-list-wrapper">
        {map(navbarValues, ({ name, url }) => (
          <Typography
            onClick={() => navigate(url)}
            className={
              location.pathname == url
                ? "navbar-value-name active"
                : "navbar-value-name"
            }
          >
            {name}
          </Typography>
        ))}
      </Grid>
      <Grid className="actions-wrapper">
        <Box component="div" className="icon-navbar">
          {searchIcon()}
        </Box>
        <Box component="div" className="icon-navbar">
          {userIcon()}
        </Box>
        <Box component="div" className="icon-navbar">
          {shoppingIcon()}
        </Box>
      </Grid>
    </Grid>
  );
});
