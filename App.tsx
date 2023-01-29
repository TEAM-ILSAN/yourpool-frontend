/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const screenOptions = {headerShown: false};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
      >
        <Stack.Screen
          name="Home"
          component={Example}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Example = () => {
  // ios 대응을 위해 safeareaview 컴포넌트로 감싸기
  return (
    <SafeAreaView>
      <Button title="예시" />
    </SafeAreaView>
  );
};

export default App;
