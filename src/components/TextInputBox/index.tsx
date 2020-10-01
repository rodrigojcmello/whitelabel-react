import React, { FC, useState } from 'react';
import LabelElement from './elements/Label';
import InputElement from './elements/Input';
import BlockElement from './elements/Block';
import HintElement from './elements/Hint';

interface ButtonProps {
  // text: string;
  type: 'label-on-top' | 'label-placeholder' | 'label-inline';
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  hint?: string;
  // disabled?: boolean;
}

const TextInputBox: FC<ButtonProps> = ({ type, size, placeholder, hint }) => {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);

  const hash = (+new Date() + Math.random() * 100).toString(32);
  const elementState = `${type} ${size || 'medium'} ${focus ? 'focus' : ''}`;

  return (
    <BlockElement className={elementState}>
      <LabelElement htmlFor={hash} className={elementState}>
        {label}
      </LabelElement>
      <InputElement
        type="text"
        id={hash}
        value={value}
        className={elementState}
        placeholder={placeholder}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        onChange={(event): void => {
          setValue(event.target.value);
        }}
      />
      <HintElement>{hint}</HintElement>
    </BlockElement>
  );
};

export default TextInputBox;
