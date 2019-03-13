import React, { FC } from 'react';

import { Panel, Typography, Spacing } from 'src/UI-Kits';
import { AnimatedIcon, IconType } from './AnimatedIcon';
import { StyledServiceItem } from './ServiceItem.styled';

export const ServiceItem: FC<{ headline: string; text: string; icon?: IconType }> = ({ headline, text, icon }) => (
  <Panel>
    <StyledServiceItem>
      <Spacing margin={['xs', 'auto', 'md']}>
        <AnimatedIcon icon={icon} />
      </Spacing>
      <Typography variant="subheading" text={headline} />
      <Spacing margin={['sm', '0', '0']}>
        <Typography variant="body">{text}</Typography>
      </Spacing>
    </StyledServiceItem>
  </Panel>
);
