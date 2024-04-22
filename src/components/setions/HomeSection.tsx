import { memo } from "react";

import { Grid, Box, Typography } from "@mui/material";

import { Navbar } from "../common/Navbar";
import { CustomButton } from "../controller/CustomButton";
import { homeSectionSX } from "../../helper/styleObjects/sections";

import Vector from "../../assets/images/Vector.webp";
import backImage from "../../assets/images/back-image.webp";

export const HomeSection = memo(() => {
  return (
    <Grid container sx={homeSectionSX} className="container">
      <Grid>
        <Navbar />
      </Grid>
      <Grid item xs={12} md={5} className="texts-wrapper">
        <Box component="img" src={backImage} className="back-image" />
        <Typography className="title">Elegant Adornments</Typography>
        <Typography className="subtitle">
          Elevate your style with our elegant and timelessjewelry pieces,
          perfect for any occasion.
        </Typography>
        <Grid className="button-wrapper">
          <CustomButton variant="contained" className="button" text="Buy Now" />
        </Grid>
        <Box component="img" src={Vector} className="vector-arrow-img" />
      </Grid>
    </Grid>
  );
});
