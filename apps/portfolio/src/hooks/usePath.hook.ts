import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const usePath = (paths: string[]) => {
  const [isPath, setIsPath] = useState(false);

  const { locale } = useRouter();

  useEffect(() => {
    let currentUrl = window.location.pathname + window.location.hash;

    if (locale != "en") {
      currentUrl = currentUrl.replace("/" + locale ?? "", "");
    }

    for (const path of paths) {
      if (currentUrl === path) {
        setIsPath(true);
        break;
      }
    }
  }, [paths]);

  return isPath;
};
