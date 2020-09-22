import React, { FC, useState } from 'react';
import { StyledInput, StyledLabel } from './style';

interface ButtonProps {
  // text: string;
  type: 'accent' | 'default' | 'text';
  size?: 'small' | 'medium' | 'large';
  // disabled?: boolean;
}

const TextInput: FC<ButtonProps> = ({ type, size }) => {
  const [value, setValue] = useState('');

  const hash = (+new Date() + Math.random() * 100).toString(32);

  return (
    <span>
      <StyledLabel htmlFor={hash}>Label</StyledLabel>
      <StyledInput
        type="text"
        id={hash}
        value={value}
        className={`${type} ${size || 'medium'}`}
        onChange={(event): void => {
          setValue(event.target.value);
        }}
      />
    </span>
  );
};

export default TextInput;
