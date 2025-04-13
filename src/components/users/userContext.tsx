"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type User = "Me" | "Guest";

interface UserContextType {
  user: User;
  toggleUser: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>("Me");

  const toggleUser = () => {
    setUser((prev) => (prev === "Me" ? "Guest" : "Me"));
  };
  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const userContext = useContext(UserContext);
  return userContext;
};
