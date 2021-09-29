import { useEffect } from "react";

const PageToTop = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return null;
};

export default PageToTop;
