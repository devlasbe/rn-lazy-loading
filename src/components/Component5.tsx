import { Text, View } from 'react-native';
import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
export default function Component5() {
  return (
    <View>
      <Text>Component 5</Text>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </View>
  );
}
