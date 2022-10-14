import { useContext } from "react";
import { ColorSchemeProviderContext } from "../provider/colorscheme.provider";

export const useColorscheme = () => {
  const { isDark, setDark } = useContext(ColorSchemeProviderContext);

  return {
    changeColorScheme: () => {
      setDark((prev) => !prev);
    },
    isDark,
  };
};
