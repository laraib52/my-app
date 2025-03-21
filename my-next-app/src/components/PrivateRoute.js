import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) return null; // Prevent rendering if not authenticated

  return <>{children}</>;
}
