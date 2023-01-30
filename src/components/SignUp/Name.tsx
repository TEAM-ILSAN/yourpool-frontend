import { isName } from '@/constants/common';
import { verifyInput } from '@/utils/verifyInput';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { userInfoMock } from './__mocks__/userInfoMock';

const Name = () => {
  const [name, setName] = useState({
    value: userInfoMock.user_info.properties.nickname,
    isValid: false,
  });

  const changeValue = (value: string) => {
    setName({ ...name, value });
  };

  const changeIsValid = (isValid: boolean) => {
    setName({ ...name, isValid });
  };

  useEffect(() => {
    changeIsValid(verifyInput(isName, name.value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name.value]);

  return (
    <TextInput
      value={name.value}
      placeholder="이름"
      onChangeText={changeValue}
    />
  );
};

export default Name;
