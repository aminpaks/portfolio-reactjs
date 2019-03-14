import React, { FC, useContext } from 'react';

import { ThemeContext, darken } from 'src/Theme';
import { Section } from 'src/UI-Kits';

export const HomeMainSection: FC = () => {
  const {
    colorSet: { secondary },
  } = useContext(ThemeContext);

  return (
    <Section variant="left-round" backgroundTheme={[darken(secondary, 0.08), secondary]}>
      <div style={{ lineHeight: '33em' }}>Main</div>
    </Section>
  );
};
