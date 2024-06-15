import React, { createContext, useState } from "react";
import { signInSchema } from "../validation/authValidation";
import * as Yup from "yup";
import { users } from "../data/users";

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  signed: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signed: false,
  signIn: async () => {},
  signOut: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    try {
      await signInSchema.validate({ email, password }, { abortEarly: false });

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        setUser({ email: user.email, password: user.password });
      } else {
        throw new Error("Credenciais inválidas");
      }
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        throw new Error(validationError.errors.join("\n"));
      }
      throw validationError;
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
