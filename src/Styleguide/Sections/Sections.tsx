import React, { FC } from 'react';

import { Panel, Typography, Grid, Button, Section } from 'src/UI-Kits';
import { HeadTitle } from 'src/+Shared';

export const Sections: FC = () => (
  <>
    <HeadTitle title="Sections" suffix="Styleguide" />

    <Section>
      <Typography variant="headline">Default Section</Typography>
      <Typography variant="body">
        Here is how it looks like to build a default section that has a limited width:
        <code>
          <pre>{`<Section>
  <Typography variant="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
</Section>`}</pre>
        </code>
      </Typography>
    </Section>

    <Section backgroundTheme="light-gray">
      <Typography variant="headline">Default Section with gray background theme</Typography>
      <Typography variant="body">
        it's important to mix it with different background theme. This way is easier to distinguish
        each section from the next one.
        <code>
          <pre>{`<Section backgroundTheme="light-gray">
  <Typography variant="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
</Section>`}</pre>
        </code>
      </Typography>
    </Section>

    <Section>
      <Typography variant="headline">Dummy section</Typography>
    </Section>

    <Section backgroundTheme="accent">
      <Typography variant="headline">Default Section with accent background theme</Typography>
      <Typography variant="body">
        it's important to mix it with different background theme. This way is easier to distinguish
        each section from the next one.
        <code>
          <pre>{`<Section backgroundTheme="light-gray">
  <Typography variant="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
</Section>`}</pre>
        </code>
      </Typography>
    </Section>

    <Section variant="fluid">
      <div style={{ maxWidth: '600px', padding: '0 2em', margin: '0 auto' }}>
        <Typography variant="headline">Fluid Section</Typography>
        <Typography variant="body">
          Fluid variant doesn't limit the width of the content so you have more flexibility over
          styling the content:
          <code>
            <pre>{`<Section variant="fluid">
  <div style={{ maxWidth: '600px', padding: '0 2em', margin: '0 auto' }}>
    <Typography variant="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
  </div>
</Section>`}</pre>
          </code>
        </Typography>
      </div>
    </Section>
  </>
);
