import { useState } from "react";

import { useCart } from "react-use-cart";
import { filter, map } from "lodash";
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
  SPACE_M4,
} from "../../helper/constants/spaces";
import {
  useGetProductById,
  useProductSearch,
} from "../../helper/services/hooks/all";
import { CustomTitle } from "../common/CustomTitle";
import { ProductCard } from "../common/ProductCard";
import { CustomImage } from "../controller/CustomImage";
import { MAX_WIDTH } from "../../helper/constants/static";
import { CustomRating } from "../controller/CustomRating";
import { CustomButton } from "../controller/CustomButton";
import { CustomSelect } from "../controller/CustomSelect";
import { handleImageUrl } from "../../helper/utils/handlers";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { ShoppingModalProduct } from "../common/CategoryComponents";
import { COLOR_TEXT, COLOR_WHITE } from "../../helper/constants/colors";

const Product = () => {
  const { id: currentId } = useParams();

  const navigate = useNavigate();

  const { addItem } = useCart();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const { data: productById } = useGetProductById(currentId);
  const { data: productData } = useProductSearch();

  const {
    name,
    imageUrl,
    price,
    rate,
    categoryId,
    detail,
    size,
    brand,
    color,
    material,
  } = (productById as unknown as { data: Products })?.data ?? {};

  const productsByCategoryId = filter(
    productData,
    (p) => p?.categoryId == categoryId && p?.id !== currentId
  );

  return (
    <Grid sx={productSX}>
      <Grid className="background"></Grid>
      <Grid container xs={12} className="container">
        <Grid xs={12} md={6} className="product">
          <Typography className="title">{name}</Typography>
          <Grid className="image-wrapper">
            <CustomImage
              src={handleImageUrl(imageUrl || "")}
              className="image"
            />
          </Grid>
        </Grid>
        <Grid xs={12} md={6} className="price-box">
          <Grid className="properties-wrapper">
            <Grid className="item-box">
              <Typography className="item">Price:</Typography>
              <Typography className="price">{price} $</Typography>
            </Grid>
            <Grid className="item-box">
              <Typography className="item">Details:</Typography>
              <Typography className="properties">
                {detail || "______"}
              </Typography>
            </Grid>
            <Grid className="item-box">
              <Typography className="item">Material:</Typography>
              <Typography className="price">{material}</Typography>
            </Grid>
            <Grid className="item-box">
              <Typography className="item">Brand:</Typography>
              <Typography className="price">{brand}</Typography>
            </Grid>
            <Grid className="item-box">
              <Typography className="item">Color:</Typography>
              <Typography className="price">{color}</Typography>
            </Grid>
          </Grid>
          <CustomRating readOnly value={rate} size="large" className="rating" />
          {size ? (
            <CustomSelect
              customLabel="Size"
              className="textfield"
              items={map(size, (item) =>
                size && size?.length > 0
                  ? { label: item, value: +item }
                  : { label: "no Size", value: 0 }
              )}
            />
          ) : (
            ""
          )}
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
            productsByCategoryId,
            ({ id, imageUrl, name, price, quantity, itemTotal }, index) => (
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
                    image={handleImageUrl(imageUrl)}
                    onClickAddItem={() => {
                      addItem({
                        itemTotal: itemTotal,
                        price: price,
                        id: String(id),
                        quantity: (quantity || 0) + 1,
                        image: imageUrl,
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
          width: "200px",
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
        flexDirection: "column",
        gap: SPACE_M4,
        "& .item-box": {
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          "& .item": {
            color: "#686868",
            fontSize: FONT_BODY_MEDIUM2,
            fontWeight: FONT_WEIGHT_BLOD,
          },
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
      flexDirection: { xs: "column", md: "row" },
      justifyContent: { xs: "center", md: "space-between" },
    },
  },
};
