// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);   // page ko upar le aata hai
  }, [pathname]); // jab bhi path change hoga ye chalega

  return null;
}
export default ScrollToTop;