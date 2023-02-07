import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import ChatDetail from '../../../src/components/ChatRoom/ChatDetail';

const ChatStack = createStackNavigator();

/**
 * '채팅' 항목 네비게이터
 */
const ChatNavigator = () => {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <ChatStack.Screen name="ChatDetail" component={ChatDetail} />
    </ChatStack.Navigator>
  );
};

export default ChatNavigator;
