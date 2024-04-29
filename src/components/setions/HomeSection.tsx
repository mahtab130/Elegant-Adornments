import { memo } from "react";

import { Grid, Box, Typography } from "@mui/material";

import { Navbar } from "../common/Navbar";
import { CustomButton } from "../controller/CustomButton";
import { homeSectionSX } from "../../helper/styleObjects/homeSection";

import Vector from "../../assets/images/vectors/Vector.webp";
import backImage from "../../assets/images/vectors/back-image.webp";
import { AnimationSlideIn } from "../common/AnimateComponent";

export const HomeSection = memo(() => {
  return (
    <Grid sx={homeSectionSX} className="home-wrapper">
      <Grid className="background-image"></Grid>
      <Grid container className="container">
        <AnimationSlideIn direction="up">
          <Navbar />
        </AnimationSlideIn>
        <AnimationSlideIn direction="left">
          <Grid item xs={12} md={5} className="texts-wrapper">
            <Box component="img" src={backImage} className="back-image" />
            <Typography className="title">Elegant Adornments</Typography>
            <Typography className="subtitle">
              Elevate your style with our elegant and timelessjewelry pieces,
              perfect for any occasion.
            </Typography>
            <Grid className="button-wrapper">
              <CustomButton text="Buy Now" variant="contained" />
            </Grid>
            <Box component="img" src={Vector} className="vector-arrow-img" />
          </Grid>
        </AnimationSlideIn>
      </Grid>
    </Grid>
  );
});
