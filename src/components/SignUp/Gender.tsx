import { isGender } from '@/constants/common';
import { verifyInput } from '@/utils/verifyInput';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { userInfoMock } from './__mocks__/userInfoMock';

const Gender = () => {
  const [gender, setGender] = useState({
    value: userInfoMock.user_info.kakao_account.gender || '',
    isValid: false,
  });

  const changeValue = (value: string) => {
    setGender({ ...gender, value });
  };

  const changeIsValid = (isValid: boolean) => {
    setGender({ ...gender, isValid });
  };

  useEffect(() => {
    changeIsValid(verifyInput(isGender, gender.value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender.value]);

  return (
    <TextInput
      value={gender.value}
      placeholder="성별"
      onChangeText={changeValue}
    />
  );
};

export default Gender;
