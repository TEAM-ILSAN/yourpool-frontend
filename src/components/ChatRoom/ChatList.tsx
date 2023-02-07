import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

const ChatList = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
      <Text>ChatList 스크린입니다.</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChatNavigator', {
            screen: 'ChatDetail',
          });
        }}>
        <Text>ChatList detail 스크린으로 이동</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChatList;
