import { useEffect, useState } from "react";

export const usePath = (paths: string[]) => {
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.pathname + window.location.hash;

    for (const path of paths) {
      if (currentUrl === path) {
        setIsPath(true);
        break;
      }
    }
  }, [paths]);

  return isPath;
};
