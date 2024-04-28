interface IProductCard {
  id: number;
  name: string;
  price: string;
  image: string;
  variant?: "sale" | "product";
  rate?: number;
}

interface ICategoryCard {
  id: number;
  name: string;
  image: string;
}

interface IUserComment {
  id: number;
  name: string;
  rate: number;
  image: string;
  carear: string;
  comment: string;
}

interface IBlog {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface IFaq {
  id: number;
  title: string;
  description: string;
}
