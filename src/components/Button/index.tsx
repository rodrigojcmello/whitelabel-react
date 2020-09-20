import React, { FC } from 'react';
import { StyledButton, StyledText } from './style';

interface ButtonProps {
  text: string;
  type: 'type1' | 'type2' | 'type3';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, type, size, disabled }) => {
  const buttonStyle = [type, size || 'medium', disabled ? 'disabled' : '']
    .join(' ')
    .trim();

  return (
    <StyledButton type="submit" className={buttonStyle} disabled={disabled}>
      <span>
        <StyledText className={buttonStyle}>{text}</StyledText>
      </span>
    </StyledButton>
  );
};

export default Button;
