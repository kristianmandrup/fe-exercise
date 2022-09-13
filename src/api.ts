import type { Product } from "./Product";
import products from "./data/products.json";

const data = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 300);
  });
};

export const api = {
  data,
};
