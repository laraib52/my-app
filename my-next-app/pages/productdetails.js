import { useRouter } from "next/router";
import PrivateRoute from "@/components/PrivateRoute";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productData = {
      1: { name: "Laptop", price: "$800", image: "/images/laptop.jpg", description: "A high-end laptop for professionals." },
      2: { name: "Smartphone", price: "$500", image: "/images/phone.jpg", description: "Latest smartphone with great features." },
      3: { name: "Headphones", price: "$200", image: "/images/headphones.jpg", description: "Noise-canceling headphones for audiophiles." },
    };

    if (id) setProduct(productData[id]);
  }, [id]);

  if (!product) return <p className="text-center">Loading product details...</p>;

  return (
    <PrivateRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mt-4">{product.price}</p>
        </div>
      </div>
    </PrivateRoute>
  );
}
