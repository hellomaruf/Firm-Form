import { useContext } from "react";
import { authContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-green-500"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}

export default PrivateRouter;
