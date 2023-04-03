import * as React from 'react';
import styled from '@emotion/native';
// TODO: svg icon RN에서 사용할수있게 하는 plugin?
// import ChatEdgeLeftSvg from '@/assets/icons/chatedge-left.svg';
// import ChatEdgeRightSvg from '@/assets/icons/chatedge-right.svg';

import { EdgeDirection } from '@/constants/common';

const ChatBubble = ({
  children,
  edgeLocation = EdgeDirection.LEFT,
}: {
  children: string;
  edgeLocation?: keyof typeof EdgeDirection;
}): JSX.Element => {
  return (
    <StyledChatBubble>
      <ChatContent>{children}</ChatContent>
      {edgeLocation === EdgeDirection.LEFT && (
        <ChatBubbleLeft>{/* <ChatEdgeLeftSvg /> */}</ChatBubbleLeft>
      )}
      {edgeLocation === EdgeDirection.RIGHT && (
        <ChatBubbleRight>{/* <ChatEdgeRightSvg /> */}</ChatBubbleRight>
      )}
    </StyledChatBubble>
  );
};

const StyledChatBubble = styled.View`
  display: flex;
  position: relative;
  padding: 15px;
`;

const ChatContent = styled.Text`
  display: flex;
  font-size: 16px;
  background-color: #fff;
  border-radius: 60px;
  padding: 8px;
`;

const ChatBubbleLeft = styled.View`
  position: absolute;
  top: 28px;
  left: 0;
`;

const ChatBubbleRight = styled.View`
  position: absolute;
  top: 28px;
  right: 0;
`;

export default ChatBubble;
