import { memo, useRef, useState } from "react";

import { map } from "lodash";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { navbarValues } from "../../data/other";
import { navbarSX } from "../../helper/styleObjects/navbar";
import { CustomTextfield } from "../controller/CustomTextfield";
import { searchIcon, shoppingIcon, userIcon } from "../other/SvgComponent";

import logo from "../../assets/images/vectors/logo.webp";
import { CategoryPaper } from "../controller/CustomPopover";

export const Navbar = memo(() => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [openCategoryPopper, setOpenCategoryPopper] = useState<boolean>(false);

  const ref = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid className="navbar-wrapper">
      <Grid
        className="navbar-container"
        sx={navbarSX(showInput, openCategoryPopper)}
      >
        <Grid className="logo-wrapper">
          <Box className="logo" component="img" src={logo} />
        </Grid>
        <Grid className="nav-list-wrapper">
          {map(navbarValues, ({ name, url }) => (
            <Typography
              ref={name == "Category" ? ref : null}
              onClick={() => {
                if (name == "Category") {
                  setOpenCategoryPopper(!openCategoryPopper);
                } else {
                  navigate(url);
                }
              }}
              className={
                location.pathname == url ||
                (name == "Category" && openCategoryPopper)
                  ? "navbar-value-name active"
                  : "navbar-value-name"
              }
            >
              {name}
            </Typography>
          ))}
        </Grid>
        <CategoryPaper
          anchorEl={ref.current}
          open={openCategoryPopper}
          setOpen={setOpenCategoryPopper}
        />
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
          <Box
            component="div"
            className="icon-navbar"
            onClick={() => navigate("/login")}
          >
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
