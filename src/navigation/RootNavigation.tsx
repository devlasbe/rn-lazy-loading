import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import NestedNavigation from './NestedNavigation';

type RootStackParamList = {
  Home: undefined;
  Nested: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Nested" component={NestedNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
