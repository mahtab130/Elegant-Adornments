interface IContentSection {
  image: string | JSX.Element;
  title: string;
  content: JSX.Element;
  setting?: {
    sx?: SxProps<Theme>;
    reverse?: boolean;
    imageWidth?: string;
  };
}

interface ICustomSwiperComment {
  data: IUserComment[];
}

interface IContentComment extends Omit<IUserComment, "id" | "image"> {
  classNames: { prev: string; next: string };
}

interface ICustomTitle {
  title?: string;
  setting?: {
    color?: string;
    iconColor?: string;
  };
}
