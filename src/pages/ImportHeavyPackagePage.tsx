import React from 'react';
import { Text, ScrollView } from 'react-native';
// @ts-ignore
import _ from 'lodash';
// @ts-ignore
import * as Ramda from 'ramda';
import moment from 'moment';
import * as MathJs from 'mathjs';
import * as fakeJs from '@faker-js/faker';

console.log(_);
console.log(moment);
console.log(Ramda);
console.log(MathJs);
console.log(fakeJs);

const ImportHeavyPackagePage = () => {
  return (
    <ScrollView>
      <Text>ImportHeavyPackagePage</Text>
    </ScrollView>
  );
};

export default ImportHeavyPackagePage;
