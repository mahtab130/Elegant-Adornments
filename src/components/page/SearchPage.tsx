import { FC, useMemo, useState } from "react";

import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { filter, includes, map, toLower } from "lodash";

import {
  NoOptionsComponent,
  EmptyLastCenterJustify,
} from "../common/NoOptions";
import { ProductCard } from "../common/ProductCard";
import { productData } from "../../data/product";
import { searchOutlineIcon } from "../other/SvgComponent";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { CustomTextfield } from "../controller/CustomTextfield";

import noOptions from "../../assets/images/vectors/404.webp";
import { searchSX } from "../../helper/styleObjects/searchPage";

const SearchPage: FC = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState<string | undefined>(undefined);

  const filteredData = useMemo(
    () =>
      filter(productData, ({ name }) =>
        includes(toLower(name), toLower(keyword))
      ),
    [keyword]
  );

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
          filteredData?.length > 0 ? (
            <Grid container className="products-wrapper">
              {map(filteredData, ({ id, image, name, price }, index) => (
                <Grid
                  item
                  xs={12}
                  key={id + index}
                  md={2.85}
                  onClick={() => navigate("/")}
                >
                  <AnimationSlideIn direction={index < 2 ? "left" : "right"}>
                    <ProductCard
                      id={id}
                      name={name}
                      price={price}
                      image={image}
                      variant="search"
                    />
                  </AnimationSlideIn>
                </Grid>
              ))}
              <EmptyLastCenterJustify
                even
                md={2.85}
                length={filteredData?.length}
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
