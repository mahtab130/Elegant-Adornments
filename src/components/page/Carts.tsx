import { FC } from "react";

import { map, slice } from "lodash";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import {
  NoOptionsComponent,
  EmptyLastCenterJustify,
} from "../common/NoOptions";
import { productData } from "../../data/product";
import { trashIcon } from "../other/SvgComponent";
import { CustomTitle } from "../common/CustomTitle";
import { ProfileCard } from "../common/ProfileCard";
import { ProductCard } from "../common/ProductCard";
import { cartsSX } from "../../helper/styleObjects/cart";
import { CustomButton } from "../controller/CustomButton";
import { COLOR_GRAY } from "../../helper/constants/colors";
import { QuantityComponent } from "../common/CartsComponents";
import { CustomTextfield } from "../controller/CustomTextfield";
import { CustomTable, ITableHeadCell } from "../controller/CustomTable";

import noCarts from "../../assets/images/vectors/no-carts.webp";

const Carts: FC = () => {
  const { items, removeItem, updateItemQuantity } = useCart();
  console.log("🚀 ~ items:", items);
  const navigate = useNavigate();

  const tableCells: ITableHeadCell<IProductData>[] = [
    {
      id: "name",
      label: "Product",
      ComponentRow: ({ row: { image, name } }) => (
        <ProfileCard image={image} name={name} />
      ),
    },
    {
      id: "id",
      label: "Quantity",
      ComponentRow: ({ row: { id, quantity } }) => (
        <QuantityComponent
          key={String(id)}
          quantity={quantity || 0}
          decreaseItem={() =>
            updateItemQuantity(String(id), (quantity || 0) - 1)
          }
          increaseItem={() =>
            updateItemQuantity(String(id), (quantity || 0) + 1)
          }
        />
      ),
    },
    {
      id: "price",
      label: "Price",
      ComponentRow: ({ row: { price } }) => <>{`$ ${price}`}</>,
    },
    {
      id: "id",
      label: "Suptotal",
      ComponentRow: ({ row: { itemTotal } }) => <>{`$ ${itemTotal}`}</>,
    },
    {
      id: "id",
      label: "Operation",
      ComponentRow: ({ row: { id } }) => (
        <Box
          component="span"
          onClick={() => removeItem(String(id))}
          sx={{
            cursor: "pointer",
            transition: "all 0.3s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          {trashIcon(COLOR_GRAY)}
        </Box>
      ),
    },
  ];

  return (
    <Grid sx={cartsSX}>
      <Grid className="container">
        <CustomTitle title="Cart" />
        {items?.length > 0 ? (
          <>
            <CustomTable valueRows={items} tableHeadCell={tableCells} />
            <Grid container className="coupon-wrapper">
              <Grid item xs={12} md={5.8}>
                <CustomTextfield
                  variant="outlined"
                  placeholder="Coupon Code"
                  customLabel="Coupon"
                  setting={{ labelSize: "large", isIconButton: true }}
                  endIcon={<Typography>{"Apply"}</Typography>}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <CustomButton
                  onClick={() => navigate("/billing-detail")}
                  className="button"
                  text={"Proceed To Checkout"}
                  variant="contained"
                />
              </Grid>
            </Grid>
            <Grid className="other-product">
              <CustomTitle title="You may be interested in" />
              <Grid container className="other-product-wrapper">
                {map(slice(productData, 3, 8), ({ id, image, name, price }) => (
                  <Grid item xs={12} key={id} md={2.85}>
                    <ProductCard
                      id={id}
                      name={name}
                      price={price}
                      image={image}
                      variant="cart"
                    />
                  </Grid>
                ))}
                <EmptyLastCenterJustify
                  even
                  md={2.85}
                  length={map(slice(productData, 3, 8))?.length}
                />
              </Grid>
            </Grid>
          </>
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
