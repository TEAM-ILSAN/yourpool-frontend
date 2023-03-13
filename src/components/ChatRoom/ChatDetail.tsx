import styled from '@emotion/native';
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
        <Text>ChatDetail 스크린입니다.</Text>
        <Text>뒤로가기</Text>
        <ChatBackground>
          <ChatBubble>랄랄라</ChatBubble>
        </ChatBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChatDetail;

const ChatBackground = styled.View`
  background-color: #b7b7b7;
`;
