import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { signInSchema } from "../validation/authValidation";
import { users } from "../data/users";

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isSignedIn: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = useCallback(async (email: string, password: string) => {
    await signInSchema.validate({ email, password }, { abortEarly: false });

    const foundUser = users.find((u) => u.email === email && u.password === password);
    if (!foundUser) {
      throw new Error("Invalid credentials");
    }

    setUser({ email: foundUser.email, password: foundUser.password });
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      isSignedIn: !!user,
      signIn,
      signOut,
    }),
    [user, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};