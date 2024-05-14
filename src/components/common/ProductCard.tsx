import { MouseEventHandler, memo } from "react";

import { Grid, Typography } from "@mui/material";

import { arrowRightIcon } from "../other/SvgComponent";
import { CustomImage } from "../controller/CustomImage";
import { CustomRating } from "../controller/CustomRating";
import { COLOR_TEXT } from "../../helper/constants/colors";
import { productCardSX } from "../../helper/styleObjects/common";

export const ProductCard = memo<
  IProductCard & { onClickAddItem?: MouseEventHandler<HTMLSpanElement> }
>(({ image, name, price, variant, rate, onClickAddItem }) => {
  return (
    <Grid sx={productCardSX(variant)}>
      <Grid className="image-wrapper">
        <CustomImage src={image} className="image-product" />
      </Grid>
      <Grid className="texts-wrapper">
        <Typography className="title">{name}</Typography>
        {variant == "search" || variant == "cart" ? null : (
          <Grid className="price-wrapper">
            {variant == "sale" ? null : (
              <Typography onClick={onClickAddItem} className="add-to-cart">
                {arrowRightIcon(COLOR_TEXT)}
                ADD TO CART
              </Typography>
            )}
            <Typography className="price">{`$ ${price}`}</Typography>
            {variant == "sale" ? (
              <Grid className="rate">
                <CustomRating readOnly size="small" value={rate} />
              </Grid>
            ) : null}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
});
