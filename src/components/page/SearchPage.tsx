import { FC, useState } from "react";

import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { map } from "lodash";

import {
  NoOptionsComponent,
  EmptyLastCenterJustify,
} from "../common/NoOptions";
import { ProductCard } from "../common/ProductCard";
import { searchOutlineIcon } from "../other/SvgComponent";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { CustomTextfield } from "../controller/CustomTextfield";

import noOptions from "../../assets/images/vectors/404.webp";
import { handleImageUrl } from "../../helper/utils/handlers";
import { searchSX } from "../../helper/styleObjects/searchPage";
import { useProductSearch } from "../../helper/services/hooks/all";

const SearchPage: FC = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState<string | undefined>(undefined);

  const { data: productData } = useProductSearch({ search: keyword });

  return (
    <Grid sx={searchSX}>
      <Grid className="container">
        <CustomTextfield
          variant="standard"
          placeholder="Search..."
          className="search-input"
          setting={{ hasDelete: true }}
          startIcon={<Box component="span">{searchOutlineIcon()}</Box>}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {keyword ? (
          productData?.length > 0 ? (
            <Grid container className="products-wrapper">
              {map(productData, ({ id, imageUrl, name, price }, index) => (
                <Grid
                  item
                  xs={12}
                  key={id + index}
                  md={2.85}
                  onClick={() => navigate(`/products/${id}`)}
                >
                  <AnimationSlideIn direction={"right"}>
                    <ProductCard
                      id={id}
                      name={name}
                      price={price}
                      image={handleImageUrl(imageUrl)}
                      variant="search"
                    />
                  </AnimationSlideIn>
                </Grid>
              ))}
              <EmptyLastCenterJustify
                even
                md={2.85}
                length={productData?.length}
              />
            </Grid>
          ) : (
            <NoOptionsComponent
              imageSize="large"
              imageSrc={noOptions}
              searchKey={keyword}
            />
          )
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

export default SearchPage;
