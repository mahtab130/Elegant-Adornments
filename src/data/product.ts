import ring from "../assets/images/data/product-ring.webp";
import ring1 from "../assets/images/data/ring-3.webp";
import ring2 from "../assets/images/data/ring-4.webp";
import ring3 from "../assets/images/data/ring-5.webp";
import ring4 from "../assets/images/data/ring-6.webp";
import ring5 from "../assets/images/data/ring-7.webp";
import ring6 from "../assets/images/data/ring-8.webp";
import crown from "../assets/images/data/product-home-crown.webp";
import earrings from "../assets/images/data/product-earring.webp";
import necklace from "../assets/images/data/product-necklace.webp";
import earrings2 from "../assets/images/data/product-earring-1.webp";
import necklaceSet from "../assets/images/data/product-necklace-set.webp";

// categoryId::

// Ring: 1
// Earrings: 2
// Bracelet : 3
// Necklaces : 4
// Ankle jewlery : 5
// Half set : 6
// Set : 7
// Crown : 8

export const productData: IProductData[] = [
  {
    id: 1,
    image: ring,
    catergoryId: 1,
    price: 40.0,
    name: "Engagement Ring",
  },
  {
    id: 2,
    catergoryId: 2,
    image: earrings,
    price: 60.0,
    name: "Blue Earring",
  },
  {
    id: 3,
    catergoryId: 4,
    image: necklace,
    price: 420.4,
    name: "Blue Necklace",
  },
  {
    id: 4,
    catergoryId: 4,
    price: 500.59,
    image: necklaceSet,
    name: "Necklace and earring set",
  },
  {
    id: 5,
    image: ring1,
    catergoryId: 1,
    price: 40.0,
    name: "Engagement Ring",
  },
  {
    id: 6,
    image: ring2,
    catergoryId: 1,
    price: 40.0,
    name: "Wedding Ring",
  },
  {
    id: 7,
    image: ring3,
    catergoryId: 1,
    price: 40.0,
    name: "Chain Ring",
  },
  {
    id: 8,
    image: ring4,
    catergoryId: 1,
    price: 40.0,
    name: "Stone Ring",
  },
  {
    id: 9,
    image: ring5,
    catergoryId: 1,
    price: 40.0,
    name: "Butterfly Ring",
  },
  {
    id: 10,
    image: ring6,
    catergoryId: 1,
    price: 40.0,
    name: "Engraved Ring",
  },
];

export const bestSellingData: Omit<IProductCard, "variant">[] = [
  {
    id: 1,
    rate: 3,
    image: ring,
    name: "Ring",
    price: 40.0,
  },
  {
    id: 2,
    rate: 4,
    price: 60.0,
    name: "Earrings",
    image: earrings2,
  },
  {
    id: 3,
    rate: 1,
    image: necklace,
    price: 420.4,
    name: "Necklaces",
  },
  {
    id: 4,
    rate: 5,
    image: crown,
    name: "Crown",
    price: 500.59,
  },
];
