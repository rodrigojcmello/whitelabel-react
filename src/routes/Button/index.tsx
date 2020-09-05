import React, { FC } from 'react';
import Button from '../../components/Button';

const ButtonRoute: FC = () => {
  return (
    <>
      <Button type="accent" text="accent" />
      <Button type="default" text="default" />
      <Button type="text" text="text" />
    </>
  );
};

export default ButtonRoute;
