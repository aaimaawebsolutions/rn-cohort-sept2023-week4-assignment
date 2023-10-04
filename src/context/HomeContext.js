import { createContext, useState } from "react";

const AppContext = createContext();
export default AppContext;

export const HomwContextProvider = ({ children }) => {
  const [showHomePage, setShowHomePage] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showHomePage,
        setShowHomePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
