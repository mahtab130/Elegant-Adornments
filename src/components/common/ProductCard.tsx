import { memo } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { arrowRightIcon } from "../other/SvgComponent";
import { COLOR_TEXT } from "../../helper/constants/colors";
import { productCardSX } from "../../helper/styleObjects/common";

export const ProductCard = memo<IProductCard>(({ image, name, price }) => {
  return (
    <Grid sx={productCardSX}>
      <Grid className="image-wrapper">
        <Box component="img" src={image} className="image-product" />
      </Grid>
      <Grid className="texts-wrapper">
        <Typography className="title">{name}</Typography>
        <Grid className="price-wrapper">
          <Typography className="add-to-cart">
            {arrowRightIcon(COLOR_TEXT)}
            ADD TO CART
          </Typography>
          <Typography className="price">{price}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
});
