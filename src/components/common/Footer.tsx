import { memo } from "react";

import { map } from "lodash";
import { Box, Grid, Typography } from "@mui/material";

import {
  sendIcon,
  tweeterIcon,
  youtubeIcon,
  facebookIcon,
  instagramIcon,
  messangerIcon,
  copyRightIcon,
} from "../other/SvgComponent";
import { navbarValues } from "../../data/other";
import { CustomImage } from "../controller/CustomImage";
import { CustomTextfield } from "../controller/CustomTextfield";

import logo from "../../assets/images/vectors/logo2.png";
import { footerSX } from "../../helper/styleObjects/footer";
import { useNavigate } from "react-router-dom";

export const Footer = memo(() => {
  const navigate = useNavigate();

  return (
    <Grid sx={footerSX}>
      <Grid container className="content">
        <Grid item md={3.3} className="social-content">
          <CustomImage src={logo} className="logo" />
          <Typography className="description">
            Our duty is to provide quality and beautiful products to customers
            and maintain the store environment in a beautiful and pleasant way
            and create a pleasant shopping experience for customers.
          </Typography>
          <Grid className="socail-boxes">
            {map(socailIcons, (item, key) => (
              <Box key={key} component="div" className="social-box">
                {item}
              </Box>
            ))}
          </Grid>
        </Grid>
        <Grid item md={2} className="navigation-content">
          <Typography className="title">Navigation</Typography>
          {map(navbarValues, ({ name, url }, key) => (
            <Typography
              key={key}
              onClick={() => navigate(url)}
              className="text"
            >
              {name}
            </Typography>
          ))}
        </Grid>
        <Grid item md={2} className="navigation-content">
          <Typography className="title">Contact</Typography>
          <Typography className="text">+989383823445</Typography>
          <Typography className="text">WWW.abc.com</Typography>
          <Typography className="text">abc@gmail.com</Typography>
        </Grid>
        <Grid item md={3} className="send-email-content">
          <Typography className="title">Get the latest information</Typography>
          <CustomTextfield
            endIcon={sendIcon()}
            className="email-input"
            placeholder="Email address"
          />
        </Grid>
      </Grid>
      <Grid className="copyright-text">
        <Typography className="text">
          Copyright{" "}
          <Box component="span" className="icon">
            {copyRightIcon()}
          </Box>{" "}
          2024 <Box component="span">Mozhdeh</Box>. All right reserved.
        </Typography>
        <Typography className="text">Terms | Privacy poicy</Typography>
      </Grid>
    </Grid>
  );
});

const socailIcons = [
  instagramIcon(),
  facebookIcon(),
  tweeterIcon(),
  messangerIcon(),
  youtubeIcon(),
];
