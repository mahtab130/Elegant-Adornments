import { memo } from "react";

import { Box, BoxProps } from "@mui/material";

interface ICustomImage extends BoxProps {
  src: string;
  className?: string;
}

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
