import { memo, useCallback, useState } from "react";

import { useCart } from "react-use-cart";
import { useNavigate, useParams } from "react-router-dom";
import { filter, find, includes, map, slice } from "lodash";
import { Box, Collapse, Grid, Typography } from "@mui/material";

import {
  useCategoriesSearch,
  useProductSearch,
} from "../../helper/services/hooks/all";
import {
  categoryPageSX,
  filterItemsSX,
} from "../../helper/styleObjects/category";
import { ProductCard } from "../common/ProductCard";
import { arrowDownIcon } from "../other/SvgComponent";
import { CustomRadio } from "../controller/CustomRadio";
import { handleImageUrl } from "../../helper/utils/handlers";
import { EmptyLastCenterJustify } from "../common/NoOptions";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { CustomBreadcrumbs } from "../controller/CustomBreadcrumbs";
import { ShoppingModalProduct } from "../common/CategoryComponents";

type FilterCategory = "Material" | "Size" | "Brand" | "Style" | "Color";

type SelectedFilters = {
  [key in FilterCategory]: string[];
};

const Category = () => {
  const { id: currentId } = useParams();
  const navigate = useNavigate();

  const { addItem } = useCart();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    Material: [],
    Size: [],
    Brand: [],
    Style: [],
    Color: [],
  });

  const { data: categoryData } = useCategoriesSearch();
  const { data: productData } = useProductSearch();

  const { name, id } =
    find(categoryData, ({ id }) => id == currentId || "") ?? {};

  const productsByCategory = filter(
    productData,
    ({ categoryId }) => categoryId === id
  );

  const getUniqueFilterValues = (products: Products[]) => {
    const filterMap = {
      Material: new Set<string>(),
      Brand: new Set<string>(),
      Color: new Set<string>(),
    };

    products.forEach((product) => {
      filterMap.Material.add(product.material || "");
      filterMap.Brand.add(product.brand || "");
      filterMap.Color.add(product.color || "");
    });

    return Object.entries(filterMap).map(([name, values]) => ({
      name,
      items: Array.from(values).map((label, index) => ({ id: index, label })),
    }));
  };

  const filters = getUniqueFilterValues(productsByCategory);

  const handleFilterClick = (category: FilterCategory, value: string) => {
    setSelectedFilters((prev) => {
      const alreadySelected = includes(prev[category], value);
      return {
        ...prev,
        [category]: alreadySelected
          ? filter(prev[category], (v: TAny) => v !== value)
          : [...prev[category], value],
      };
    });
  };

  const filteredProducts = productsByCategory.filter((product) => {
    return Object.entries(selectedFilters).every(([key, selectedValues]) => {
      if (selectedValues.length === 0) return true;
      const productValue = product[key.toLowerCase()];
      return selectedValues.includes(productValue);
    });
  });

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
                <FilterItems
                  onClick={(label) =>
                    handleFilterClick(name as FilterCategory, label)
                  }
                  label={name}
                  items={items}
                />
              ))}
            </Grid>
          </Grid>

          <Grid xs={12} md={8.6} className="products">
            {filteredProducts?.length <= 0 ? (
              <Typography>There is no Option</Typography>
            ) : (
              <>
                <Typography className="title-products">
                  Especially for girls and women
                </Typography>
                <Grid container className="products-wrapper">
                  {map(
                    filteredProducts,
                    ({ id, imageUrl, name, price, itemTotal, quantity }) => (
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
  onClick: (label: string) => void;
}>(({ label, items, onClick }) => {
  const [openItem, setOpenItem] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleOpenItems = useCallback(() => {
    setOpenItem(!openItem);
  }, [openItem]);

  return (
    <Grid sx={filterItemsSX(openItem)}>
      <Grid className="label-wrapper" onClick={handleOpenItems}>
        <Typography className="label">{label}</Typography>
        <Box component="span" className="icon-arrow">
          {arrowDownIcon()}
        </Box>
      </Grid>
      <Collapse in={openItem}>
        <Grid className="items-wrapper">
          {map(items, ({ label }) => (
            <CustomRadio
              onClick={() => (
                onClick(label),
                setSelectedValue((prev) => (prev === label ? "" : label))
              )}
              label={label}
              checked={selectedValue === label}
            />
          ))}
        </Grid>
      </Collapse>
    </Grid>
  );
});
