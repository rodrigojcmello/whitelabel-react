import React, { FC } from 'react';
import styled from 'styled-components';
import whitelabel from '../../whitelabel';
// import './button.scss';
// import './button-material-ui.scss';

interface ButtonType {
  type: 'default' | 'accent' | 'text';
}

interface ButtonProps extends ButtonType {
  text: string;
}

const StyledButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  height: '32px',
  borderRadius: '2px',
  minWidth: '120px',
  '&.accent': whitelabel.button.type.accent.button,
  '&.default': whitelabel.button.type.default.button,
  '&.text': whitelabel.button.type.text.button,
});

const StyledText = styled.span`
  font-family: 'Segoe UI', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  &.accent {
    color: #ffffff;
  }
`;

const Button: FC<ButtonProps> = ({ text, type }) => {
  return (
    <StyledButton type="submit" className={type}>
      <StyledText className={type}>{text}</StyledText>
    </StyledButton>
  );
};

export default Button;
