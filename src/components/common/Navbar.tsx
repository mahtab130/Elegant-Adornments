import { memo, useRef, useState } from "react";

import { map } from "lodash";
import { useCart } from "react-use-cart";
import {
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { navbarValues } from "../../data/other";
import { CategoryPaper } from "../controller/CustomPopover";
import { drawerSX, navbarSX } from "../../helper/styleObjects/navbar";
import {
  menuIcon,
  searchIcon,
  shoppingIcon,
  userIcon,
} from "../other/SvgComponent";

import logo from "../../assets/images/vectors/logo.webp";

export const Navbar = memo(() => {
  const [openCategoryPopper, setOpenCategoryPopper] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { totalItems } = useCart();
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <Grid className="navbar-wrapper">
        <Grid className="navbar-container" sx={navbarSX(openCategoryPopper)}>
          <Grid className="logo-wrapper">
            <Box className="logo" component="img" src={logo} />
          </Grid>

          <Grid className="nav-list-wrapper">
            {map(navbarValues, ({ name, url }, index) => (
              <Typography
                key={index}
                ref={name == "Category" ? ref : null}
                onClick={() => {
                  if (name == "Category") {
                    setOpenCategoryPopper(!openCategoryPopper);
                  } else {
                    navigate(url);
                    setOpenCategoryPopper(false);
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
              onClick={() => navigate("/search")}
            >
              {searchIcon()}
            </Box>

            <Box
              component="div"
              className="icon-navbar"
              onClick={() => navigate("/login")}
            >
              {userIcon()}
            </Box>

            <Box
              component="div"
              className="icon-navbar"
              onClick={() => navigate("/carts")}
            >
              <Box component="span">{totalItems || 0}</Box>
              {shoppingIcon()}
            </Box>

            <Box
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={handleDrawerToggle}
            >
              {menuIcon()}
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Mobile Drawer */}
      <Drawer
        sx={drawerSX}
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navbarValues.map(({ name, url }, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  if (name == "Category") {
                    setOpenCategoryPopper(!openCategoryPopper);
                  } else {
                    navigate(url);
                    setOpenCategoryPopper(false);
                  }
                }}
              >
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
});
