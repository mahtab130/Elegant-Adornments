import { memo } from "react";

import { map } from "lodash";
import { Box, Grid } from "@mui/material";

import { productData } from "../../data/product";
import { ProductCard } from "../common/ProductCard";
import { productSectionSX } from "../../helper/styleObjects/sections";

import { CustomTitle } from "../common/CustomTitle";

export const ProductSection = memo(() => {
  return (
    <Grid sx={productSectionSX}>
      <Box component="div" className="color-background"></Box>
      <Grid className="products-container">
        <CustomTitle title="New Product" />
        <Grid container className="product-cards-wrapper">
          {map(productData, ({ id, image, name, price }) => (
            <Grid item xs={12} md={2.85} key={id}>
              <ProductCard id={id} name={name} price={price} image={image} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});
