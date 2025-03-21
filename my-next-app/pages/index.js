import { useState } from "react";
import { useRouter } from "next/router";
import { users } from "@/data/users"; // Importing users from the data folder

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const foundUser = users.find((user) => user.name === userName && user.password === password);

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      router.push("/dashboard"); // Redirect to the dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Product Store Login</h1>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <input
          type="text"
          placeholder="Enter your username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}
