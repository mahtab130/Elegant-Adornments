import { FC } from "react";

import { Grid } from "@mui/material";

import { HomeSection } from "../setions/HomeSection";
import { homeSX } from "../../helper/styleObjects/main";
import { ProductSection } from "../setions/ProductSection";
import { CategorySection } from "../setions/CategorySection";

const Home: FC = () => {
  return (
    <Grid sx={homeSX}>
      <Grid className="home-wrapper">
        <Grid className="background-image"></Grid>
        <HomeSection />
      </Grid>
      <ProductSection />
      <CategorySection />
    </Grid>
  );
};

export default Home;
