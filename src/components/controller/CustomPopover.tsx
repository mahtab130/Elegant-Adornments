import { FC, ReactNode, useState } from "react";

import {
  Grid,
  Box,
  Theme,
  SxProps,
  Popover,
  Typography,
  PopoverProps,
} from "@mui/material";
import { find, map } from "lodash";
import { motion } from "framer-motion";

import {
  COLOR_WHITE,
  COLOR_PRIMARY,
  COLOR_TEXT_GRAY,
  COLOR_SILVER_GRAY,
} from "../../helper/constants/colors";
import {
  SPACE_D1,
  SPACE_M1,
  SPACE_M2,
  SPACE_M3,
  SPACE_S1,
  SPACE_XM1,
  SPACE_XS1,
} from "../../helper/constants/spaces";
import {
  FONT_LABEL_LARGE,
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
  FONT_LABEL_MEDIUM,
} from "../../helper/constants/fonts";
import { CustomImage } from "./CustomImage";
import { CustomButton } from "./CustomButton";
import { useNavigate } from "react-router-dom";
import { handleImageUrl } from "../../helper/utils/handlers";

export interface ICustomPopover {
  open: boolean;
  sx: SxProps<Theme>;
  children: ReactNode;
  onClose: PopoverProps["onClose"];
  anchorEl?: PopoverProps["anchorEl"];
  anchorOrigin?: PopoverProps["anchorOrigin"];
}

export const CustomPopover: FC<ICustomPopover> = ({
  sx,
  open,
  onClose,
  anchorEl,
  children,
}) => {
  return (
    <Popover
      sx={sx}
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      className="notification"
    >
      {children}
    </Popover>
  );
};

export const CategoryPaper = ({
  open,
  setOpen,
  anchorEl,
  data,
}: {
  open: ICustomPopover["open"];
  anchorEl: ICustomPopover["anchorEl"];
  setOpen: (open: ICustomPopover["open"]) => void;
  data: Categories[];
}) => {
  const [categoryId, setCategoryId] = useState<string>(
    "aa4c7b5e-efc3-4a24-b1fb-ee2we6era8wq"
  );
  const navigate = useNavigate();

  const {
    name,
    imageUrl,
    description,
    id: currentId,
  } = find(data, ({ id }) => id == categoryId) ?? {};

  const GridMotion = motion(Grid);

  return (
    <CustomPopover
      open={open}
      anchorEl={anchorEl}
      sx={categoryPopperSX}
      onClose={() => setOpen(false)}
    >
      <Grid className="cotnainer">
        <Grid className="list-category">
          {map(data, ({ name, id }) => (
            <Typography
              key={id}
              className={
                currentId == id ? "category-name active" : "category-name"
              }
              onClick={() => setCategoryId(id || "")}
            >
              {name}
            </Typography>
          ))}
        </Grid>
        <GridMotion
          item
          xs={12}
          container
          initial={{ opacity: 0 }}
          className="category-content"
          transition={{ duration: 1 }}
          animate={categoryId !== undefined ? { opacity: 1 } : { opacity: 0 }}
        >
          <Grid item xs={12} md={5.5} className="image-wrapper">
            <CustomImage
              className="image-category"
              src={handleImageUrl(imageUrl || "")}
            />
          </Grid>
          <Grid item xs={12} md={5.9} className="text-container">
            <Typography className="title">
              {name}
              <Box component="span" className="border-bottom"></Box>
            </Typography>
            <Typography className="description">{description}</Typography>
            <Grid>
              <CustomButton
                className="button"
                variant="contained"
                text="See Products"
                onClick={() => {
                  navigate(`/category/${currentId}`);
                  setOpen(false);
                }}
              />
            </Grid>
          </Grid>
        </GridMotion>
      </Grid>
    </CustomPopover>
  );
};

const categoryPopperSX: SxProps<Theme> = {
  width: "fit-contnet",
  "& .MuiPaper-root": {
    mt: SPACE_M1,
    maxWidth: { xs: "370px", md: "822px" },
    boxShadow: "none",
    borderRadius: "8px",
    borderTopRightRadius: "0",
    borderTopLeftRadius: "0",
    top: { xs: "100px !important", md: "16px" },
    backgroundColor: COLOR_WHITE,
    "& .cotnainer": {
      p: { xs: "14px", md: SPACE_M2 },
      display: "flex",
      "& .list-category": {
        pr: SPACE_M2,
        display: "flex",
        rowGap: SPACE_XS1,
        flexDirection: "column",
        borderRight: "1px solid" + COLOR_PRIMARY + "80",
        "& .category-name": {
          cursor: "pointer",
          position: "relative",
          width: "max-content",
          color: COLOR_TEXT_GRAY,
          fontSize: FONT_LABEL_LARGE,
          fontWeight: FONT_WEIGHT_BLOD,
          borderBottom: "1px solid transparent",
          "&:before": {
            right: 0,
            content: "''",
            width: "100%",
            height: "1px",
            display: "block",
            bottom: "-2px",
            position: "absolute",
            transform: " scaleX(0)",
            background: COLOR_PRIMARY + "80",
            transformOrigin: "bottom right",
            transition: "transform .3s ease",
          },
          "&.active": {
            "&:before": {
              transform: " scaleX(1)",
              transformOrigin: "bottom left",
            },
          },
          "&:hover": {
            "&:before": {
              transform: " scaleX(1)",
            },
          },
        },
      },
      "& .category-content": {
        mx: SPACE_XM1,
        gap: SPACE_XM1,
        display: "flex",
        alignItems: "center",
        "& .image-wrapper": {
          width: "250px",
          height: "340px",
          borderRadius: "8px",
          overflow: "hidden",
          display: { xs: "none", md: "block" },
          "& .image-category": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        },
        "& .text-container": {
          display: "flex",
          flexDirection: "column",
          "& .title": {
            display: "flex",
            lineHeight: "20px",
            width: "fit-content",
            flexDirection: "column",
            fontSize: FONT_BODY_MEDIUM2,
            fontWeight: FONT_WEIGHT_BLOD,
            "& .border-bottom": {
              width: "60%",
              height: "1px",
              backgroundColor: COLOR_PRIMARY,
            },
          },
          "& .description": {
            mt: SPACE_XS1,
            lineHeight: "18px",
            color: COLOR_SILVER_GRAY,
            fontWeight: FONT_WEIGHT_BLOD,
            fontSize: FONT_LABEL_MEDIUM,
          },
          "& .button": {
            mt: SPACE_D1,
            py: SPACE_S1,
            px: SPACE_M3,
            borderRadius: "8px",
            fontSize: FONT_LABEL_MEDIUM,
          },
        },
      },
    },
  },
};
