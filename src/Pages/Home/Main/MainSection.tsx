import { importMDX } from 'mdx.macro';
import React, { FC, lazy, useContext } from 'react';
import { darken, ThemeContext } from 'src/Theme';
import { Grid, Section } from 'src/UI-Kits';

import { UIDemos } from './Demos';
import { StyledDevelopment } from './MainSection.styled';

const Content = lazy(() => importMDX('./Content.mdx'));

export const HomeMainSection: FC = () => {
  const {
    colorSet: { secondary },
  } = useContext(ThemeContext);

  return (
    <Section variant="left-round" backgroundTheme={[darken(secondary, 0.08), secondary]}>
      <Grid>
        <Grid.Col xs={12} xl={8}>
          <StyledDevelopment>
            <Content />
          </StyledDevelopment>
        </Grid.Col>
        <Grid.Col xs={0} xl={4}>
          <UIDemos />
        </Grid.Col>
      </Grid>
    </Section>
  );
};
