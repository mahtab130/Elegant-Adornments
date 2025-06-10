import { useState } from "react";

import { useCart } from "react-use-cart";
import { filter, map } from "lodash";
import { Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import {
  useGetProductById,
  useProductSearch,
} from "../../helper/services/hooks/all";
import { CustomTitle } from "../common/CustomTitle";
import { ProductCard } from "../common/ProductCard";
import { CustomImage } from "../controller/CustomImage";
import { CustomRating } from "../controller/CustomRating";
import { CustomButton } from "../controller/CustomButton";
import { CustomSelect } from "../controller/CustomSelect";
import { handleImageUrl } from "../../helper/utils/handlers";
import { productSX } from "../../helper/styleObjects/product";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { ShoppingModalProduct } from "../common/CategoryComponents";

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
