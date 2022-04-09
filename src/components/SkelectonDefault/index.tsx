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
      colors={['#363643', '#2e3341']}
      radius={16}
      width={width}
    >
      {children}
    </Skeleton>
  );
};

export default SkelectonDefault;
