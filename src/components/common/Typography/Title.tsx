import styled from '@emotion/native';
import {font} from '@/styles/theme';

interface TitleProps {
  title: string;
}

const Title = ({title}: TitleProps): JSX.Element => {
  return <StyledTitle>{title}</StyledTitle>;
};

// TODO: 실제 사용되는 타이틀 사이즈, 스타일로 변경
const StyledTitle = styled.Text`
  font-size: ${font.size22};
`;

export default Title;
