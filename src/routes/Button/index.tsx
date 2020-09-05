import React, { FC } from 'react';
import Button from '../../components/Button';

const ButtonRoute: FC = () => {
  return (
    <div>
      <div>
        Type
        <Button
          type="accent"
          text="accent faj o;dijf ao;idsjf oa;isdjf a;oidjfa os;"
        />
        <Button type="default" text="default" />
        <Button type="text" text="text" />
      </div>
      <div>
        Size
        <Button type="accent" text="accent small" size="small" />
        <Button type="default" text="default medium" size="medium" />
        <Button type="text" text="text large" size="large" />
      </div>
    </div>
  );
};

export default ButtonRoute;
