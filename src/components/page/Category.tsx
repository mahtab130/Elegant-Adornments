import { memo, useCallback, useState } from "react";

import { filter, find, map, slice } from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Collapse, Grid, SxProps, Theme, Typography } from "@mui/material";

import {
  SPACE_D1,
  SPACE_H2,
  SPACE_H3,
  SPACE_M3,
  SPACE_M4,
  SPACE_S2,
} from "../../helper/constants/spaces";
import {
  FONT_BODY_LARGE,
  FONT_BODY_SMALL,
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
} from "../../helper/constants/fonts";
import { productData } from "../../data/product";
import { categoryData } from "../../data/category";
import { ProductCard } from "../common/ProductCard";
import { arrowDownIcon } from "../other/SvgComponent";
import { CustomRadio } from "../controller/CustomRadio";
import { MAX_WIDTH } from "../../helper/constants/static";
import { COLOR_TEXT } from "../../helper/constants/colors";
import { EmptyLastCenterJustify } from "../common/NoOptions";
import { CustomBreadcrumbs } from "../controller/CustomBreadcrumbs";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { useCart } from "react-use-cart";
import { ShoppingModalProduct } from "../common/CategoryComponents";

const Category = () => {
  const { id: currentId } = useParams();
  const navigate = useNavigate();

  const { addItem } = useCart();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const { name, id } =
    find(categoryData, ({ id }) => id == +(currentId || 0)) ?? {};

  const productsByCategory = filter(
    productData,
    ({ catergoryId }) => catergoryId == id
  );

  const filters = [
    {
      id: 1,
      name: "Order by",
      items: [
        { id: 1, label: "Most Expensive" },
        { id: 2, label: "Cheapest" },
        { id: 3, label: "Best seller" },
        { id: 4, label: "Most Popular" },
        { id: 5, label: "Most visited" },
        { id: 6, label: "Newest" },
      ],
    },
    {
      id: 2,
      name: "Material",
      items: [
        { id: 1, label: "copper" },
        { id: 2, label: "aluminium" },
      ],
    },
    {
      id: 3,
      name: "Size",
      items: [
        { id: 1, label: "Free Size" },
        { id: 2, label: "1" },
        { id: 3, label: "2" },
        { id: 4, label: "3" },
        { id: 5, label: "4" },
        { id: 6, label: "5" },
        { id: 7, label: "6" },
        { id: 8, label: "7" },
        { id: 9, label: "8" },
        { id: 10, label: "9" },
        { id: 11, label: "10" },
        { id: 12, label: "11" },
      ],
    },
    {
      id: 4,
      name: "Brand",
      items: [
        { id: 1, label: "Zhuping" },
        { id: 2, label: "pandora" },
        { id: 3, label: "NJ" },
      ],
    },
    {
      id: 5,
      name: "Style",
      items: [{ id: 1, label: "Gold design" }],
    },
    {
      id: 6,
      name: "Color",
      items: [
        { id: 1, label: "golden" },
        { id: 2, label: "silver" },
        { id: 3, label: "Diamond" },
      ],
    },
  ];

  return (
    <Grid sx={categoryPageSX}>
      <AnimationSlideIn direction="left">
        <CustomBreadcrumbs
          breadcrumbs={[
            { name: "Home", link: "/" },
            { name: name || "", link: "/blogs" },
            { name: "Especially for girls and women", link: "/" },
          ]}
        />
      </AnimationSlideIn>
      <AnimationSlideIn direction="left">
        <Grid container className="container">
          <Grid xs={12} md={2.8} className="filter-box">
            <Typography className="title">Filter products</Typography>
            <Grid className="filter-items-wrapper">
              {map(filters, ({ name, items }) => (
                <FilterItems label={name} items={items} />
              ))}
              <CustomRadio sx={{ my: SPACE_M3 }} label={"Available goods"} />
            </Grid>
          </Grid>

          <Grid xs={12} md={8.6} className="products">
            {productsByCategory?.length <= 0 ? (
              <Typography>There is no Option</Typography>
            ) : (
              <>
                <Typography className="title-products">
                  Especially for girls and women
                </Typography>
                <Grid container className="products-wrapper">
                  {map(
                    slice(productsByCategory, 9),
                    ({ id, image, name, price, itemTotal, quantity }) => (
                      <Grid
                        item
                        xs={12}
                        key={id}
                        md={3.8}
                        onClick={() => navigate(`/products/${id}`)}
                      >
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
                          variant="category"
                        />
                      </Grid>
                    )
                  )}
                  <EmptyLastCenterJustify
                    even
                    md={2.85}
                    length={map(slice(productsByCategory, 3, 8))?.length}
                  />
                </Grid>
              </>
            )}
          </Grid>
          <ShoppingModalProduct
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </Grid>
      </AnimationSlideIn>
    </Grid>
  );
};

