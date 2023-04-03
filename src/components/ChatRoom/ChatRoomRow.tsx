import * as React from 'react';
import styled from '@emotion/native';
import { EdgeDirection } from '@/constants/common';
import ChatProfileImg from '@/components/chatroom/ChatProfileImg';
import ChatBubble from '@/components/chatroom/ChatBubble';

interface ChatRoomRowProps {
  text: string;
  imgAlt?: string;
  imgSrc?: string;
  isMyChat: boolean;
}

const ChatRoomRow = ({ text, imgSrc, isMyChat }: ChatRoomRowProps) => {
  return (
    <StyledChatRoomRow isMyChat={isMyChat}>
      {isMyChat && (
        <ChatBubble edgeLocation={EdgeDirection.RIGHT}>{text}</ChatBubble>
      )}
      {!isMyChat && (
        <>
          {imgSrc && <ChatProfileImg alt="profile-img" src={imgSrc} />}
          <ChatBubble>{text}</ChatBubble>
        </>
      )}
    </StyledChatRoomRow>
  );
};

const StyledChatRoomRow = styled.View<{ isMyChat: boolean }>`
  display: flex;
  padding: 16px;
  ${({ isMyChat }) => isMyChat && 'justify-content: flex-end'};

  > img {
    margin-right: 8px;
  }
`;

export default ChatRoomRow;
