import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HeavyPage1 from '../pages/HeavyPage1';
import HeavyPage2 from '../pages/HeavyPage2';
import HeavyPage3 from '../pages/HeavyPage3';
import HeavyPage4 from '../pages/HeavyPage4';
import HeavyPage5 from '../pages/HeavyPage5';
import ImportHeavyPackagePage from '../pages/ImportHeavyPackagePage';

const NestedStack = createStackNavigator();

const NestedNavigation = () => {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen name="ImportHeavyPackagePage" component={ImportHeavyPackagePage} />
      <NestedStack.Screen name="HeavyPage1" component={HeavyPage1} />
      <NestedStack.Screen name="HeavyPage2" component={HeavyPage2} />
      <NestedStack.Screen name="HeavyPage3" component={HeavyPage3} />
      <NestedStack.Screen name="HeavyPage4" component={HeavyPage4} />
      <NestedStack.Screen name="HeavyPage5" component={HeavyPage5} />
    </NestedStack.Navigator>
  );
};

export default NestedNavigation;
