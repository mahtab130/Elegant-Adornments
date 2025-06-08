import { memo, useState } from "react";

import { filter, map } from "lodash";
import { useCart } from "react-use-cart";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ProductCard } from "../common/ProductCard";
import { CustomTitle } from "../common/CustomTitle";
import { handleImageUrl } from "../../helper/utils/handlers";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { useProductSearch } from "../../helper/services/hooks/all";
import { ShoppingModalProduct } from "../common/CategoryComponents";
import { productSectionSX } from "../../helper/styleObjects/homeSection";

export const ProductSection = memo(() => {
  const navigate = useNavigate();

  const { addItem } = useCart();

  const { data: productData } = useProductSearch();

  const productDataByMaster = filter(productData, (p) => p?.isMaster == true);

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
            productDataByMaster,
            ({ id, imageUrl, name, price, quantity, itemTotal }, index) => {
              return (
                <Grid
                  item
                  xs={11}
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
                      onClickAddItem={(e) => {
                        e.stopPropagation();
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
              );
            }
          )}
        </Grid>
      </Grid>
      <ShoppingModalProduct openModal={openModal} setOpenModal={setOpenModal} />
    </Grid>
  );
});
