import products from "./data/products.json";

const data = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 300);
  });
};

export const api = {
  data,
};
