import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { RenderPassReport, PerformanceProfiler } from '@shopify/react-native-performance';
import Home from './src/pages/Home';
import { PerformanceProvider, usePerformance } from './src/contexts/PerformanceContext';
// import HeavyPage1 from './src/pages/HeavyPage1';
// import HeavyPage2 from './src/pages/HeavyPage2';
// import HeavyPage3 from './src/pages/HeavyPage3';
// import HeavyPage4 from './src/pages/HeavyPage4';
// import HeavyPage5 from './src/pages/HeavyPage5';
// import HeavyPage6 from './src/pages/HeavyPage6';
// import HeavyPage7 from './src/pages/HeavyPage7';
// import HeavyPage8 from './src/pages/HeavyPage8';
// import HeavyPage9 from './src/pages/HeavyPage9';
// import HeavyPage10 from './src/pages/HeavyPage10';
// import Component1 from './src/components/Component1';
// import Component2 from './src/components/Component2';
// import Component3 from './src/components/Component3';
// import Component4 from './src/components/Component4';
// import Component5 from './src/components/Component5';
// import Component6 from './src/components/Component6';
// import Component7 from './src/components/Component7';
// import Component8 from './src/components/Component8';
// import Component9 from './src/components/Component9';
// import Component10 from './src/components/Component10';
// import Component11 from './src/components/Component11';
// import Component12 from './src/components/Component12';
// import Component13 from './src/components/Component13';
// import Component14 from './src/components/Component14';
// import Component15 from './src/components/Component15';
// import Component16 from './src/components/Component16';
// import Component17 from './src/components/Component17';
// import Component18 from './src/components/Component18';
// import Component19 from './src/components/Component19';
// import Component20 from './src/components/Component20';

// const HeavyPage1 = React.lazy(() => import('./src/pages/HeavyPage1'));
// const HeavyPage2 = React.lazy(() => import('./src/pages/HeavyPage2'));
// const HeavyPage3 = React.lazy(() => import('./src/pages/HeavyPage3'));
// const HeavyPage4 = React.lazy(() => import('./src/pages/HeavyPage4'));
// const HeavyPage5 = React.lazy(() => import('./src/pages/HeavyPage5'));
// const HeavyPage6 = React.lazy(() => import('./src/pages/HeavyPage6'));
// const HeavyPage7 = React.lazy(() => import('./src/pages/HeavyPage7'));
// const HeavyPage8 = React.lazy(() => import('./src/pages/HeavyPage8'));
// const HeavyPage9 = React.lazy(() => import('./src/pages/HeavyPage9'));
// const HeavyPage10 = React.lazy(() => import('./src/pages/HeavyPage10'));
// const Component1 = React.lazy(() => import('./src/components/Component1'));
// const Component2 = React.lazy(() => import('./src/components/Component2'));
// const Component3 = React.lazy(() => import('./src/components/Component3'));
// const Component4 = React.lazy(() => import('./src/components/Component4'));
// const Component5 = React.lazy(() => import('./src/components/Component5'));
// const Component6 = React.lazy(() => import('./src/components/Component6'));
// const Component7 = React.lazy(() => import('./src/components/Component7'));
// const Component8 = React.lazy(() => import('./src/components/Component8'));
// const Component9 = React.lazy(() => import('./src/components/Component9'));
// const Component10 = React.lazy(() => import('./src/components/Component10'));
// const Component11 = React.lazy(() => import('./src/components/Component11'));
// const Component12 = React.lazy(() => import('./src/components/Component12'));
// const Component13 = React.lazy(() => import('./src/components/Component13'));
// const Component14 = React.lazy(() => import('./src/components/Component14'));
// const Component15 = React.lazy(() => import('./src/components/Component15'));
// const Component16 = React.lazy(() => import('./src/components/Component16'));
// const Component17 = React.lazy(() => import('./src/components/Component17'));
// const Component18 = React.lazy(() => import('./src/components/Component18'));
// const Component19 = React.lazy(() => import('./src/components/Component19'));
// const Component20 = React.lazy(() => import('./src/components/Component20'));

