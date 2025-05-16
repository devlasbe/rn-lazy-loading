import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PerformanceMeasureView } from '@shopify/react-native-performance';
import NestedNavigation from './NestedNavigation';

// const NestedNavigation = React.lazy(() => import('./NestedNavigation'));

type RootStackParamList = {
  Home: undefined;
  Nested: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const RootStack = createStackNavigator<RootStackParamList>();

const PerformanceHomeScreen = () => {
  return (
    <PerformanceMeasureView screenName="Home" interactive={true}>
      <Home />
    </PerformanceMeasureView>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={PerformanceHomeScreen} />
        <RootStack.Screen name="Nested" component={NestedNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
