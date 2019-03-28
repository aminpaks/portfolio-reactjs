import { ReactElement, ComponentType } from 'react';

import { SpacingToken, CSSShorthandProperty } from 'src/Theme';

export interface SpacingProps {
  as?: string | ComponentType<any>;
  children?: ReactElement<any> | null;
  className?: string;
  margin?: CSSShorthandProperty<SpacingToken>;
  padding?: CSSShorthandProperty<SpacingToken>;
}
