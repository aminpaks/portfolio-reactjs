import React, { FC, ComponentType, useContext } from 'react';

import { ThemeContext, mixWith } from 'src/Theme';
import { Background } from './Background';
import { StyledAnimatedIcon } from './AnimatedIcon.styled';

export type IconType = ComponentType<{ color?: string; className?: string }>;

export const AnimatedIcon: FC<{ icon?: IconType; className?: string }> = ({ icon, className }) => {
  const { colorSet } = useContext(ThemeContext);

  return icon == null ? null : (
    <StyledAnimatedIcon className={className}>
      <Background color={colorSet.primary} />
      {React.createElement(icon, { color: mixWith(colorSet.primary, colorSet.secondary, 0.3), className: 'icon' })}
    </StyledAnimatedIcon>
  );
};
