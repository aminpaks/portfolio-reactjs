import React, { FC } from 'react';

import { Panel, Typography, Grid, Button, Section } from 'src/UI-Kits';
import { HeadTitle } from 'src/+Shared';
import { StyledSectionContainer } from './Panels.styled';

export const Panels: FC = () => {
  return (
    <>
      <HeadTitle title="Panels" suffix="Styleguide" />

      <Section>
        <Typography variant="headline" text="One Sample Panel" />
        <StyledSectionContainer>
          <Panel>Content 1</Panel>
        </StyledSectionContainer>
      </Section>

      <Section backgroundTheme="accent">
        <Typography variant="headline" text="Tree Sample Panel" />
        <StyledSectionContainer style={{ textAlign: 'center' }}>
          <Grid>
            <Grid.Col>
              <Panel>
                <Typography
                  variant="subheading"
                  colorTheme="primary"
                  style={{ marginTop: 0, marginBottom: 0 }}
                >
                  <b>Sample</b>
                </Typography>
              </Panel>
            </Grid.Col>
            <Grid.Col>
              <Panel variant="with-top-accent" margins="out-standing">
                <div>
                  <Typography variant="subheading" colorTheme="primary" style={{ marginTop: 0 }}>
                    <b>Out Standing Margins</b>
                  </Typography>
                  <Typography variant="body">
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ul>
                  </Typography>
                  <code style={{ textAlign: 'initial' }}>
                    <pre>
                      {`<Panel variant="with-top-accent" margins="out-standing">
  Content
</Panel>`}
                    </pre>
                  </code>
                </div>
                <Button text="Select Option" variant="light-outline" />
              </Panel>
            </Grid.Col>
            <Grid.Col>
              <Panel>Content 3</Panel>
            </Grid.Col>
          </Grid>
        </StyledSectionContainer>
      </Section>

      <Section backgroundTheme="light-gray">
        <Typography variant="headline" text="Four Sample Panel" />
        <StyledSectionContainer style={{ textAlign: 'center' }}>
          <Grid>
            <Grid.Col>
              <Panel>
                <Typography
                  variant="subheading"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  text="iOS/MacOS Apps"
                />
              </Panel>
            </Grid.Col>
            <Grid.Col>
              <Panel>
                <Typography
                  variant="subheading"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  text="Android Applications"
                />
              </Panel>
            </Grid.Col>
            <Grid.Col>
              <Panel>
                <Typography
                  variant="subheading"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  text="Cloud Development"
                />
              </Panel>
            </Grid.Col>
            <Grid.Col>
              <Panel>
                <Typography
                  variant="subheading"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  text="Call Center Solutions"
                />
              </Panel>
            </Grid.Col>
          </Grid>
        </StyledSectionContainer>
      </Section>
    </>
  );
};
