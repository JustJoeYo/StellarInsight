import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../../components/types";
export default function PrivateRoutes() {
  const currentUser = true;

  return currentUser ? (
    <>
      <div className="flex flex-col min-h-dvh h-dvh w-screen">
        <Navbar />
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
}
