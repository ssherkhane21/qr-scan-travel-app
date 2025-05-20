
import { createContext, useContext, useState, ReactNode } from "react";

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  userID: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  userData: UserData | null;
}

const MOCK_USER: UserData = {
  id: "876776012",
  name: "Devasa",
  email: "pkrj@gmail.com",
  phone: "876776012",
  dob: "27/09/1990",
  userID: "98001KJHG"
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const login = async (email: string, password: string) => {
    // This would be replaced with a real API call
    if (email && password) {
      setIsAuthenticated(true);
      setUserData(MOCK_USER);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
