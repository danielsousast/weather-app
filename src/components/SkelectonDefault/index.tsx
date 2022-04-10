import { Skeleton } from 'moti/skeleton';
import React from 'react';

type SkelectonDefaultProps = {
  show: boolean;
  width?: number;
  children: any;
};

const SkelectonDefault: React.FC<SkelectonDefaultProps> = ({
  show,
  width,
  children,
}) => {
  return (
    <Skeleton
      show={show}
      colors={['#3f3f5a', '#242937']}
      radius={16}
      width={width}
    >
      {children}
    </Skeleton>
  );
};

export default SkelectonDefault;
