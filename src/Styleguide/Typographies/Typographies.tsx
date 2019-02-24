import React from 'react';
import { Typography } from 'src/UI-Kits';
import { HeadTitle } from 'src/+Shared';
import { StyledTypographyContainer } from './Typographies.styled';

export const Typographies = () => (
  <StyledTypographyContainer>
    <HeadTitle title="Typography" suffix="Styleguide" />
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
    </div>
  </StyledTypographyContainer>
);
