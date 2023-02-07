import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

const ChatDetail = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <Text>ChatDetail 스크린</Text>
    </SafeAreaView>
  );
};

export default ChatDetail;
