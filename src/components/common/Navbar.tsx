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

import { CategoryPaper } from "../controller/CustomPopover";
import { drawerSX, navbarSX } from "../../helper/styleObjects/navbar";
import {
  menuIcon,
  searchIcon,
  shoppingIcon,
  userIcon,
} from "../other/SvgComponent";

import logo from "../../assets/images/vectors/logo.webp";
import { navbarValues } from "../../helper/constants/other";
import {
  useCategoriesSearch,
  useGetUserById,
} from "../../helper/services/hooks/all";
import { CustomAvatar } from "../controller/CustomImage";
import { handleImageUrl } from "../../helper/utils/handlers";

export const Navbar = memo(() => {
  const [openCategoryPopper, setOpenCategoryPopper] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { totalItems } = useCart();
  const ref = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const { data: categoryData } = useCategoriesSearch();

  const userJsonData = localStorage.getItem("user");
  const user = JSON.parse(userJsonData || "");

  const { data: userGetById } = useGetUserById(user["id"]);

  const { imageUrl, id } =
    (userGetById as unknown as { data: Users & { password: string } })?.data ??
    {};

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
            data={categoryData}
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
              onClick={() => navigate("/carts")}
            >
              <Box component="span">{totalItems || 0}</Box>
              {shoppingIcon()}
            </Box>

            <Box
              component="div"
              className="icon-navbar"
              onClick={() =>
                navigate(userJsonData ? `/view/${id || ""}` : "/login")
              }
            >
              {userJsonData ? (
                <CustomAvatar src={handleImageUrl(imageUrl || "")} />
              ) : (
                userIcon()
              )}
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
