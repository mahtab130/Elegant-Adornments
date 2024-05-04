import { FC } from "react";

import { Grid, SxProps, Theme, Typography } from "@mui/material";

import {
  FONT_BODY_LARGE,
  FONT_WEIGHT_BLOD,
} from "../../helper/constants/fonts";
import { CustomTitle } from "../common/CustomTitle";
import { CustomImage } from "../controller/CustomImage";
import { SPACE_H3 } from "../../helper/constants/spaces";
import { MAX_WIDTH } from "../../helper/constants/static";
import { COLOR_TEXT_GRAY } from "../../helper/constants/colors";

import noCarts from "../../assets/images/vectors/no-shopping.png";

const Carts: FC = () => {
  return (
    <Grid sx={cartsSX}>
      <Grid className="container">
        <CustomTitle title="Cart" />
        <Grid className="image-wrapper">
          <CustomImage className="carts-image" src={noCarts} />
          <Typography className="text">Your shopping cart is empty</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Carts;

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
