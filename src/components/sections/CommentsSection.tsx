import { memo, useCallback, useMemo } from "react";

import { CustomSwiperComment } from "../controller/CustomSwiper";
import {
  useCommentSearch,
  useUserSearch,
} from "../../helper/services/hooks/all";

import vectorYellow from "../../assets/images/vectors/vector-flower-orange.webp";
import { map } from "lodash";
import { SwiperSlide } from "swiper/react";
import { ContentSection } from "../common/ContentSection";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CustomRating } from "../controller/CustomRating";
import {
  customerIcon,
  arrowLeftIcon,
  arrowRightIcon,
} from "../other/SvgComponent";
import { handleImageUrl } from "../../helper/utils/handlers";

export const CommentsSection = memo(() => {
  const { data: commendData } = useCommentSearch();

  const { data: userData } = useUserSearch();
  const userMap = useMemo(() => {
    const map: Record<string, Users> = {};
    userData?.forEach((user: TAny) => {
      map[user.id] = user;
    });
    return map;
  }, [userData]);

  const imageComponent = useCallback(
    (src: string) => (
      <>
        <Box component="img" className="image" src={handleImageUrl(src)} />
        <Box component="img" src={vectorYellow} className="vector-wrapper" />
      </>
    ),
    []
  );

  return (
    <CustomSwiperComment
      content={
        <>
          {map(commendData, ({ productId, comment, rate, userId }, index) => {
            const { firstName, lastName, email, imageUrl } = userMap[userId];

            return (
              <SwiperSlide key={index} className="swiper-slide">
                <ContentSection
                  image={imageComponent(handleImageUrl(imageUrl || ""))}
                  title={"Customers comments"}
                  setting={{
                    sx: {
                      "& .left-section": {
                        display: { xs: "none", md: "flex" },
                        "& .image": {
                          height: { md: "520px" },
                          objectFit: "cover",
                          borderRadius: "14px",
                        },
                      },
                    },
                  }}
                  content={
                    <ContentComment
                      rate={rate}
                      comment={comment}
                      productId={productId}
                      userEmail={email || ""}
                      userName={firstName + " " + lastName}
                      imageUrl={handleImageUrl(imageUrl || "")}
                      classNames={{ next: "swiper-next", prev: "swiper-prev" }}
                    />
                  }
                />
              </SwiperSlide>
            );
          })}
        </>
      }
    />
  );
});

const ContentComment = memo<IContentComment>(
  ({
    productId,
    comment,
    rate,
    imageUrl,
    userEmail,
    userName,
    classNames: { next, prev },
  }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    console.log("🚀 ~ productId:", productId);
    return (
      <Grid className="content">
        <CustomRating readOnly value={rate} />
        <Typography className="description">{comment}</Typography>
        <Grid className="personal-info">
          {isMobile ? (
            <Box component="img" className="image-xs" src={imageUrl} />
          ) : (
            ""
          )}
          <Grid className="texts-wrapper">
            <Typography className="name">
              {customerIcon()} {userName}
            </Typography>
            <Typography className="job">{userEmail}</Typography>
          </Grid>
        </Grid>
        <Grid className="swip-buttons">
          <Box component="div" className={prev}>
            {arrowLeftIcon()}
          </Box>
          <Box component="div" className={next}>
            {arrowRightIcon()}
          </Box>
        </Grid>
      </Grid>
    );
  }
);
