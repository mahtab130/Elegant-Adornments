import { FC } from "react";

import { useCart } from "react-use-cart";
import { Grid, SxProps, Theme, Typography } from "@mui/material";

import {
  FONT_BODY_LARGE,
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
} from "../../helper/constants/fonts";
import {
  COLOR_SECEONDRY,
  COLOR_TEXT_GRAY,
} from "../../helper/constants/colors";
import {
  SPACE_H1,
  SPACE_H3,
  SPACE_M1,
  SPACE_M3,
  SPACE_S2,
} from "../../helper/constants/spaces";
import { CustomTitle } from "../common/CustomTitle";
import { NoOptionsComponent } from "../common/NoOptions";
import { MAX_WIDTH } from "../../helper/constants/static";

import noCarts from "../../assets/images/vectors/no-shopping.png";

const Carts: FC = () => {
  const { items } = useCart();
  console.log("🚀 ~ items:", items);

  return (
    <Grid sx={cartsSX}>
      <Grid className="container">
        <CustomTitle title="Cart" />
        {items?.length > 0 ? (
          <CartSelected />
        ) : (
          <NoOptionsComponent
            imageSrc={noCarts}
            text="Your shopping cart is empty"
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Carts;

const CartSelected = () => {
  return (
    <Grid sx={productCartSX}>
      <Grid className="head">
        <Typography className="head-text">Product</Typography>
        <Typography className="head-text">Quantity</Typography>
        <Typography className="head-text">Price</Typography>
        <Typography className="head-text">Suptotal</Typography>
      </Grid>
      <Grid className="body">
        <Typography className="body-text">Product</Typography>
      </Grid>
    </Grid>
  );
};

const productCartSX: SxProps<Theme> = {
  width: "100%",
  mt: SPACE_M1,
  p: SPACE_M3,
  "& .head": {
    px: SPACE_H1,
    pb: SPACE_S2,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid " + COLOR_SECEONDRY,
    "& .head-text": {
      width: "25%",
      textAlign: "center",
      fontSize: FONT_BODY_MEDIUM2,
      fontWeight: FONT_WEIGHT_BLOD,
    },
  },
  "& .body": {
    px: SPACE_H1,
    pb: SPACE_S2,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& .body-text": {
      width: "25%",
      textAlign: "center",
      fontSize: FONT_BODY_MEDIUM2,
      fontWeight: FONT_WEIGHT_BLOD,
    },
  },
};

const cartsSX: SxProps<Theme> = {
  width: "100%",
  "& .container": {
    mx: "auto",
    mt: SPACE_H3,
    pt: SPACE_H3,
    width: "100%",
    maxWidth: MAX_WIDTH,
    "& .image-wrapper": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& .carts-image": {
        width: "300px",
        height: "300px",
      },
      "& .text": {
        color: COLOR_TEXT_GRAY,
        fontSize: FONT_BODY_LARGE,
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
  },
};
