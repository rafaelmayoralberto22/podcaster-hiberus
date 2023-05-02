import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useLoadingLocation = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useLayoutEffect(() => {
    setLoading(true);
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [loading]);

  return { loading };
};
