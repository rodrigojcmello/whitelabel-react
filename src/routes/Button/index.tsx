import React, { FC } from 'react';
import Button from '../../components/Button';

const ButtonRoute: FC = () => {
  return (
    <div>
      <div>
        Type
        <Button
          type="type1"
          text="accent faj o;dijf ao;idsjf oa;isdjf a;oidjfa os;"
        />
        <Button type="type1" text="default" />
        <Button type="type1" text="text" />
      </div>
      <div>
        Size
        <Button type="type1" text="accent small" size="medium" />
        <Button type="type2" text="default medium" size="medium" />
        <Button type="type3" text="text large" size="medium" />
      </div>
      <div>
        Status
        <Button type="type1" text="accent" size="medium" />
        <Button type="type1" text="accent" size="medium" disabled />
      </div>
    </div>
  );
};

export default ButtonRoute;
