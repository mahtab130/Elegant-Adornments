import { Grid, SxProps, Theme, Typography } from "@mui/material";
import { FC, useState } from "react";
import { COLOR_SECEONDRY, COLOR_WHITE } from "../../helper/constants/colors";
import { CustomTextfield } from "../controller/CustomTextfield";
import { clearIcon, searchOutlineIcon } from "../other/SvgComponent";
import { SPACE_D1, SPACE_H3, SPACE_S1 } from "../../helper/constants/spaces";
import {
  FONT_BODY_MEDIUM2,
  FONT_BODY_SMALL,
  FONT_TITLE_SMALL,
  FONT_WEIGHT_BLOD,
} from "../../helper/constants/fonts";
import { bestSellingData } from "../../data/product";
import { filter, includes, map, toLower } from "lodash";
import { ProductCard } from "../common/ProductCard";
import { useNavigate } from "react-router-dom";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { CustomImage } from "../controller/CustomImage";

const SearchPage: FC = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string | undefined>(undefined);

  const filteredData = filter(bestSellingData, ({ name }) =>
    includes(name, toLower(keyword))
  );

  return (
    <Grid sx={searchSX}>
      <Grid className="container">
        <CustomTextfield
          variant="standard"
          endIcon={clearIcon()}
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
          </Grid>
        ) : (
          <Grid className="empty-section">
            <CustomImage className="empty-image" src={""} />
            <Typography className="keword-not-exist">
              NO result for “{keyword}”
            </Typography>
            <Typography className="not-exist-text">
              Soory, we cant find the page your looking for
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default SearchPage;
const searchSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: COLOR_SECEONDRY,
  "& .container": {
    mt: SPACE_H3,
    pt: SPACE_H3,
    width: "100%",
    display: "flex",
    maxWidth: "1080px",
    flexDirection: "column",
    "& .textfield-wrapper": {
      width: "100%",
      "& .MuiInputBase-root": {
        "& .MuiInputBase-input": {
          pb: "0",
          ml: SPACE_S1,
          lineHeight: "0",
          fontSize: FONT_BODY_SMALL,
        },
      },
    },
    "& .products-wrapper": {
      mt: SPACE_D1,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    "& .empty-section": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      "& .keword-not-exist": {
        fontSize: FONT_TITLE_SMALL,
        color: COLOR_WHITE,
        fontWeight: FONT_WEIGHT_BLOD,
      },
      "& .not-exist-text": {
        color: COLOR_WHITE,
        fontSize: FONT_BODY_MEDIUM2,
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
  },
};