type RootStackParamList = {
  Home: undefined;
  // HeavyPage1: undefined;
  // HeavyPage2: undefined;
  // HeavyPage3: undefined;
  // HeavyPage4: undefined;
  // HeavyPage5: undefined;
  // HeavyPage6: undefined;
  // HeavyPage7: undefined;
  // HeavyPage8: undefined;
  // HeavyPage9: undefined;
  // HeavyPage10: undefined;
  // Component1: undefined;
  // Component2: undefined;
  // Component3: undefined;
  // Component4: undefined;
  // Component5: undefined;
  // Component6: undefined;
  // Component7: undefined;
  // Component8: undefined;
  // Component9: undefined;
  // Component10: undefined;
  // Component11: undefined;
  // Component12: undefined;
  // Component13: undefined;
  // Component14: undefined;
  // Component15: undefined;
  // Component16: undefined;
  // Component17: undefined;
  // Component18: undefined;
  // Component19: undefined;
  // Component20: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const RootStack = createStackNavigator<RootStackParamList>({
  initialRouteName: 'Home',
  screens: {
    Home,
    // HeavyPage1,
    // HeavyPage2,
    // HeavyPage3,
    // HeavyPage4,
    // HeavyPage5,
    // HeavyPage6,
    // HeavyPage7,
    // HeavyPage8,
    // HeavyPage9,
    // HeavyPage10,
    // Component1,
    // Component2,
    // Component3,
    // Component4,
    // Component5,
    // Component6,
    // Component7,
    // Component8,
    // Component9,
    // Component10,
    // Component11,
    // Component12,
    // Component13,
    // Component14,
    // Component15,
    // Component16,
    // Component17,
    // Component18,
    // Component19,
    // Component20,
  },
});

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
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={Home} />
          {/* <RootStack.Screen name="HeavyPage1" component={HeavyPage1} />
          <RootStack.Screen name="HeavyPage2" component={HeavyPage2} />
          <RootStack.Screen name="HeavyPage3" component={HeavyPage3} />
          <RootStack.Screen name="HeavyPage4" component={HeavyPage4} />
          <RootStack.Screen name="HeavyPage5" component={HeavyPage5} />
          <RootStack.Screen name="HeavyPage6" component={HeavyPage6} />
          <RootStack.Screen name="HeavyPage7" component={HeavyPage7} />
          <RootStack.Screen name="HeavyPage8" component={HeavyPage8} />
          <RootStack.Screen name="HeavyPage9" component={HeavyPage9} />
          <RootStack.Screen name="HeavyPage10" component={HeavyPage10} />
          <RootStack.Screen name="Component1" component={Component1} />
          <RootStack.Screen name="Component2" component={Component2} />
          <RootStack.Screen name="Component3" component={Component3} />
          <RootStack.Screen name="Component4" component={Component4} />
          <RootStack.Screen name="Component5" component={Component5} />
          <RootStack.Screen name="Component6" component={Component6} />
          <RootStack.Screen name="Component7" component={Component7} />
          <RootStack.Screen name="Component8" component={Component8} />
          <RootStack.Screen name="Component9" component={Component9} />
          <RootStack.Screen name="Component10" component={Component10} />
          <RootStack.Screen name="Component11" component={Component11} />
          <RootStack.Screen name="Component12" component={Component12} />
          <RootStack.Screen name="Component13" component={Component13} />
          <RootStack.Screen name="Component14" component={Component14} />
          <RootStack.Screen name="Component15" component={Component15} />
          <RootStack.Screen name="Component16" component={Component16} />
          <RootStack.Screen name="Component17" component={Component17} />
          <RootStack.Screen name="Component18" component={Component18} />
          <RootStack.Screen name="Component19" component={Component19} />
          <RootStack.Screen name="Component20" component={Component20} /> */}
        </RootStack.Navigator>
      </NavigationContainer>
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
