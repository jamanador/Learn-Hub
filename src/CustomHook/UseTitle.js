import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Learn Hub`;
  }, [title]);
};

export default useTitle;
