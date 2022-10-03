import styled from '@emotion/styled';
import { Component } from 'react';

const ChatProfileImg = ({
  alt,
  src,
}: {
  alt: string;
  src: string;
}): JSX.Element => {
  return <StyledChatProfileImg src={src} />;
};

const StyledChatProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
`;

export default ChatProfileImg;
