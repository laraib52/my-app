import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return res.json();
};

const ProductDetail = () => {
  const { id } = useParams();

  const { data: product, error, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });

  if (isLoading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Correct Image Display */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain my-4"
        />
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-800">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
