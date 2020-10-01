import React, { FC } from 'react';
import TextInputBox from '../../components/TextInputBox';

const TextInputRoute: FC = () => {
  return (
    <div>
      <TextInputBox type="label-on-top" />
      <TextInputBox type="label-placeholder" />
    </div>
  );
};

export default TextInputRoute;
