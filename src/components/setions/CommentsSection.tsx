import { memo } from "react";

import { usersComment } from "../../data/users";
import { CustomSwiperComment } from "../common/CustomSwiper";

export const CommentsSection = memo(() => {
  return <CustomSwiperComment data={usersComment} />;
});
