import { memo } from "react";

import { usersComment } from "../../data/users";
import { CustomSwiperComment } from "../controller/CustomSwiper";

export const CommentsSection = memo(() => {
  return <CustomSwiperComment data={usersComment} />;
});
