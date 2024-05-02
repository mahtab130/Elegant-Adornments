import { FC } from "react";

import { Grid } from "@mui/material";

import { FaqSection } from "../sections/FaqSection";
import { BlogSection } from "../sections/BlogSection";
import { HomeSection } from "../sections/HomeSection";
import { homeSX } from "../../helper/styleObjects/main";
import { AboutUsSection } from "../sections/AboutUsSection";
import { ProductSection } from "../sections/ProductSection";
import { ServicesSection } from "../sections/ServicesSection";
import { CommentsSection } from "../sections/CommentsSection";
import { CategorySection } from "../sections/CategorySection";
import { BestSellingSection } from "../sections/BestSellingSection";

const Home: FC = () => {
  return (
    <Grid sx={homeSX}>
      <HomeSection />
      <ProductSection />
      <CategorySection />
      <AboutUsSection />
      <ServicesSection />
      <BestSellingSection />
      <CommentsSection />
      <FaqSection />
      <BlogSection />
    </Grid>
  );
};

export default Home;
