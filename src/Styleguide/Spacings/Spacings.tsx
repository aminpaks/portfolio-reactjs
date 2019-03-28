import React, { FC } from 'react';

import { HeadTitle } from 'src/+Shared';
import { getRandomColor, getForegroundColor } from 'src/Theme';
import { Section, Typography, Spacing } from 'src/UI-Kits';

const Wrap: FC = ({ children }) => <div style={{ border: '1px solid silver', marginTop: '2em' }}>{children}</div>;

const getStyle = () => {
  const backgroundColor = getRandomColor();
  const color = getForegroundColor(backgroundColor);
  const border = `1px solid #000`;
  return { color, backgroundColor, border };
};

const Box: FC<{ className: string }> = ({ className, children }) => (
  <div className={className} style={getStyle()}>
    {children}
  </div>
);

export const Spacings: FC = () => (
  <>
    <HeadTitle title="Spacing" suffix="Styleguide" />

    <Section>
      <Wrap>
        <Spacing margin={['md']}>
          <Typography variant="headline" text="Medium Margin Spacing" />
        </Spacing>
      </Wrap>
      <code>
        <pre>{`<Spacing margin={['md']}>
  <Typography variant="headline" text="Medium Margin Spacing" />
</Spacing>`}</pre>
      </code>
      <Wrap>
        <Spacing margin={['md', '0']}>
          <Typography variant="body">Margin Spacing - top: medium, right: 0, bottom: medium, left: 0</Typography>
        </Spacing>
      </Wrap>
      <code>
        <pre>{`<Spacing margin={['md', '0']}>
  <Typography variant="body">Margin Spacing - top: medium, right: 0, bottom: medium, left: 0</Typography>
</Spacing>`}</pre>
      </code>
      <Wrap>
        <Spacing margin={['none', 'lg', 'xs']}>
          <Typography variant="body">
            Margin Spacing - top: nothing, right: large, bottom: extra small, left: large
          </Typography>
        </Spacing>
      </Wrap>
      <code>
        <pre>{`<Spacing margin={['none', 'lg', 'xs']}>
  <Typography variant="body">Margin Spacing - top: nothing, right: large, bottom: extra small, left: large</Typography>
</Spacing>`}</pre>
      </code>
      <Wrap>
        <Spacing padding={['xl', '0', 'md']}>
          <Typography variant="body">Padding Spacing - top: extra large, right: 0, bottom: medium, left: 0</Typography>
        </Spacing>
      </Wrap>
      <code>
        <pre>{`<Spacing padding={['xl', '0', 'md']}>
  <Typography variant="body">Padding Spacing - top: extra large, right: 0, bottom: medium, left: 0</Typography>
</Spacing>`}</pre>
      </code>
    </Section>

    <Section backgroundTheme="accent">
      <Spacing padding={['md']} as={Box}>
        <div style={{ ...getStyle(), padding: '1em' }}>
          <Spacing padding={['md']} as="div">
            <Typography variant="body" component="span">
              Apply spacing to a box
            </Typography>
          </Spacing>
          <Spacing padding={['lg']} as={Box}>
            <div style={{ ...getStyle(), height: '200px', padding: '2em' }}>
              Apply medium padding to a wrapper and then apply medium margin.
            </div>
          </Spacing>
        </div>
      </Spacing>
    </Section>
  </>
);
