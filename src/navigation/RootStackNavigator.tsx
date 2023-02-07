import React from 'react';
import { Image, Platform } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 개별 스크린
import Home from '../../src/components/Home/Home';
import ChatList from '../../src/components/ChatRoom/ChatList';
import MyInfo from '../../src/components/MyInfo/MyInfo';

// 네비게이터
import ChatNavigator from './subNavigator/ChatNavigator';
import MyInfoNavigator from './subNavigator/MyInfoNavigator';

interface Props {
  onBackPress: any;
  onForwardPress: any;
  onReloadPress: any;
  canGoBack: any;
  canGoForward: any;
}

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * 바텀 탭 네비게이터
 */
const TabNavigator = (): React.ReactElement => {
  /**
   * 앱 하단에 렌더될 바텀탭의 리스트
   */
  const tabList: Array<any> = [
    {
      name: '홈',
      component: Home,
    },
    {
      name: '채팅',
      component: ChatList,
    },
    {
      name: '내정보',
      component: MyInfo,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0100FF',
        tabBarInactiveTintColor: '#5D5D5D',
        tabBarStyle: {
          display: 'flex',
          paddingTop: Platform.OS === 'android' ? 5 : 18,
          height: Platform.OS === 'android' ? 80 : 95,
          backgroundColor: '#fcfcfc',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginLeft: 0,
          marginTop: Platform.OS === 'android' ? 0 : 10,
          marginBottom: Platform.OS === 'android' ? 15 : 0,
        },
      }}>
      {tabList.map(el => (
        <Tab.Screen
          key={`screen-${el.name}`}
          name={el.name}
          component={el.component}
          options={{
            tabBarIcon: ({ focused }: any) => {
              const tabIcon = focused ? el.activeIcon : el.inactiveIcon;
              return (
                <Image
                  source={tabIcon}
                  style={{ width: 24, height: 24, resizeMode: 'contain' }}
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

/**
 * App.tsx 에 연결된 루트 네비게이터 (프로젝트 기초)
 */
const RootStackNavigator = (): React.ReactElement => {
  return (
    <RootStack.Navigator
      initialRouteName={'TabNavigator'}
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        animationEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <RootStack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ gestureEnabled: false, animationEnabled: true }}
      />
      <RootStack.Screen
        name="ChatNavigator"
        component={ChatNavigator}
        options={{ gestureEnabled: false, animationEnabled: true }}
      />
      <RootStack.Screen
        name="MyInfoNavigator"
        component={MyInfoNavigator}
        options={{ gestureEnabled: false, animationEnabled: true }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
