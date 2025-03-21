import { useState, useEffect } from "react";
import Link from "next/link";
import PrivateRoute from "@/components/PrivateRoute";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Laptop", price: "$800", image: "/images/laptop.jpg", category: "Electronics" },
        { id: 2, name: "Smartphone", price: "$500", image: "/images/phone.jpg", category: "Mobiles" },
        { id: 3, name: "Headphones", price: "$200", image: "/images/headphones.jpg", category: "Accessories" },
      ]);
    }, 1000);
  }, []);

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Product Store</h1>

        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none">
            <option>Sort: Low to High</option>
            <option>Sort: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-lg font-bold text-blue-600">{product.price}</p>
              <Link href={`/productdetails?id=${product.id}`} className="block mt-3 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PrivateRoute>
  );
}
