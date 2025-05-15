import { createStaticNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import Home from './src/pages/Home';
import { RenderPassReport, PerformanceProfiler } from '@shopify/react-native-performance';

const RootStack = createStackNavigator({
  initialRouteName: 'Home',
  screens: { Home },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  const onReportPrepared = useCallback((report: RenderPassReport) => {
    const { timeToBootJsMillis, timeToRenderMillis } = report;
    console.log({ report });
    console.log(`JS Boot Time: ${timeToBootJsMillis}ms`);
    console.log(`Render Time: ${timeToRenderMillis}ms`);
  }, []);
  return (
    <PerformanceProfiler onReportPrepared={onReportPrepared} useRenderTimeouts>
      <Navigation />
    </PerformanceProfiler>
  );
}

export default App;
