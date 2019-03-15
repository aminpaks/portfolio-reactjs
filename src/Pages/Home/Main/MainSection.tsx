import React, { FC, useContext } from 'react';

import { ThemeContext, darken } from 'src/Theme';
import { Section, Typography, Spacing, Grid } from 'src/UI-Kits';
import { StyledDevelopment } from './MainSection.styled';

export const HomeMainSection: FC = () => {
  const {
    colorSet: { secondary },
  } = useContext(ThemeContext);

  return (
    <Section variant="left-round" backgroundTheme={[darken(secondary, 0.08), secondary]}>
      <Grid>
        <Grid.Col>
          <StyledDevelopment>
            <div>
              <Typography variant="title" text="web app" component="b" />
              <Typography variant="title" text="development" style={{ fontWeight: 300 }} component="span" />
            </div>
          </StyledDevelopment>
          <Spacing margin={['md', 'auto', 'auto']}>
            <Typography variant="body" style={{ fontSize: '1.2em', opacity: 0.6 }}>
              We provide extensive web app development services for individual and corporate clients. Feel free to check
              out our portfolio for demos.
            </Typography>
          </Spacing>
        </Grid.Col>
        <Grid.Col style={{ border: '1px solid #fff' }}>
          <span>Website Demo</span>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
