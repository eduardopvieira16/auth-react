import React, { createContext, useState } from "react";

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  signed: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signed: false,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [signed, setSigned] = useState<boolean>(false);

  const signIn = (email: string, password: string) => {
    if (email === "eduardo@email.com" && password === "123456") {
      setUser({ email, password });
      setSigned(true);
    }
  };

  const signOut = () => {
    setUser(null);
    setSigned(false);
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
