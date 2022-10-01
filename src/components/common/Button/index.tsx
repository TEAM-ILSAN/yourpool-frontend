import styled from '@emotion/native';

interface ButtonProps {
  text: string;
  isDisabled?: boolean;
  onClick?: Function;
}

const Button = ({text, isDisabled, onClick}: ButtonProps) => {
  return (
    <Container
      onPress={() => {
        onClick;
      }}
      disabled={isDisabled}>
      {text}
    </Container>
  );
};

export default Button;

const Container = styled.TouchableOpacity<{disabled?: boolean}>`
  width: 100%;
  //임의로 height
  height: 50px;
  background:${props => (props.disabled ? 'gray' : 'black')}
  color: white;
`;
