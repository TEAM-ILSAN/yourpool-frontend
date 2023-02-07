/* eslint-disable prettier/prettier */
import * as React from 'react';
import { SafeAreaView, Text,TouchableOpacity } from 'react-native';

const MyInfoDetail2 = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
        <Text>MyinfoDetail2 스크린입니다.</Text>
        <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyInfoDetail2;
