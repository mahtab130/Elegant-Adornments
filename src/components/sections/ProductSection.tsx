import { memo, useState } from "react";

import { map, slice } from "lodash";
import { useCart } from "react-use-cart";
import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  FONT_BODY_SMALL,
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM1,
} from "../../helper/constants/fonts";
import { productData } from "../../data/product";
import { ProductCard } from "../common/ProductCard";
import { CustomTitle } from "../common/CustomTitle";
import { heartEyesIcon } from "../other/SvgComponent";
import { CustomDialog } from "../controller/CustomDialog";
import { COLOR_PRIMARY } from "../../helper/constants/colors";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { productSectionSX } from "../../helper/styleObjects/homeSection";
import { SPACE_D1, SPACE_M4, SPACE_XS1 } from "../../helper/constants/spaces";

export const ProductSection = memo(() => {
  const navigate = useNavigate();

  const { addItem } = useCart();

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Grid sx={productSectionSX}>
      <Box component="div" className="color-background"></Box>
      <Grid className="products-container">
        <AnimationSlideIn direction="up">
          <CustomTitle title="New Product" />
        </AnimationSlideIn>
        <Grid container className="product-cards-wrapper">
          {map(
            slice(productData, 0, 4),
            ({ id, image, name, price, quantity }, index) => (
              <Grid
                item
                xs={12}
                onClick={() => navigate("/")}
                md={2.85}
                key={id}
              >
                <AnimationSlideIn direction={index < 2 ? "left" : "right"}>
                  <ProductCard
                    id={id}
                    name={name}
                    price={price}
                    image={image}
                    onClickAddItem={() => {
                      addItem({
                        itemTotal: 1,
                        price: price,
                        id: String(id),
                        quantity: quantity,
                        image: image,
                        name: name,
                      });
                      setOpenModal(true);
                    }}
                  />
                </AnimationSlideIn>
              </Grid>
            )
          )}
        </Grid>
      </Grid>
      <CustomDialog
        open={openModal}
        dialogAction={{
          cancelButton: {
            variant: "outlined",
            text: "Continue Shopping",
            customColor: COLOR_PRIMARY,
            onClick: () => setOpenModal(false),
          },
          submitButton: {
            variant: "contained",
            text: "Processed To Buy",
            customColor: COLOR_PRIMARY,
            onClick: () => navigate("carts"),
          },
        }}
        dialogContent={
          <Grid sx={dialogContentSX} className="content">
            <Typography className="title">
              {heartEyesIcon()} You Have Good Taste!
            </Typography>
            <Typography className="description">
              The product has been successfully added to the cart
            </Typography>
          </Grid>
        }
      />
    </Grid>
  );
});

const dialogContentSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",
  mb: SPACE_D1,
  gap: SPACE_M4,
  "& .title": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: FONT_BODY_MEDIUM1,
    fontWeight: FONT_WEIGHT_BLOD,
    gap: SPACE_XS1,
  },
  "& .description": {
    textAlign: "center",
    fontSize: FONT_BODY_SMALL,
    fontWeight: FONT_WEIGHT_BLOD,
  },
};
