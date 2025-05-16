import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HeavyPage1 from '../pages/HeavyPage1';
import HeavyPage2 from '../pages/HeavyPage2';
import HeavyPage3 from '../pages/HeavyPage3';
import HeavyPage4 from '../pages/HeavyPage4';
import HeavyPage5 from '../pages/HeavyPage5';
import HeavyPage6 from '../pages/HeavyPage6';
import HeavyPage7 from '../pages/HeavyPage7';
import HeavyPage8 from '../pages/HeavyPage8';
import HeavyPage9 from '../pages/HeavyPage9';
import HeavyPage10 from '../pages/HeavyPage10';

const NestedStack = createStackNavigator();

const NestedNavigation = () => {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen name="HeavyPage1" component={HeavyPage1} />
      <NestedStack.Screen name="HeavyPage2" component={HeavyPage2} />
      <NestedStack.Screen name="HeavyPage3" component={HeavyPage3} />
      <NestedStack.Screen name="HeavyPage4" component={HeavyPage4} />
      <NestedStack.Screen name="HeavyPage5" component={HeavyPage5} />
      <NestedStack.Screen name="HeavyPage6" component={HeavyPage6} />
      <NestedStack.Screen name="HeavyPage7" component={HeavyPage7} />
      <NestedStack.Screen name="HeavyPage8" component={HeavyPage8} />
      <NestedStack.Screen name="HeavyPage9" component={HeavyPage9} />
      <NestedStack.Screen name="HeavyPage10" component={HeavyPage10} />
    </NestedStack.Navigator>
  );
};

export default NestedNavigation;
