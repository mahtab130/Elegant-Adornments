import { useState } from "react";

import { useCart } from "react-use-cart";
import { find, map, slice } from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, SxProps, Theme, Typography } from "@mui/material";

import {
  FONT_WEIGHT_BLOD,
  FONT_TITLE_SMALL,
  FONT_BODY_MEDIUM2,
} from "../../helper/constants/fonts";
import {
  SPACE_H3,
  SPACE_H1,
  SPACE_D1,
  SPACE_M2,
  SPACE_XM1,
} from "../../helper/constants/spaces";
import { productData } from "../../data/product";
import { CustomTitle } from "../common/CustomTitle";
import { ProductCard } from "../common/ProductCard";
import { CustomImage } from "../controller/CustomImage";
import { MAX_WIDTH } from "../../helper/constants/static";
import { CustomRating } from "../controller/CustomRating";
import { CustomButton } from "../controller/CustomButton";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { CustomTextfield } from "../controller/CustomTextfield";
import { ShoppingModalProduct } from "../common/CategoryComponents";
import { CustomBreadcrumbs } from "../controller/CustomBreadcrumbs";
import { COLOR_TEXT, COLOR_WHITE } from "../../helper/constants/colors";

const Product = () => {
  const { id: currentId } = useParams();

  const navigate = useNavigate();

  const { addItem } = useCart();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const { name, image, price, rate } =
    find(productData, ({ id }) => id == +(currentId || 0)) ?? {};

  return (
    <Grid sx={productSX}>
      <Grid className="background"></Grid>
      <Grid container xs={12} className="container">
        <Grid xs={12} md={6} className="product">
          <CustomBreadcrumbs
            breadcrumbs={[
              { name: "Home", link: "/" },
              { name: "Especially for girls and women", link: "/" },
              { name: "Especially for girls and women", link: "/" },
            ]}
          />
          <Typography className="title">{name}</Typography>
          <Grid className="image-wrapper">
            <CustomImage src={image || ""} className="image" />
          </Grid>
        </Grid>
        <Grid xs={12} md={6} className="price-box">
          <Grid className="properties-wrapper">
            <Typography className="properties">
              Fixed color | anti-allergenic |zirconia gem
            </Typography>
            <Typography className="price">{price} $</Typography>
          </Grid>
          <CustomRating readOnly value={rate} size="large" className="rating" />
          <CustomTextfield customLabel="Size" className="textfield" />
          <Grid className="button-wrapper">
            <CustomButton
              text="Add To Cart"
              variant="contained"
              className="button"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid className="other-products">
        <CustomTitle title="Related products" />
        <Grid container className="product-cards-wrapper">
          {map(
            slice(productData, 11, 15),
            ({ id, image, name, price, quantity, itemTotal }, index) => (
              <Grid
                item
                xs={12}
                onClick={() => navigate(`/products/${id}`)}
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
                        itemTotal: itemTotal,
                        price: price,
                        id: String(id),
                        quantity: (quantity || 0) + 1,
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
      <ShoppingModalProduct openModal={openModal} setOpenModal={setOpenModal} />
    </Grid>
  );
};

export default Product;

const productSX: SxProps<Theme> = {
  width: "100%",
  mx: "auto",
  "& .background": {
    width: "100%",
    height: "100vh",
    position: "absolute",
    background: `linear-gradient(to left, #E7EDEF 50%, white 50%)`,
  },
  "& .container": {
    mx: "auto",
    pt: SPACE_H3,
    width: "100%",
    zIndex: "1111",
    height: "100vh",
    maxWidth: MAX_WIDTH,
    position: "relative",
    "& .product": {
      width: "100%",
      height: "100%",
      pt: SPACE_H1,
      "& .title": {
        fontSize: FONT_TITLE_SMALL,
        fontWeight: FONT_WEIGHT_BLOD,
        my: SPACE_D1,
      },
      "& .image-wrapper": {
        width: "100%",
        height: "300px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        "& .image": {
          width: "380px",
          position: "absolute",
        },
      },
    },
    "& .price-box": {
      px: SPACE_D1,
      mt: SPACE_H1,
      "& .properties-wrapper": {
        mt: SPACE_H3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& .properties": {
          color: "#686868",
          fontSize: FONT_BODY_MEDIUM2,
          fontWeight: FONT_WEIGHT_BLOD,
        },
        "& .price": {
          color: COLOR_TEXT,
          fontSize: FONT_BODY_MEDIUM2,
          fontWeight: FONT_WEIGHT_BLOD,
        },
      },
      "& .rating": {
        color: COLOR_TEXT,
        my: SPACE_M2,
      },
      "& .button-wrapper": {
        my: SPACE_D1,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        "& .button": {
          borderRadius: "8px",
        },
      },
      "& .textfield": {
        "& .MuiInputBase-root": {
          borderRadius: "8px",
          backgroundColor: COLOR_WHITE,
        },
      },
    },
  },
  "& .other-products": {
    width: "100%",
    height: "100%",
    my: SPACE_H3,
    mx: "auto",
    maxWidth: MAX_WIDTH,
    "& .product-cards-wrapper": {
      mt: SPACE_XM1,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
};
