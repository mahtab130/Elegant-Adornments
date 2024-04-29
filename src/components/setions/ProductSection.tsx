import { memo } from "react";

import { map } from "lodash";
import { Box, Grid } from "@mui/material";

import { productData } from "../../data/product";
import { ProductCard } from "../common/ProductCard";
import { productSectionSX } from "../../helper/styleObjects/homeSection";

import { CustomTitle } from "../common/CustomTitle";
import { AnimationSlideIn } from "../common/AnimateComponent";

export const ProductSection = memo(() => {
  return (
    <Grid sx={productSectionSX}>
      <Box component="div" className="color-background"></Box>
      <Grid className="products-container">
        <AnimationSlideIn direction="up">
          <CustomTitle title="New Product" />
        </AnimationSlideIn>
        <Grid container className="product-cards-wrapper">
          {map(productData, ({ id, image, name, price }, index) => (
            <Grid item xs={12} md={2.85} key={id}>
              <AnimationSlideIn direction={index < 2 ? "left" : "right"}>
                <ProductCard id={id} name={name} price={price} image={image} />
              </AnimationSlideIn>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});
