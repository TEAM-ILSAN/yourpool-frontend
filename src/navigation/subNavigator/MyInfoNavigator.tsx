import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import MyInfoDetail from '../../../src/components/MyInfo/MyInfoDetail';
import MyInfoDetail2 from '../../../src/components/MyInfo/MyInfoDetail2';

const MyInfoStack = createStackNavigator();

/**
 * '내정보' 항목 네비게이터
 */
const MyInfoNavigator = () => {
  return (
    <MyInfoStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <MyInfoStack.Screen name="MyInfoDetail" component={MyInfoDetail} />
      <MyInfoStack.Screen name="MyInfoDetail2" component={MyInfoDetail2} />
    </MyInfoStack.Navigator>
  );
};

export default MyInfoNavigator;
