import { useRouter } from "next/router";
import PrivateRoute from "../src/components/PrivateRoute"; // Ensure correct path

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <PrivateRoute>
      <div>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
        <br />
        <button onClick={() => router.push("/productlist")}>Go to Product List</button>
        <br />
        <button onClick={() => router.push("/productdetails")}>Go to Product Details</button>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
