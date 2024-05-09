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

interface IEmptyLastCenterJustify {
  xs?: number;
  md?: number;
  even?: boolean;
  length: number;
}

interface INoOptionsComponent {
  text?: string;
  imageSrc: string;
  searchKey?: string;
}

interface IContentSection<TSx = TAny> {
  image: string | JSX.Element;
  title: string;
  content: JSX.Element;
  setting?: {
    sx?: TSx;
    reverse?: boolean;
    imageWidth?: string;
    vectorSrc?: string;
  };
}
