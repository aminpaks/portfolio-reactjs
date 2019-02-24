import React, { useContext, FC } from 'react';
import { ThemeContext } from 'src/Theme';
import { Button } from 'src/UI-Kits';
import { HeadTitle } from 'src/+Shared';
import { StyledSectionContainer } from './Buttons.styled';

export const Buttons = () => {
  // This is how you access the theme declaratively
  const theme = useContext(ThemeContext);

  return (
    <div>
      <HeadTitle title="Buttons" suffix="Styleguide" />
      <StyledSectionContainer>
        <h3>Button Sizes</h3>
        <Button text="Large size" size="large" />
        <Button text="Default size" size="default" />
        <Button text="Small size" size="small" />
      </StyledSectionContainer>
      <StyledSectionContainer>
        <h3>Button Styles</h3>

        <Button text="Default or Primary" variant="primary" />
        <Button text="Secondary" variant="secondary" />
        <Button text="Gray" variant="gray" />
        <Button text="Outline" variant="primary-outline" />
        <Button text="Light outline" variant="light-outline" />
        <div
          style={{
            display: 'inline-block',
            borderRadius: '1.8em',
            backgroundColor: theme.colorSet.secondary,
          }}
        >
          <Button text="Invert outline" variant="invert-outline" />
          <Button text="Cast outline" variant="cast-outline" />
        </div>
      </StyledSectionContainer>
    </div>
  );
};
