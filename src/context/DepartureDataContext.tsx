
import { createContext, useContext, ReactNode } from "react";

export interface DepartureRecord {
  userID: string;
  userName: string;
  date: string;
  time: string;
}

interface DepartureDataContextType {
  departureHistory: DepartureRecord[];
}

const MOCK_DEPARTURE_HISTORY: DepartureRecord[] = [
  {
    userID: "DL678927",
    userName: "Dan Mathulla",
    date: "11/03/2024",
    time: "10:30"
  },
  {
    userID: "DL678927",
    userName: "Dan Mathulla",
    date: "21/03/2024",
    time: "10:30"
  },
  {
    userID: "DL678927",
    userName: "Dan Mathulla",
    date: "22/03/2024",
    time: "10:30"
  },
  {
    userID: "DL678927",
    userName: "Dan Mathulla",
    date: "22/03/2024",
    time: "10:30"
  },
  {
    userID: "DL678927",
    userName: "Dan Mathulla",
    date: "22/03/2024",
    time: "10:30"
  },
];

export const DepartureDataContext = createContext<DepartureDataContextType | null>(null);

export const useDepartureData = () => {
  const context = useContext(DepartureDataContext);
  if (!context) {
    throw new Error("useDepartureData must be used within a DepartureDataProvider");
  }
  return context;
};

interface DepartureDataProviderProps {
  children: ReactNode;
}

export const DepartureDataProvider = ({ children }: DepartureDataProviderProps) => {
  return (
    <DepartureDataContext.Provider value={{ departureHistory: MOCK_DEPARTURE_HISTORY }}>
      {children}
    </DepartureDataContext.Provider>
  );
};
