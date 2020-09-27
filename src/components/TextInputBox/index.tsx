import React, { FC, useState } from 'react';
import LabelElement from './elements/Label';
import InputElement from './elements/Input';

interface ButtonProps {
  // text: string;
  type: 'label-on-top' | 'label-placehoder' | 'label-inline';
  size?: 'small' | 'medium' | 'large';
  // disabled?: boolean;
}

const TextInputBox: FC<ButtonProps> = ({ type, size }) => {
  const [value, setValue] = useState('');

  const hash = (+new Date() + Math.random() * 100).toString(32);
  const elementState = `${type} ${size || 'medium'}`;

  return (
    <span>
      <LabelElement htmlFor={hash} className={elementState}>
        Label
      </LabelElement>
      <InputElement
        type="text"
        id={hash}
        value={value}
        className={elementState}
        onChange={(event): void => {
          setValue(event.target.value);
        }}
      />
    </span>
  );
};

export default TextInputBox;
