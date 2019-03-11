import { ReactElement, ComponentType } from 'react';

import { SpacingToken } from 'src/Theme';

export interface SpacingProps {
  as?: string | ComponentType<any>;
  children?: ReactElement<any> | null;
  className?: string;
  margin?: [SpacingToken, SpacingToken?, SpacingToken?, SpacingToken?];
  padding?: [SpacingToken, SpacingToken?, SpacingToken?, SpacingToken?];
}
