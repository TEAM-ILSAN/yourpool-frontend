import * as React from 'react';
import type { GestureResponderEvent } from 'react-native';
import styled from '@emotion/native';
import SendIcon from '@/assets/icons/send.svg';

const ChatForm = ({
  inputHandler,
  submitHandler,
}: {
  inputHandler: (v: string) => void;
  submitHandler: (e: GestureResponderEvent) => void;
}): JSX.Element => {
  return (
    <StyledChatForm>
      <AbsoluteButton title="" onPress={submitHandler}>
        <SendIcon />
      </AbsoluteButton>
      <ChatInput onChangeText={inputHandler} />
    </StyledChatForm>
  );
};

const StyledChatForm = styled.View`
  position: relative;
`;

const AbsoluteButton = styled.Button<{ children: Element }>`
  position: absolute;
  right: 15px;
  top: 15px;
`;

const ChatInput = styled.TextInput`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 30px;
`;

export default ChatForm;
