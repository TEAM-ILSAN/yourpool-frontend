import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import ChatBubble from './ChatBubble';

const ChatDetail = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <ChatBubble>랄랄라</ChatBubble>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <Text>ChatDetail 스크린</Text>
    </SafeAreaView>
  );
};

export default ChatDetail;
