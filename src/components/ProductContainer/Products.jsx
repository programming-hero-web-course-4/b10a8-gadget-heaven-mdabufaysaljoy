import React from "react";
import Product from "./Product";
import { useLoaderData, useLocation } from "react-router-dom";

const Products = () => {
  const getProducts = useLoaderData();
  const location = useLocation();
  const [products, setProducts] = React.useState(getProducts);

  React.useEffect(() => {
    const categoryMap = {
      "/laptop": "Laptop",
      "/phone": "Mobile",
      "/accessories": "Accessories",
      "/smart-watch": "Smartwatch",
      "/mac": "MacBook",
      "/ios": "Iphone",
    };
    
    const category = categoryMap[location.pathname];
    if (category) {
      setProducts(
        getProducts.filter((product) => product.category === category)
      );
    } else {
      setProducts(getProducts); 
    }
  }, [location.pathname, getProducts]);
  console.log(products);
  return (
    <>
      {products.length ? (
        <div className="grid md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-center w-full text-red-500">
          No products found
        </h1>
      )}
    </>
  );
};

export default Products;