export default Category;

const FilterItems = memo<{
  label: string;
  items: { id: number; label: string }[];
}>(({ label, items }) => {
  const [openItem, setOpenItem] = useState<boolean>(false);

  const handleOpenItems = useCallback(() => {
    setOpenItem(!openItem);
  }, [openItem]);

  return (
    <Grid sx={filterItemsSX(openItem)}>
      <Grid className="label-wrapper">
        <Typography className="label">{label}</Typography>
        <Box component="span" className="icon-arrow" onClick={handleOpenItems}>
          {arrowDownIcon()}
        </Box>
      </Grid>
      <Collapse in={openItem}>
        <Grid className="items-wrapper">
          {map(items, ({ label }) => (
            <CustomRadio label={label} />
          ))}
        </Grid>
      </Collapse>
    </Grid>
  );
});

const filterItemsSX = (isOpen?: boolean): SxProps<Theme> => ({
  py: SPACE_M3,
  width: "100%",
  display: "flex",
  cursor: "pointer",
  flexDirection: "column",
  justifyContent: "center",
  borderBottom: "1px solid #D0D0D0",
  "&:hover": {
    "& .label-wrapper": {
      "& .label": {
        color: COLOR_TEXT,
      },
      "& .icon-arrow": {
        transition: "0.3s",
        filter: "brightness(0.8)",
      },
    },
  },
  "& .label-wrapper": {
    pb: isOpen ? SPACE_S2 : undefined,
    display: "flex",
    justifyContent: "space-between",
    borderBottom: isOpen ? "1px solid #D0D0D0" : "none",
    "& .label": {
      color: "#7C7C7C",
      fontSize: FONT_BODY_SMALL,
      fontWeight: FONT_WEIGHT_BLOD,
    },
    "& .icon-arrow": {
      width: "24px",
      height: "24px",
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#E7EDEF",
    },
  },
  "& .items-wrapper": {
    mt: SPACE_M3,
  },
});

const categoryPageSX: SxProps<Theme> = {
  mx: "auto",
  mt: SPACE_H3,
  pt: SPACE_H2,
  width: "100%",
  height: "100%",
  maxWidth: MAX_WIDTH,
  "& .container": {
    mt: SPACE_D1,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& .filter-box": {
      width: "100%",
      minHeight: "540px",
      position: "sticky",
      top: "40px",
      borderRadius: "14px",
      height: "fit-content",
      boxShadow: "0px 0px 16px 0px #9F9F9F29",

      "& .title": {
        p: SPACE_M3,
        borderBottom: "1px solid #D0D0D0",
        fontWeight: FONT_WEIGHT_BLOD,
        fontSize: FONT_BODY_MEDIUM2,
      },
      "& .filter-items-wrapper": {
        px: SPACE_M3,
        width: "100%",
        overflow: "auto",
        maxHeight: "570px",
        "::-webkit-scrollbar": {
          width: "2px",
          mt: "23px",
        },
        "::-webkit-scrollbar-track": {
          background: "#ABDDF0px",
        },
        "::-webkit-scrollbar-thumb": {
          width: "6px",
          backgroundColor: "#568A9E90px",
          borderRadius: "20px",
        },
      },
    },
    "& .products": {
      "& .title-products": {
        py: SPACE_M3,
        fontSize: FONT_BODY_LARGE,
        fontWeight: FONT_WEIGHT_BLOD,
        borderBottom: "1px solid #D0D0D0",
      },
      "& .products-wrapper": {
        my: SPACE_D1,
        gap: SPACE_M4,
        justifyContent: "space-between",
      },
    },
  },
};
