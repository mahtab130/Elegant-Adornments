import { Pagination, PaginationProps, SxProps, Theme } from "@mui/material";
import { memo } from "react";
import { COLOR_SECEONDRY, COLOR_WHITE } from "../../helper/constants/colors";
import {
  FONT_TITLE_SMALL,
  FONT_WEIGHT_BLOD,
} from "../../helper/constants/fonts";

interface ICustomPagination extends PaginationProps {
  name?: string;
}

export const CustomPagination = memo<ICustomPagination>(({ ...props }) => {
  return (
    <Pagination
      shape="rounded"
      variant="outlined"
      sx={paginationSX}
      {...props}
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
  },
};
