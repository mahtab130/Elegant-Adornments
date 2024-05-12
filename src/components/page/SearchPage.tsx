import { FC, useMemo, useState } from "react";

import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { filter, includes, map, toLower } from "lodash";

import {
  NoOptionsComponent,
  EmptyLastCenterJustify,
} from "../common/NoOptions";
import { ProductCard } from "../common/ProductCard";
import { bestSellingData } from "../../data/product";
import { searchOutlineIcon } from "../other/SvgComponent";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { CustomTextfield } from "../controller/CustomTextfield";

import noOptions from "../../assets/images/vectors/404.webp";
import { searchSX } from "../../helper/styleObjects/searchPage";

const SearchPage: FC = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState<string | undefined>(undefined);
  console.log("🚀 ~ keyword:", keyword);

  const filteredData = useMemo(
    () =>
      filter(bestSellingData, ({ name }) =>
        includes(toLower(name), toLower(keyword))
      ),
    [keyword]
  );

  return (
    <Grid sx={searchSX}>
      <Grid className="container">
        <CustomTextfield
          hasDelete
          variant="standard"
          placeholder="Search..."
          className="search-input"
          startIcon={searchOutlineIcon()}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {filteredData?.length > 0 ? (
          <Grid container className="products-wrapper">
            {map(filteredData, ({ id, image, name, price }, index) => (
              <Grid
                item
                xs={12}
                key={id}
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
          <NoOptionsComponent imageSrc={noOptions} searchKey={keyword} />
        )}
      </Grid>
    </Grid>
  );
};

export default SearchPage;
