import { memo, useState } from "react";

import { map, slice } from "lodash";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import { productData } from "../../data/product";
import { ProductCard } from "../common/ProductCard";
import { CustomTitle } from "../common/CustomTitle";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { ShoppingModalProduct } from "../common/CategoryComponents";
import { productSectionSX } from "../../helper/styleObjects/homeSection";

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
            ({ id, image, name, price, quantity, itemTotal }, index) => (
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
});
