import {
  Box,
  Pagination,
  PaginationItem,
  PaginationProps,
  SxProps,
  Theme,
} from "@mui/material";
import { memo } from "react";
import { COLOR_SECEONDRY, COLOR_WHITE } from "../../helper/constants/colors";
import {
  FONT_TITLE_SMALL,
  FONT_WEIGHT_BLOD,
} from "../../helper/constants/fonts";
import { arrowRight3Icon } from "../other/SvgComponent";

interface ICustomPagination extends PaginationProps {
  name?: string;
}

export const CustomPagination = memo<ICustomPagination>(({ ...props }) => {
  const nextIcon = () => <Box className="icon">{arrowRight3Icon()}</Box>;

  return (
    <Pagination
      shape="rounded"
      variant="outlined"
      sx={paginationSX}
      {...props}
      renderItem={(item) => (
        <PaginationItem
          slots={{ next: nextIcon }}
          className="pagination-item"
          {...item}
        />
      )}
    />
  );
});

const paginationSX: SxProps<Theme> = {
  "& .MuiPaginationItem-root": {
    width: "46px",
    height: "46px",
    borderRadius: "8px",
    color: COLOR_SECEONDRY,
    fontSize: FONT_TITLE_SMALL,
    fontWeight: FONT_WEIGHT_BLOD,
    border: "1px solid" + COLOR_SECEONDRY,
    "&.Mui-selected": {
      color: COLOR_WHITE,
      backgroundColor: COLOR_SECEONDRY + "!important",
    },
    "& .icon": {
      width: "24px",
      height: "100%",
    },
  },
};
