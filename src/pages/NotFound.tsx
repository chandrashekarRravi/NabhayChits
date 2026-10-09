import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbfaf5]">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold  text-[#123524]">404</h1>
        <p className="mb-4 text-xl  font-semibold text-[#123524]/80">Oops! Page not found</p>
        <a href="/" className="text-[#c59822]  font-semibold underline hover:text-[#c59822]/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
