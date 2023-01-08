import React, { PropsWithChildren, useState } from "react";

export interface Props {}

export const SearchProviderContext = React.createContext<{
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}>({
  searchTerm: "",
  setSearchTerm: () => {
    return;
  },
});

/**
 * An SearchProvider React Component.
 * @author Jane Will
 * @version 0.1
 */
export const SearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchProviderContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchProviderContext.Provider>
  );
};
