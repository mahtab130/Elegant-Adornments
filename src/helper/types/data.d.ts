interface IProductCard {
  id: number;
  name: string;
  price: string;
  image: string;
  rate?: number;
  variant?: "sale" | "product" | "search";
}

interface ICategoryCard {
  id: number;
  name: string;
  image: string;
  thumbnail?: string;
  description?: string;
}

interface IUserComment {
  id: number;
  name: string;
  rate: number;
  image: string;
  carear: string;
  comment: string;
}

interface IBlogCard {
  id: number;
  image: string;
  title: string;
  description: string;
  navigateString?: string;
  writer?: string;
  date?: string;
  studyTime?: string;
  content?: string;
}

interface IFaqData {
  id: number;
  title: string;
  description: string;
  expandedId?: number;
  handleExpansion?: (id: number) => void;
}
