import Head from "next/head";
import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { useUpdateEffect, useEffectOnce } from "usehooks-ts";

export const ColorSchemeProviderContext = React.createContext<{
  isDark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}>({
  isDark: true,
  setDark: () => {
    return;
  },
});

/**
 * An ColorSchemeProvider React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ColorSchemeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isDark, setDark] = useState(true);

  useEffectOnce(() => {
    let theme = "dark"; //default to dark

    //local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "light") {
        theme = "light";
      }
    } else if (!window.matchMedia) {
      //matchMedia method not supported
      return;
    } else if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //OS theme setting detected as dark
      theme = "light";
    }

    const htmlElement = document.getElementsByTagName("html").item(0);

    if (htmlElement) {
      if (theme == "dark" && !isDark) {
        setDark(true);
      } else if (theme == "light" && isDark) {
        setDark(false);
      }
    }
  });

  useUpdateEffect(() => {
    const isDarkInv = isDark;

    localStorage.setItem("theme", isDarkInv ? "dark" : "light");

    const htmlElement = document.getElementsByTagName("html")?.item?.(0);

    if (htmlElement) {
      if (isDarkInv) {
        htmlElement.className = "dark";
      } else {
        htmlElement.className = "";
      }
    }
  }, [isDark]);

  return (
    <ColorSchemeProviderContext.Provider value={{ isDark, setDark }}>
      <Head>
        <meta name="theme-color" content={isDark ? "#1f2937" : "#fff"} />
      </Head>
      {children}
    </ColorSchemeProviderContext.Provider>
  );
};
