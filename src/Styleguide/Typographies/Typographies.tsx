import React from 'react';

import { HeadTitle } from 'src/+Shared';
import { Typography, Section, Panel, Grid } from 'src/UI-Kits';
import { StyledTypographyContainer } from './Typographies.styled';

export const Typographies = () => (
  <StyledTypographyContainer>
    <HeadTitle title="Typography" suffix="Styleguide" />

    <Section>
      <Typography.Text>
        <Typography variant="title" text="Title" />
        <Typography variant="body">
          First paragraph. Welcome to our wonderful world. We sincerely hope that each and every
          user entering our website will find exactly what he/she is looking for. With advanced
          features of activating account and new login widgets, you will definitely have a great
          experience of using our web page.
        </Typography>
        <Typography variant="body">
          Second paragraph. Welcome to our wonderful world. We sincerely hope that each and every
          user entering our website will find exactly what he/she is looking for. With advanced
          features of activating account and new login widgets, you will definitely have a great
          experience of using our web page.
        </Typography>
      </Typography.Text>
    </Section>

    <Section backgroundTheme="light-gray">
      <Typography.Text>
        <Typography variant="headline">Headline</Typography>
        <Typography variant="body">
          First paragraph. Welcome to our wonderful world. We sincerely hope that each and every
          user entering our website will find exactly what he/she is looking for. With advanced
          features of activating account and new login widgets, you will definitely have a great
          experience of using our web page.
        </Typography>
        <Typography variant="body">
          Second paragraph. Welcome to our wonderful world. We sincerely hope that each and every
          user entering our website will find exactly what he/she is looking for. With advanced
          features of activating account and new login widgets, you will definitely have a great
          experience of using our web page.
        </Typography>
      </Typography.Text>
    </Section>

    <Section>
      <Typography.Text>
        <Typography variant="subheading">Subheading</Typography>
        <Typography variant="body">
          First paragraph. Welcome to our wonderful world. We sincerely hope that each and every
          user entering our website will find exactly what he/she is looking for. With advanced
          features of activating account and new login widgets, you will definitely have a great
          experience of using our web page.
        </Typography>
        <Typography variant="body">
          Second paragraph. Welcome to our wonderful world. We sincerely hope that each and every
          user entering our website will find exactly what he/she is looking for. With advanced
          features of activating account and new login widgets, you will definitely have a great
          experience of using our web page.
        </Typography>
      </Typography.Text>
    </Section>

    <Section backgroundTheme="light-gray">
      <Typography.Text>
        <Typography variant="headline" text="Typography Text component" />
        <Typography variant="body">
          If you need to align a group of Typography components together you can wrap them with
          Typography.Text component. This component apply the right margins depending on the variant
          and position of the Typography.
        </Typography>
        <Typography variant="body" component="code">
          <pre>
            {`<Typography.Text>
  <Typography variant="headline" text="Typography Text" />
  <Typography variant="body">
    If you need to align a group of Typography components together you can wrap them with
    Typography.Text component. This component apply the right margins depending on the variant
    and position of the Typography.
  </Typography>
</Typography.Text>`}
          </pre>
        </Typography>
      </Typography.Text>
    </Section>

    <Section>
      <Typography variant="headline" text="HTML Text Elements" />
      <Typography variant="body">
        <b>Bold text</b> <mark>This is a highlighted text</mark>{' '}
        <span className="strike-text">This is a strickethrough text</span>{' '}
        <span className="underline-text">This is an underlined text.</span>
      </Typography>
      <code>
        <pre>
          {`<Typography variant="body">
  <b>Bold text</b> <mark>This is a highlighted text</mark>
  <span className="strike-text">This is a strickethrough text</span>
  <span className="underline-text">This is an underlined text.</span>
</Typography>`}
        </pre>
      </code>
      <Typography variant="body">
        Welcome to our wonderful world. We sincerely hope that each and every user entering our
        website will find exactly what he/she is looking forLinkHover linkPress linkWith advanced
        features of activating account and new login widgets, you will definitely have a great
        experience of using our web page.
      </Typography>
    </Section>

    <Section backgroundTheme="accent">
      <Typography variant="headline" text="Section with accent color" />
      <Typography variant="body">
        <b>Bold text</b> <mark>This is a highlighted text</mark>{' '}
        <span className="strike-text">This is a strickethrough text</span>{' '}
        <span className="underline-text">This is an underlined text.</span>
      </Typography>
    </Section>

    <Section backgroundTheme="accent">
      <Grid>
        <Grid.Col>
          <Panel variant="with-top-accent">
            <Typography.Text>
              <Typography variant="headline" text="Section & Panel" />
              <Typography variant="body">
                Welcome to our wonderful world. We sincerely hope that each and every user entering
                our website will find exactly what he/she is looking forLinkHover linkPress linkWith
                advanced features of activating account and new login widgets, you will definitely
                have a great experience of using our web page.
              </Typography>
            </Typography.Text>
          </Panel>
        </Grid.Col>
        <Grid.Col>
          <Panel variant="with-top-accent">
            <Typography.Text>
              <Typography variant="headline" text="Section & Panel" />
              <Typography variant="body">
                Welcome to our wonderful world. We sincerely hope that each and every user entering
                our website will find exactly what he/she is looking forLinkHover linkPress linkWith
                advanced features of activating account and new login widgets, you will definitely
                have a great experience of using our web page.
              </Typography>
            </Typography.Text>
          </Panel>
        </Grid.Col>
      </Grid>
    </Section>
  </StyledTypographyContainer>
);
