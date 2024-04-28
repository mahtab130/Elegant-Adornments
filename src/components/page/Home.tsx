import { FC } from "react";

import { Grid } from "@mui/material";

import { Footer } from "../common/Footer";
import { FaqSection } from "../setions/FaqSection";
import { BlogSection } from "../setions/BlogSection";
import { HomeSection } from "../setions/HomeSection";
import { homeSX } from "../../helper/styleObjects/main";
import { AboutUsSection } from "../setions/AboutUsSection";
import { ProductSection } from "../setions/ProductSection";
import { ServicesSection } from "../setions/ServicesSection";
import { CommentsSection } from "../setions/CommentsSection";
import { CategorySection } from "../setions/CategorySection";
import { BestSellingSection } from "../setions/BestSellingSection";

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
      <Footer />
    </Grid>
  );
};

export default Home;
