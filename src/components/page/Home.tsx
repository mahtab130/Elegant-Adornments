import { FC } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { Navbar } from "../common/Navbar";
import { homeSX } from "../../helper/styleObjects/main";
import { CustomButton } from "../controller/CustomButton";

import Vector from "../../assets/images/Vector.webp";
import backImage from "../../assets/images/back-image.webp";

const Home: FC = () => {
  return (
    <Grid className="home-wrapper" sx={homeSX}>
      <Grid className="background-image"></Grid>
      <Grid container className="container">
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
            <CustomButton
              variant="contained"
              className="button"
              text="Buy Now"
            />
          </Grid>
          <Box component="img" src={Vector} className="vector-arrow-img" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
