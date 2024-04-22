import { memo } from "react";

import { map } from "lodash";
import { Box, Grid, Typography } from "@mui/material";

import { productData } from "../../data/product";
import { ProductCard } from "../common/ProductCard";
import { arrowRightIcon } from "../other/SvgComponent";
import { productSectionSX } from "../../helper/styleObjects/sections";

import backImage from "../../assets/images/back-image-2.webp";

export const ProductSection = memo(() => {
  return (
    <Grid sx={productSectionSX}>
      <Box component="div" className="color-background"></Box>
      <Grid className="products-container">
        <Typography className="title-product">
          New Product {arrowRightIcon()}
          <Box component="img" className="vector-image" src={backImage} />
        </Typography>
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
