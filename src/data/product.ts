import ring1 from "../assets/images/data/ring-3.webp";
import ring2 from "../assets/images/data/ring-4.webp";
import ring3 from "../assets/images/data/ring-5.webp";
import ring4 from "../assets/images/data/ring-6.webp";
import ring5 from "../assets/images/data/ring-7.webp";
import ring6 from "../assets/images/data/ring-8.webp";
import ring from "../assets/images/data/product-ring.webp";
import crown from "../assets/images/data/product-home-crown.webp";
import earrings from "../assets/images/data/product-earring.webp";
import necklace from "../assets/images/data/product-necklace.webp";
import earrings2 from "../assets/images/data/product-earring-1.webp";
import necklaceSet from "../assets/images/data/product-necklace-set.webp";
import zhupingWomensRing from "../assets/images/data/Zhuping-womens-ring.webp";
import zhupingWomensRing2 from "../assets/images/data/Zhuping-womens-ring-2.webp";
import womensSolitaireRing from "../assets/images/data/Womens-solitaire-ring.webp";
import blueZhupingWomensRing from "../assets/images/data/blue-Zhuping-womens-ring.webp";
import greenZhupingWomenRing from "../assets/images/data/green-Zhuping-women-ring.webp";
import simpleZhupingWomenRing from "../assets/images/data/simple-Zhuping-women-ring.webp";
import blackZhupingWomensRing from "../assets/images/data/black-Zhuping-womens-ring.webp";
import goldZhupingWomensRing2 from "../assets/images/data/Gold-Zhuping-womens-ring-2.webp";
import goldZhupingWomensRing from "../assets/images/data/Diamond-Zhuping-womens-ring.webp";
import purpleZhupingWomensRing from "../assets/images/data/purple-Zhuping-womens-ring.webp";
import goldWomensSolitaireRing from "../assets/images/data/Gold-Womens-solitaire-ring.webp";
import diamondZhupingWomensRing from "../assets/images/data/Diamond-Zhuping-womens-ring.webp";
import goldWomensSolitaireRing2 from "../assets/images/data/Gold-Womens-solitaire-ring-2.webp";
import diamondZhupingWomensRing2 from "../assets/images/data/Diamond-Zhuping-womens-ring-2.webp";

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
    rate: 3,
    catergoryId: 1,
    price: 40.0,
    name: "Engagement Ring",
    quantity: 0,
  },
  {
    id: 2,
    catergoryId: 2,
    image: earrings,
    rate: 3,
    price: 60.0,
    name: "Blue Earring",
    quantity: 0,
  },
  {
    id: 3,
    catergoryId: 4,
    image: necklace,
    rate: 5,
    price: 420,
    name: "Blue Necklace",
    quantity: 0,
  },
  {
    id: 4,
    catergoryId: 4,
    price: 500,
    image: necklaceSet,
    rate: 5,
    name: "Necklace and earring set",
    quantity: 0,
  },
  {
    id: 5,
    image: ring1,
    rate: 1,
    catergoryId: 1,
    price: 40.0,
    name: "Engagement Ring",
    quantity: 0,
  },
  {
    id: 6,
    image: ring2,
    rate: 3,
    catergoryId: 1,
    price: 40.0,
    name: "Wedding Ring",
    quantity: 0,
  },
  {
    id: 7,
    image: ring3,
    rate: 4,
    catergoryId: 1,
    price: 40.0,
    name: "Chain Ring",
    quantity: 0,
  },
  {
    id: 8,
    image: ring4,
    rate: 2,
    catergoryId: 1,
    price: 40.0,
    name: "Stone Ring",
    quantity: 0,
  },
  {
    id: 9,
    image: ring5,
    rate: 2,
    catergoryId: 1,
    price: 40.0,
    name: "Butterfly Ring",
    quantity: 0,
  },
  {
    id: 10,
    image: ring6,
    rate: 2,
    catergoryId: 1,
    price: 40.0,
    name: "Engraved Ring",
    quantity: 0,
  },
  {
    id: 11,
    image: diamondZhupingWomensRing,
    rate: 2,
    catergoryId: 1,
    price: 430.0,
    name: "Diamond Zhuping Women's Ring",
    quantity: 0,
  },
  {
    id: 12,
    image: diamondZhupingWomensRing2,
    rate: 5,
    catergoryId: 1,
    price: 240.0,
    name: "Diamond Zhuping Women's Ring",
    quantity: 0,
  },
  {
    id: 13,
    image: goldWomensSolitaireRing,
    rate: 2,
    catergoryId: 1,
    price: 440.0,
    name: "Gold Womens Solitair Ring",
    quantity: 0,
  },
  {
    id: 14,
    image: goldWomensSolitaireRing2,
    rate: 3,
    catergoryId: 1,
    price: 540.0,
    name: "Gold Women's Solitaire Ring",
    quantity: 0,
  },
  {
    id: 15,
    image: goldZhupingWomensRing2,
    rate: 3,
    catergoryId: 1,
    price: 430.0,
    name: "Gold Zhuping Women's Ring",
    quantity: 0,
  },
  {
    id: 16,
    image: goldZhupingWomensRing,
    rate: 5,
    catergoryId: 1,
    price: 140.0,
    name: "Gold Zhuping Women's Ring",
    quantity: 0,
  },
  {
    id: 17,
    image: womensSolitaireRing,
    rate: 1,
    catergoryId: 1,
    price: 380.0,
    name: "women's Solitaire Ring",
    quantity: 0,
  },
  {
    id: 18,
    image: zhupingWomensRing2,
    rate: 1,
    catergoryId: 1,
    price: 320.0,
    name: "Zhuping Womens Ring",
    quantity: 0,
  },
  {
    id: 19,
    image: zhupingWomensRing,
    rate: 2,
    catergoryId: 1,
    price: 200.0,
    name: "Zhuping Women's Ring",
    quantity: 0,
  },
  {
    id: 20,
    image: blackZhupingWomensRing,
    rate: 3,
    catergoryId: 1,
    price: 340.0,
    name: "Black Zhuping Women's Ring",
    quantity: 0,
  },
  {
    id: 21,
    image: blueZhupingWomensRing,
    rate: 4,
    catergoryId: 1,
    price: 3590.0,
    name: "Blue Zhuping Women's Ring",
    quantity: 0,
  },
  {
    id: 22,
    image: greenZhupingWomenRing,
    rate: 3,
    catergoryId: 1,
    price: 4550.0,
    name: "Green Zhuping Women's Ring",
    quantity: 0,
  },
  {
    id: 23,
    image: purpleZhupingWomensRing,
    rate: 3,
    catergoryId: 1,
    price: 3840.0,
    name: "Purple Zhuping Women's Ring",
    quantity: 0,
  },
  {
    id: 24,
    image: simpleZhupingWomenRing,
    rate: 3,
    catergoryId: 1,
    price: 330.0,
    name: "Simple Zhuping Women's Ring",
    quantity: 0,
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
