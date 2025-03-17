import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product Store</h1>
      <input 
        type="text" 
        placeholder="Search products..." 
        className="border p-2 w-full mb-4 rounded-lg shadow-sm"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
