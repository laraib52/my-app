import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Product Store
        </h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <div className="text-center text-xl font-semibold text-gray-600 mt-6">
          Tailwind is Working!
        </div>
      </div>
    </Router>
  );
}

export default App;
