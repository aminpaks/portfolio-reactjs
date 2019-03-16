import React, { useContext, useState, useCallback, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';

import { HeadTitle } from 'src/+Shared';
import { ThemeContext, fade } from 'src/Theme';
import { Button, Typography, Spacing, Section } from 'src/UI-Kits';

const getSectionTitle = (element: Element) => {
  let node: Element | null = element;

  do {
    const title = node.querySelector('[data-variant="subheading"]');
    if (title) {
      return title.textContent;
    }
    node = node.parentNode as Element;
  } while (node && node.parentNode);

  return 'Unknown section';
};

export const Buttons = () => {
  // This is how you access the theme declaratively
  const theme = useContext(ThemeContext);
  const [clickedTarget, setTarget] = useState('None');
  const handleClick = useCallback((e: SyntheticEvent): void => {
    e.preventDefault();

    const target = e.target as Element | null;

    if (target) {
      const sectionTitle = getSectionTitle(target as Element);
      const title = (target.childNodes.length > 0 && target.childNodes[0].textContent) || '';
      setTarget(`${title} (from "${sectionTitle}" section)`);
    }
  }, []);

  return (
    <>
      <HeadTitle title="Buttons" suffix="Styleguide" />

      <div
        style={{
          top: '50%',
          position: 'fixed',
          zIndex: 10,
          padding: '2em',
          backgroundColor: fade('#fff', 0.4),
          border: '1px solid #fff',
          borderRadius: '0 1em 1em 0',
          boxShadow: '0 0 20px rgba(0,0,0,0.051)',
          userSelect: 'none',
          pointerEvents: 'none',
          fontWeight: 600,
        }}
      >
        Last clicked button: <span>{clickedTarget}</span>
      </div>

      <Section variant="fluid" style={{ textAlign: 'center' }}>
        <Spacing margin={['auto', 'auto', 'md']}>
          <Typography variant="subheading" text="Button Sizes" />
        </Spacing>

        <Button.Group>
          <Button text="Large size" size="large" onClick={handleClick} />
          <Button text="Default size" size="default" onClick={handleClick} />
          <Button text="Small size" size="small" onClick={handleClick} />
        </Button.Group>
      </Section>

      <Section variant="fluid" backgroundTheme="light-gray" style={{ textAlign: 'center' }}>
        <Spacing margin={['auto', 'auto', 'md']}>
          <Typography variant="subheading" text="Button Styles" />
        </Spacing>

        <Button.Group>
          <Button text="Default or Primary" variant="primary" onClick={handleClick} />
          <Button text="Secondary" variant="secondary" onClick={handleClick} />
          <Button text="Gray" variant="gray" onClick={handleClick} />
          <Button text="Outline" variant="primary-outline" onClick={handleClick} />
          <Button text="Light outline" variant="light-outline" onClick={handleClick} />
          <div
            style={{
              display: 'inline-block',
              borderRadius: '1.8em',
              backgroundColor: theme.colorSet.secondary,
            }}
          >
            <Button text="Invert outline" variant="invert-outline" onClick={handleClick} />
            <Button text="Cast outline" variant="cast-outline" onClick={handleClick} />
          </div>
        </Button.Group>
      </Section>

      <Section variant="fluid" backgroundTheme="accent" style={{ textAlign: 'center' }}>
        <Spacing margin={['auto', 'auto', 'md']}>
          <Typography
            variant="subheading"
            text="All buttons on accent background"
            style={{ textTransform: 'capitalize' }}
          />
        </Spacing>

        <Button.Group>
          <Button text="Default" onClick={handleClick} />
          <Button variant="primary-outline" text="Primary outline" onClick={handleClick} />
          <Button variant="light-outline" text="Light outline" onClick={handleClick} />
          <Button variant="invert-outline" text="Invert outline" onClick={handleClick} />
          <Button variant="cast-outline" text="Cast outline" onClick={handleClick} />
        </Button.Group>
      </Section>

      <Section style={{ textAlign: 'center' }}>
        <Spacing margin={['auto', 'auto', 'xs']}>
          <Typography variant="subheading" text="Link buttons" style={{ textTransform: 'capitalize' }} />
        </Spacing>
        <Spacing margin={['auto', 'auto', 'md']}>
          <Typography variant="body">
            These buttons are `A` html tag, you can use them to build native route or simple links. The following
            examples have an `onClick` assign to them to cancel the click event. You can still open them by right click!
          </Typography>
        </Spacing>

        <Button.Group>
          <Button text="Route Link" onClick={handleClick}>
            <Link to="/styleguide" />
          </Button>
          <Button text="Google.com" onClick={handleClick}>
            <a href="https://www.google.com" rel="noopener" target="_blank" />
          </Button>
        </Button.Group>

        <code style={{ display: 'inline-block', margin: '0 auto' }}>
          <pre>{`<Button text="Route Link" onClick={handleClick}>
  <Link to="/styleguide" />
</Button>`}</pre>
        </code>
      </Section>

      <Section backgroundTheme="light-gray" style={{ textAlign: 'center' }}>
        <Spacing margin={['auto', 'auto', 'xs']}>
          <Typography variant="subheading" text="Button group" style={{ textTransform: 'capitalize' }} />
        </Spacing>
        <Spacing margin={['auto', 'auto', 'md']}>
          <Typography variant="body">
            Button Group component helps you automatically align a group of button and manage their spacing.
          </Typography>
        </Spacing>

        <Button.Group>
          <Button text="Button #1" onClick={handleClick} />
          <Button text="Button #2" onClick={handleClick} />
        </Button.Group>

        <code style={{ display: 'inline-block', margin: '0 auto' }}>
          <pre>{`<Button.Group>
  <Button text="Button #1" onClick={handleClick} />
  <Button text="Button #2" onClick={handleClick} />
</Button.Group>`}</pre>
        </code>
      </Section>
    </>
  );
};
