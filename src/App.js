import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

// ✅ Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("loggedInUser");
      setIsAuthenticated(!!user);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Product Store
          </h1>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Private Route for Dashboard */}
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
