import React from 'react';

import { Grid, Section, Typography } from 'src/UI-Kits';
import { HeadTitle } from 'src/+Shared';
import { StyledGridSystemContainer } from './Grid.styled';
import { MediaQuery } from './MediaQuery';
import { ViewBreakpoint } from 'src/Theme';

const breakpoints: { [key: string]: string } = {
  xs: 'Extra Small',
  sm: 'Small',
  md: 'Medium',
  lg: 'Large',
  xl: 'Extra Large',
  xxl: 'Double Extra Large',
};

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
  when an unknown printer took a galley of type and scrambled it to make a type \
  specimen book.It has survived not only five centuries, but also the leap into \
  electronic typesetting, remaining essentially unchanged.It was popularised in \
  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, \
  and more recently with desktop publishing software like Aldus PageMaker \
  including versions of Lorem Ipsum.";

export const GridSystem = () => (
  <>
    <HeadTitle title="Grid System" suffix="Styleguide" />

    <StyledGridSystemContainer>
      <Section variant="fluid">
        <Typography variant="headline" text="Grid System" />
        <p>
          The grid system is generic and clever at the same time. We designed it this way to cover most of responsive
          layouts the use-cases.
        </p>
        <p>
          The column component <strong>`{`<Grid.Col />`}`</strong> has a flexible API to help you achieve different
          use-cases. Here is how it works:
          <ul>
            <li>
              If you dont set any breakpoint props, the available width will equally be divided to all the columns
            </li>
            <li>
              You can set the breakpoint props to an explicit size value:
              <br />
              <strong>`{`<Grid.Col xs={12} lg={6} />`}`</strong> respectively is 12/12 in extra small, 6/12 in small and
              the rest of breakpoints are calculated based on the closest breakpoint. (In this case small and medium
              breakpoints are size 12/12 and extra large and double extra large breakpoints are 6/12.)
            </li>
            <li>You can set the `size` prop to set all of the breakpoints to the same size.</li>
          </ul>
        </p>

        <Typography variant="subheading" text="Columns without any size or breakpoint props" />
        <Grid>
          <Grid.Col>
            <h3>1/2</h3>
            <p>{lorem}</p>
          </Grid.Col>
          <Grid.Col>
            <h3>1/2</h3>
            <p>{lorem}</p>
          </Grid.Col>
        </Grid>
      </Section>

      <Section variant="fluid">
        <Typography variant="subheading" text="Size &amp; Breakpoint Props (Responsive)" />
        <MediaQuery>
          {(breakpoint: string) => (
            <p>
              Current breakpoint:{' '}
              <strong>
                {breakpoints[breakpoint]} ({breakpoint})
              </strong>
            </p>
          )}
        </MediaQuery>

        <Grid>
          <Grid.Col xs={12} lg={6} xxl={4}>
            <h3>{`xs={12} lg={6} xxl={4}`}</h3>
            <p>{lorem}</p>
          </Grid.Col>
          <Grid.Col xs={12} lg={6} xxl={4}>
            <h3>{`xs={12} lg={6} xxl={4}`}</h3>
            <p>{lorem}</p>
          </Grid.Col>
          <Grid.Col xs={12} xxl={4}>
            <h3>{`xs={12} xxl={4}`}</h3>
            <p>{lorem}</p>
          </Grid.Col>
          <Grid.Col size={12}>
            <h3>{`size={12}`}</h3>
            <p>{lorem}</p>
          </Grid.Col>
        </Grid>
      </Section>
    </StyledGridSystemContainer>
  </>
);
