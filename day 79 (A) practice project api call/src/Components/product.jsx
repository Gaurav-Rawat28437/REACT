import React, { useEffect, useState } from "react";

const Product = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold text-center mb-6">Products</h2>

      <div className="grid grid-cols-4 gap-6">

        {products.map((item) => (
          <div key={item.id} className="bg-white shadow p-4 rounded">

            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-full object-cover rounded mb-3"
            />

            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">${item.price}</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Product;