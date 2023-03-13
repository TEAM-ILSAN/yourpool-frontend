import styled from '@emotion/native';
import { Image } from 'react-native';

const ChatProfileImg = ({
  alt = '',
  src,
}: {
  alt?: string;
  src: string;
}): JSX.Element => {
  return (
    <StyledChatProfileImg>
      <Image source={{ uri: src }} />
    </StyledChatProfileImg>
  );
};

const StyledChatProfileImg = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

export default ChatProfileImg;
