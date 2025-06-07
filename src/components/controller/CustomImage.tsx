import { memo, ReactEventHandler, ReactNode } from "react";

import {
  Avatar,
  AvatarTypeMap,
  Box,
  BoxProps,
  Grid,
  SxProps,
  Theme,
} from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import { isString } from "lodash";
import { COLOR_WHITE, COLOR_PRIMARY } from "../../helper/constants/colors";
import { FONT_WEIGHT_BLOD } from "../../helper/constants/fonts";

interface ICustomImage extends BoxProps {
  src: TAny;
  className?: string;
}

type ICustomImages = Omit<
  OverrideProps<AvatarTypeMap<object, "div">, React.ElementType>,
  "src"
> & {
  hasBorder?: boolean;
  defaultImage?: string;
  src?: string;
  variant?: "circular" | "rounded" | "square" | undefined;
  onLoad?: ReactEventHandler<HTMLDivElement> | undefined;
  sx?: SxProps<Theme>;
};

export const CustomImage = memo<ICustomImage>(
  ({ src, className, ...props }) => {
    return (
      <Box
        src={src}
        {...props}
        component="img"
        className={className + " custom-image"}
      />
    );
  }
);

export const CustomAvatar = ({
  src,
  onLoad,
  className,
  hasBorder,
  defaultImage,
  ...props
}: ICustomImages) => {
  const { variant } = props;
  return (
    <Grid sx={customAvatarSX(hasBorder, src)} className="image-avatar">
      <Avatar
        variant={variant}
        onLoad={onLoad}
        {...{
          ...props,
          className: className + " custom-avatar",
        }}
        src={src}
      >
        <Box
          className="default-image-avatar"
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            cursor: "default",
          }}
          src={defaultImage}
        />
      </Avatar>
    </Grid>
  );
};

const customAvatarSX = (
  hasBorder?: boolean,
  src?: string | ReactNode
): SxProps<Theme> => ({
  "& .custom-avatar": {
    background: "unset !important", //!
    border: hasBorder ? `4px solid #EBF2FF` : "unset",
  },
  "& .profile-avatar": {
    cursor: "pointer !important",
  },
  "& .profile-box": {
    display: "flex",
    cursor: "pointer",
    color: COLOR_WHITE,
    alignItems: "center",
    justifyContent: "center",
    background: COLOR_PRIMARY,
    borderRadius: "50%",
  },
  "& .custom-icon": {
    borderRadius: "50%",
    background: "unset !important",
    border: hasBorder && !isString(src) ? `4px solid $EBF2FF` : "unset",
  },
  "& .username-text": {
    fontWeight: FONT_WEIGHT_BLOD,
    fontSize: "14px",
  },
});
