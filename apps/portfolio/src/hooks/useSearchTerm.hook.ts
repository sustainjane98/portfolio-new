import { useContext } from "react";
import { SearchProviderContext } from "../provider/search.provider";

export const useSearchTerm = () => useContext(SearchProviderContext);
