import { useLocation } from "react-router-dom";

export default function useUrlMatch(url) {
  const location = useLocation();
  return location.pathname.startsWith(url);
}
