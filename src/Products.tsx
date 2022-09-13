import { Product } from "./Product";

export const Products = ({ products }: any) => {
  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.sku}>{product.name}</li>
      ))}
    </ul>
  );
};
