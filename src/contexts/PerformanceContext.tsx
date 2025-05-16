import React, { createContext, useContext, useState } from 'react';
import { RenderPassReport } from '@shopify/react-native-performance';

interface PerformanceContextType {
  reports: RenderPassReport | null;
  addReport: (report: RenderPassReport) => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reports, setReports] = useState<RenderPassReport | null>(null);

  const addReport = (report: RenderPassReport) => {
    setReports(report);
  };

  return <PerformanceContext.Provider value={{ reports, addReport }}>{children}</PerformanceContext.Provider>;
};

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
};
