"use client"
// context/ShowContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of your context
interface ShowContextType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>; // Correct type for setShow
}

// Create Context with default values
const ShowContext = createContext<ShowContextType | undefined>(undefined);

// Create a Provider Component
interface ShowProviderProps {
  children: ReactNode;
}

export const ShowProvider: React.FC<ShowProviderProps> = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {children}
    </ShowContext.Provider>
  );
};

// Custom hook to use the ShowContext
export const useShow = (): ShowContextType => {
  const context = useContext(ShowContext);
  if (!context) {
    throw new Error('useShow must be used within a ShowProvider');
  }
  return context;
};
