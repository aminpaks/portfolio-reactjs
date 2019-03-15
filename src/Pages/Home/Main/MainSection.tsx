import React, { FC, useContext, lazy } from 'react';
import { importMDX } from 'mdx.macro';

import { ThemeContext, darken } from 'src/Theme';
import { Section, Grid } from 'src/UI-Kits';
import { StyledDevelopment } from './MainSection.styled';

const Content = lazy(() => importMDX('./Content.mdx'));

export const HomeMainSection: FC = () => {
  const {
    colorSet: { secondary },
  } = useContext(ThemeContext);

  return (
    <Section variant="left-round" backgroundTheme={[darken(secondary, 0.08), secondary]}>
      <Grid>
        <Grid.Col>
          <StyledDevelopment>
            <Content />
          </StyledDevelopment>
        </Grid.Col>
        <Grid.Col>
          <span>Web & UI Demo</span>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
