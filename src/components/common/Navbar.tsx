import { memo, useState } from "react";

import { map } from "lodash";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { navbarValues } from "../../data/other";
import { navbarSX } from "../../helper/styleObjects/navbar";
import { CustomTextfield } from "../controller/CustomTextfield";
import { searchIcon, shoppingIcon, userIcon } from "../other/SvgComponent";

import logo from "../../assets/images/vectors/logo.webp";

export const Navbar = memo(() => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid className="navbar-wrapper">
      <Grid className="navbar-container" sx={navbarSX(showInput)}>
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
          <Box
            component="div"
            className="icon-navbar icon-search"
            onClick={() => setShowInput(true)}
          >
            {searchIcon()}
          </Box>
          <CustomTextfield
            className="custom-textfield"
            placeholder="Search..."
            startIcon={
              <Box className="icon-wrapper" onClick={() => setShowInput(false)}>
                {searchIcon()}
              </Box>
            }
          />
          <Box component="div" className="icon-navbar">
            {userIcon()}
          </Box>
          <Box component="div" className="icon-navbar">
            {shoppingIcon()}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
});
