import React, { FC } from 'react';
import { Panel, Spacing, Typography } from 'src/UI-Kits';

import { AnimatedIcon, IconType } from './AnimatedIcon';

export const ExpertiseItem: FC<{ headline: string; text: string; icon?: IconType }> = ({ headline, text, icon }) => (
  <Panel>
    <div>
      <Spacing margin={['xs', 'auto', 'md']}>
        <AnimatedIcon icon={icon} />
      </Spacing>
      <Typography variant="subheading" text={headline} />
      <Spacing margin={['sm', '0', '0']}>
        <Typography variant="body">{text}</Typography>
      </Spacing>
    </div>
  </Panel>
);
