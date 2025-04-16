"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface User {
  id: string;
  name: string;
}

interface UserContextType {
  user: User;
  toggleUser: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const users: Record<"me" | "guest", User> = {
    me: { id: "me", name: "Me" },
    guest: { id: "guest", name: "Guest" },
  };

  const [user, setUser] = useState<User>(users.me);

  const toggleUser = () => {
    setUser((prev) => (prev.id === "me" ? users.guest : users.me));
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
