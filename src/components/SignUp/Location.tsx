import { isLocation } from '@/constants/common';
import { verifyInput } from '@/utils/verifyInput';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native';

const Location = () => {
  const [location, setLocation] = useState({
    value: '월드컵로7길 19',
    isValid: false,
  });

  const changeValue = (value: string) => {
    setLocation({ ...location, value });
  };

  const changeIsValid = (isValid: boolean) => {
    setLocation({ ...location, isValid });
  };

  useEffect(() => {
    changeIsValid(verifyInput(isLocation, location.value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.value]);

  return (
    <TextInput
      value={location.value}
      placeholder="활동 지역"
      onChangeText={changeValue}
    />
  );
};

export default Location;
