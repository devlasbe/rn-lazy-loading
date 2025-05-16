import React, { useCallback } from 'react';
import { RenderPassReport, PerformanceProfiler } from '@shopify/react-native-performance';
import { PerformanceProvider, usePerformance } from './src/contexts/PerformanceContext';
import RootNavigation from './src/navigation/RootNavigation';

function AppContent() {
  const { addReport } = usePerformance();

  const onReportPrepared = useCallback(
    (report: RenderPassReport) => {
      const { timeToBootJsMillis, timeToRenderMillis } = report;
      console.log({ report });
      console.log(`JS Boot Time: ${timeToBootJsMillis}ms`);
      console.log(`Render Time: ${timeToRenderMillis}ms`);
      addReport(report);
    },
    [addReport],
  );

  return (
    <PerformanceProfiler onReportPrepared={onReportPrepared} useRenderTimeouts>
      <RootNavigation />
    </PerformanceProfiler>
  );
}

function App() {
  return (
    <PerformanceProvider>
      <AppContent />
    </PerformanceProvider>
  );
}

export default App;
