import { MouseEventHandler, memo } from "react";

import { Grid, Typography, Box } from "@mui/material";

import { minusIcon, plusIcon } from "../other/SvgComponent";
import { quantityComponentSX } from "../../helper/styleObjects/cart";

export const QuantityComponent = memo<{
  quantity: number;
  increaseItem: MouseEventHandler<HTMLSpanElement>;
  decreaseItem: MouseEventHandler<HTMLSpanElement>;
}>(({ quantity, increaseItem, decreaseItem }) => (
  <Grid sx={quantityComponentSX}>
    <Box component="span" onClick={decreaseItem}>
      {minusIcon()}
    </Box>
    <Typography className="quantity">{quantity}</Typography>
    <Box component="span" onClick={increaseItem}>
      {plusIcon()}
    </Box>
  </Grid>
));
