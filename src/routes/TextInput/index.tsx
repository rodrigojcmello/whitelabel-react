import React, { FC } from 'react';
import TextInputBox from '../../components/TextInputBox';

const TextInputRoute: FC = () => {
  return (
    <div>
      <TextInputBox
        type="label-on-top"
        hint="lorem ipsum dolor sit amet"
        placeholder="placeholder"
      />
    </div>
  );
};

export default TextInputRoute;
