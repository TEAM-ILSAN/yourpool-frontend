import React from 'react';
import styled from '@emotion/styled';
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
} from 'react';

interface InputProps {
  type?: string;
  id: string;
  value: string;
  title: string;
  placeHolder?: string;
  readOnly?: boolean;
  isValid?: boolean;
  isSelectable?: boolean;
  isFocused?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  type = 'text',
  id,
  value,
  title,
  placeHolder,
  readOnly,
  isValid,
  isSelectable,
  isFocused,
  onClick,
  onChange,
}: InputProps) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isFocused) {
      return;
    }

    inputRef.current.focus();
  }, []);

  return (
    <Container>
      <StyledInput
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        placeholder={placeHolder}
        readOnly={readOnly}
        isValid={isValid}
        isSelectable={isSelectable}
        onClick={onClick}
        onChange={onChange}
      />
      <Title htmlFor={id}>{title}</Title>
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const StyledInput = styled.input<{
  isSelectable?: boolean;
  isValid?: boolean;
}>`
  border: 1px solid ${({ isValid }) => (isValid ? 'blue' : 'red')};
  cursor: ${({ isSelectable }) => (isSelectable ? 'pointer' : 'text')};
  :focus {
    background-color: rgba(0, 0, 0, 0.3);
    caret-color: blue;
  }
  :focus + label {
    color: blue;
  }
`;

const Title = styled.label``;
