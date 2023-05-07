import { useContext } from "react";
import GlobalStoreContext from "../contexts/GlobalStoreContext";

export const useGlobalStoreContext = () => useContext(GlobalStoreContext);
