import { memo } from "react";

import { map } from "lodash";
import { Box, Grid, Typography } from "@mui/material";

import { navbarSX } from "../../helper/styleObjects/navbar";
import { searchIcon, shoppingIcon, userIcon } from "../other/SvgComponent";

import logo from "../../assets/images/logo.webp";

export const Navbar = memo(() => {
  return (
    <Grid className="navbar-container" sx={navbarSX}>
      <Grid className="logo-wrapper">
        <Box className="logo" component="img" src={logo} />
      </Grid>
      <Grid className="nav-list-wrapper">
        {map(navbarValues, ({ name }) => (
          <Typography className="navbar-value-name">{name}</Typography>
        ))}
      </Grid>
      <Grid className="actions-wrapper">
        <Box> {searchIcon()}</Box>
        <Box> {userIcon()}</Box>
        <Box> {shoppingIcon()}</Box>
      </Grid>
    </Grid>
  );
});

const navbarValues = [
  { name: "Home", url: "/" },
  { name: "Category", url: "/categroy" },
  { name: "About Us", url: "/about-us" },
  { name: "Services", url: "/services" },
  { name: "Blogs", url: "/blogs" },
];
