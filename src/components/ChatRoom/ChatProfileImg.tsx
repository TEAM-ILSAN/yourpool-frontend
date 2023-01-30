import styled from '@emotion/styled';
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

const StyledChatProfileImg = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
`;

export default ChatProfileImg;
