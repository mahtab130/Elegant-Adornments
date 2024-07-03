interface IProductData {
  id: number;
  name: string;
  price: number;
  image: string;
  rate?: number;
  catergoryId?: number;
  quantity?: number;
  itemTotal?: number;
}

interface ICategoryData {
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

interface IBlogData {
  id: number;
  image: string;
  title: string;
  date?: string;
  writer?: string;
  studyTime?: string;
  description: string;
}

interface IFaqData {
  id: number;
  title: string;
  description: string;
}
