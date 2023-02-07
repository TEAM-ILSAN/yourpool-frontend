/* eslint-disable prettier/prettier */
import * as React from 'react';
import { SafeAreaView, Text,TouchableOpacity } from 'react-native';

const MyinfoDetail = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
        <Text>MyinfoDetail 스크린</Text>
        <TouchableOpacity
        onPress={() => {
            navigation.navigate('MyInfoDetail2');
        }}>
        <Text>MyinfoDetail2 스크린으로 이동하기</Text>
      </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyinfoDetail;
