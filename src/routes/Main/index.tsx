import React, { FC } from 'react';
import Button from '../../components/Button';
import TextInputBox from '../../components/TextInputBox';

const MainRoute: FC = () => {
  return (
    <div>
      <div style={{ width: 300 }}>
        <div style={{ marginBottom: 16 }}>
          <TextInputBox type="label-on-top" label="e-mail" />
        </div>
        <div style={{ marginBottom: 12 }}>
          <TextInputBox type="label-placeholder" label="senha" />
        </div>
        <div style={{ marginBottom: 12, display: 'flex', columnGap: 16 }}>
          <Button type="accent" text="Entrar" />
          <Button type="default" text="Esqueci a senha" />
        </div>
      </div>
    </div>
  );
};

export default MainRoute;
