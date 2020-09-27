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
        <Button type="accent" text="accent xLarge" size="x-large" />
        <Button type="default" text="default medium" size="medium" />
        <Button type="text" text="text medium" size="medium" />
      </div>
      <div>
        Status
        <Button type="accent" text="accent" size="medium" />
        <Button type="accent" text="accent" size="medium" disabled />
      </div>
    </div>
  );
};

export default ButtonRoute;
