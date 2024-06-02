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
  {
    id: 11,
    image: diamondZhupingWomensRing,
    catergoryId: 1,
    price: 430.0,
    name: "Diamond Zhuping Women's Ring",
  },
  {
    id: 12,
    image: diamondZhupingWomensRing2,
    catergoryId: 1,
    price: 240.0,
    name: "Diamond Zhuping Women's Ring",
  },
  {
    id: 13,
    image: goldWomensSolitaireRing,
    catergoryId: 1,
    price: 440.0,
    name: "Gold Womens Solitair Ring",
  },
  {
    id: 14,
    image: goldWomensSolitaireRing2,
    catergoryId: 1,
    price: 540.0,
    name: "Gold Women's Solitaire Ring",
  },
  {
    id: 15,
    image: goldZhupingWomensRing2,
    catergoryId: 1,
    price: 430.0,
    name: "Gold Zhuping Women's Ring",
  },
  {
    id: 16,
    image: goldZhupingWomensRing,
    catergoryId: 1,
    price: 140.0,
    name: "Gold Zhuping Women's Ring",
  },
  {
    id: 17,
    image: womensSolitaireRing,
    catergoryId: 1,
    price: 380.0,
    name: "women's Solitaire Ring",
  },
  {
    id: 18,
    image: zhupingWomensRing2,
    catergoryId: 1,
    price: 320.0,
    name: "Zhuping Womens Ring",
  },
  {
    id: 19,
    image: zhupingWomensRing,
    catergoryId: 1,
    price: 200.0,
    name: "Zhuping Women's Ring",
  },
  {
    id: 20,
    image: blackZhupingWomensRing,
    catergoryId: 1,
    price: 340.0,
    name: "Black Zhuping Women's Ring",
  },
  {
    id: 21,
    image: blueZhupingWomensRing,
    catergoryId: 1,
    price: 3590.0,
    name: "Blue Zhuping Women's Ring",
  },
  {
    id: 22,
    image: greenZhupingWomenRing,
    catergoryId: 1,
    price: 4550.0,
    name: "Green Zhuping Women's Ring",
  },
  {
    id: 23,
    image: purpleZhupingWomensRing,
    catergoryId: 1,
    price: 3840.0,
    name: "Purple Zhuping Women's Ring",
  },
  {
    id: 24,
    image: simpleZhupingWomenRing,
    catergoryId: 1,
    price: 330.0,
    name: "Simple Zhuping Women's Ring",
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
