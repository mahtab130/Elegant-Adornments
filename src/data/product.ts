import ring from "../assets/images/data/ring.png";
import crown from "../assets/images/data/crown2.png";
import earrings2 from "../assets/images/data/ring3.png";
import earrings from "../assets/images/data/errings.png";
import necklace from "../assets/images/data/necklace.png";
import necklaceSet from "../assets/images/data/set-necklace.png";

export const productData: Omit<IProductCard, "variant" | "rate">[] = [
  {
    id: 1,
    image: ring,
    name: "Ring",
    price: "$40.00",
  },
  {
    id: 2,
    image: earrings,
    price: "$60.00",
    name: "Earrings",
  },
  {
    id: 3,
    image: necklace,
    price: "$420.40",
    name: "Necklaces",
  },
  {
    id: 4,
    price: "$500.59",
    image: necklaceSet,
    name: "Necklace and earring set",
  },
];

export const bestSellingData: Omit<IProductCard, "variant">[] = [
  {
    id: 1,
    rate: 3,
    image: ring,
    name: "Ring",
    price: "$40.00",
  },
  {
    id: 2,
    rate: 4,
    price: "$60.00",
    name: "Earrings",
    image: earrings2,
  },
  {
    id: 3,
    rate: 1,
    image: necklace,
    price: "$420.40",
    name: "Necklaces",
  },
  {
    id: 4,
    rate: 5,
    image: crown,
    name: "Crown",
    price: "$500.59",
  },
];
