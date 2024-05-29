import { ElementType, ReactNode, memo, useMemo } from "react";

import {
  Box,
  Theme,
  SxProps,
  Breadcrumbs,
  BreadcrumbsTypeMap,
} from "@mui/material";
import { map } from "lodash";
import { useNavigate } from "react-router-dom";
import { OverrideProps } from "@mui/material/OverridableComponent";

import {
  FONT_WEIGHT_BLOD,
  FONT_LABEL_MEDIUM,
} from "../../helper/constants/fonts";
import {
  COLOR_TEXT,
  COLOR_LIGHT_GRAY,
  COLOR_MEDIUM_GRAY,
} from "../../helper/constants/colors";
import { arrowRight2Icon } from "../other/SvgComponent";
import { SPACE_S3, SPACE_XS1 } from "../../helper/constants/spaces";

interface ILocalBreadcrumbs
  extends OverrideProps<BreadcrumbsTypeMap<object, "nav">, ElementType> {
  sx?: SxProps<Theme>;
  separator?: ReactNode;
  breadcrumbs: ILocalBreadcrumbsItems[];
}

interface ILocalBreadcrumbsItems {
  name: string;
  link: string;
  clickHandler?: (link: string) => void;
}

export const CustomBreadcrumbs = memo<ILocalBreadcrumbs>(
  ({ separator, breadcrumbs }) => {
    const navigate = useNavigate();

    const defaultBreadcrumbsMaterial = useMemo(
      () => (
        <Box
          component="div"
          sx={{
            width: "16px",
            height: "16px",
            "& svg": { width: "16px", height: "16px" },
          }}
        >
          {arrowRight2Icon(COLOR_LIGHT_GRAY)}
        </Box>
      ),
      []
    );

    return (
      <Breadcrumbs
        className="breadcrumbs"
        separator={separator ?? defaultBreadcrumbsMaterial}
        aria-label="breadcrumb"
        sx={customBreadcrumbsSX}
      >
        {map(breadcrumbs, ({ name, link }, index) => (
          <Box
            key={index}
            className="breadcrumbs-item"
            onClick={() => navigate(link)}
          >
            {name}
          </Box>
        ))}
      </Breadcrumbs>
    );
  }
);

const customBreadcrumbsSX: SxProps<Theme> = {
  mt: SPACE_XS1,
  "& .breadcrumbs-item": {
    cursor: "pointer",
    textDecoration: "none",
    color: COLOR_MEDIUM_GRAY,
    fontSize: FONT_LABEL_MEDIUM,
    fontWeight: FONT_WEIGHT_BLOD,
    transition: "0.3s",
    "&:hover": {
      color: COLOR_TEXT,
    },
  },
  "& .MuiBreadcrumbs-separator": {
    marginX: SPACE_S3,
  },
  "& li:last-child .breadcrumbs-item": {
    pointerEvents: "none",
    color: COLOR_TEXT,
  },
};
