export const navbarValues = [
  { name: "Home", url: "/" },
  { name: "Category", url: "/category" },
  { name: "About Us", url: "/about-us" },
  { name: "Services", url: "/services" },
  { name: "Blogs", url: "/blogs" },
];

export const uniqueIdGenerator = () => {
  let counter = 0;
  return `id-${counter++}`;
};
