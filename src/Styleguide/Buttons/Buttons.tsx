import React, { useContext, FC } from 'react';
import { ThemeContext, getForegroundColor, ColorSet, ThemeProvider } from '../../Theme';
import { Button, HeadTitle } from '../../Pages/+Shared';

const ShouldBeDarkForeground: FC<{ backgroundColor?: string; colorSet?: ColorSet }> = ({
  backgroundColor = '#fff',
  colorSet,
}) => {
  const foregroundColor = getForegroundColor(backgroundColor, colorSet);
  return (
    <h4 style={{ fontWeight: 'normal', color: foregroundColor }}>
      What color text should be on this background? <b>{foregroundColor}</b>
    </h4>
  );
};

export const Buttons = () => {
  // This is how you access the theme declaratively
  const theme = useContext(ThemeContext);

  return (
    <div>
      <HeadTitle title="Buttons" suffix="Styleguide" />
      <div style={{ padding: '2em', backgroundColor: theme.colorSet.secondary }}>
        <ShouldBeDarkForeground backgroundColor={theme.colorSet.secondary} />
        <Button text="button default" />
        <Button text="button primary" variant="primary" />
        <Button text="button secondary" variant="secondary" />
      </div>
      <div style={{ padding: '2em' }}>
        <ShouldBeDarkForeground colorSet={theme.colorSet} />
        <Button text="button default outline" variant="default-outline" />
        <Button text="button secondary" variant="secondary" />
      </div>
    </div>
  );
};
