import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setUserName("Mango UA");
      setIsLoading(false);
    }, 3000);
  }, []);

  const onLogout = () => {
    setUserName(null);
  };

  return (
    <UserContext.Provider
      value={{
        isLoading,
        userName,
        onLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
