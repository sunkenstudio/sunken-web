import { Icon } from '@/app/components/_Shared/Icon';
import { Button, Collapse } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';

interface CollapsibleInputProps {
  children: ReactNode;
}

export const CollapsibleInput = ({ children }: CollapsibleInputProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <Button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? (
          <Icon type="ArrowsOutSimple" size={24} color={'black'} />
        ) : (
          <Icon type="ArrowsInSimple" size={24} color={'black'} />
        )}
      </Button>
      <Collapse in={!isCollapsed}>{children}</Collapse>
    </>
  );
};
