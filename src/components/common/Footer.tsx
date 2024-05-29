import { memo } from "react";

import { map } from "lodash";
import { useNavigate } from "react-router-dom";
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
import { AnimationSlideIn } from "./AnimateComponent";
import { CustomImage } from "../controller/CustomImage";
import { footerSX } from "../../helper/styleObjects/footer";
import { CustomTextfield } from "../controller/CustomTextfield";

import logo from "../../assets/images/vectors/logo-white.webp";

export const Footer = memo(() => {
  const navigate = useNavigate();

  return (
    <Grid sx={footerSX}>
      <Grid container className="content">
        <Grid item md={3.3} className="social-content">
          <AnimationSlideIn direction="left">
            <CustomImage src={logo} className="logo" />
          </AnimationSlideIn>
          <AnimationSlideIn direction="left">
            <Typography className="description">
              Our duty is to provide quality and beautiful products to customers
              and maintain the store environment in a beautiful and pleasant way
              and create a pleasant shopping experience for customers.
            </Typography>
          </AnimationSlideIn>
          <AnimationSlideIn direction="left">
            <Grid className="socail-boxes">
              {map(socailIcons, (item, index) => (
                <Box key={index} component="div" className="social-box">
                  {item}
                </Box>
              ))}
            </Grid>
          </AnimationSlideIn>
        </Grid>
        <Grid item md={2} className="navigation-content">
          <AnimationSlideIn direction="left" className="navigation-content">
            <>
              <Typography className="title">Navigation</Typography>
              {map(navbarValues, ({ name, url }, index) => (
                <Typography
                  key={index}
                  onClick={() => navigate(url)}
                  className="text"
                >
                  {name}
                </Typography>
              ))}
            </>
          </AnimationSlideIn>
        </Grid>
        <Grid item md={2} className="navigation-content">
          <AnimationSlideIn direction="right" className="navigation-content">
            <>
              <Typography className="title">Contact</Typography>
              <Typography className="text">+989383823445</Typography>
              <Typography className="text">WWW.abc.com</Typography>
              <Typography className="text">abc@gmail.com</Typography>
            </>
          </AnimationSlideIn>
        </Grid>
        <Grid item md={3} className="send-email-content">
          <AnimationSlideIn className="send-email-content" direction="right">
            <>
              <Typography className="title">
                Get the latest information
              </Typography>
              <CustomTextfield
                className="email-input"
                placeholder="Email address"
                endIcon={sendIcon()}
                setting={{ noBorder: true, isIconButton: true }}
              />
            </>
          </AnimationSlideIn>
        </Grid>
      </Grid>
      <Grid className="copyright-text">
        <AnimationSlideIn direction="left">
          <Typography className="text">
            Copyright{" "}
            <Box component="span" className="icon">
              {copyRightIcon()}
            </Box>{" "}
            2024 <Box component="span">Mozhdeh</Box>. All right reserved.
          </Typography>
        </AnimationSlideIn>
        <AnimationSlideIn direction="right">
          <Typography className="text">Terms | Privacy poicy</Typography>
        </AnimationSlideIn>
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
