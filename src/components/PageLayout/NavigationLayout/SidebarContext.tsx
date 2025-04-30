"use client";

import { createContext, useContext, useState, useEffect } from "react";

type SidebarContextType = {
  isExpanded: boolean;
  isLoading: boolean;
  setIsExpanded: (value: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType>({
  isExpanded: true,
  isLoading: true,
  setIsExpanded: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarExpanded");
    if (savedState) {
      setIsExpanded(savedState === "true");
    }
    setIsLoading(false);
  }, []);

  return (
    <SidebarContext.Provider value={{ isExpanded, isLoading, setIsExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
