import React, { FC } from 'react';
import {
  ButtonElementsAttributes,
  ButtonSizeAttribute,
  ButtonStatusAttribute,
} from '../../whitelabel';
import whitelabel from '../../whitelabel-fluent';
import { StyledButton, StyledText } from './style';

// import whitelabel from '../../whitelabel-material-ui';

interface ButtonProps {
  text: string;
  type: 'default' | 'accent' | 'text';
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
