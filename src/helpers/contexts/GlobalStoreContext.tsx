import { FC, PropsWithChildren, createContext, useState } from "react";
import { GlobalStoreContextProps } from "../../types/GlobalStoreContextProps";

const GlobalStoreContext = createContext<GlobalStoreContextProps>(
  {} as GlobalStoreContextProps
);

const GlobalStoreContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <GlobalStoreContext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export { GlobalStoreContextProvider };
export default GlobalStoreContext;
