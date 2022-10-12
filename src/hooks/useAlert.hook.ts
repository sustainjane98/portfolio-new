import { useContext } from "react";
import { AlertProviderContext } from "../provider/alert.provider";

export const useAlert = () => useContext(AlertProviderContext);
