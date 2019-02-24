import { ThemeProps, whiten, darken, fade, lighten } from 'src/Theme';
import { PartialButtonProps } from './Button';
type StyleState = 'normal' | 'hover' | 'focus';

type ButtonAndThemeProps = PartialButtonProps & ThemeProps;

export const getBackgroundColor = (state: StyleState = 'normal') => (
  props: ButtonAndThemeProps,
) => {
  const {
    variant,
    theme: { colorSet },
  } = props;
  if (state === 'normal') {
    switch (variant) {
      case 'default':
      case 'primary':
        return colorSet.primary;

      case 'secondary':
        return colorSet.primary;

      case 'gray':
        return colorSet.grayDark;

      case 'invert-outline':
        return '#fff';

      case 'cast-outline':
        return colorSet.secondary;

      default:
        break;
    }
  } else if (state === 'hover') {
    switch (variant) {
      case 'default':
      case 'primary':
      case 'light-outline':
        return colorSet.secondary;

      case 'gray':
      case 'primary-outline':
        return colorSet.primary;

      case 'secondary':
        return '#fff';

      case 'invert-outline':
        return darken(colorSet.primary, 0.1);

      case 'cast-outline':
        return darken(colorSet.secondary, 0.05);

      default:
        break;
    }
  } else if (state === 'focus') {
    switch (variant) {
      case 'default':
      case 'primary':
      case 'gray':
      case 'primary-outline':
        return darken(colorSet.primary, 0.1);

      case 'light-outline':
      case 'cast-outline':
        return whiten(colorSet.secondary, 0.15);

      case 'secondary':
        return '#fff';

      case 'invert-outline':
        return colorSet.primary;

      default:
        break;
    }
  }
  return null;
};

export const getBorderColor = (state: StyleState = 'normal') => (props: ButtonAndThemeProps) => {
  const {
    variant,
    theme: { colorSet },
  } = props;

  if (state === 'normal') {
    switch (variant) {
      case 'default':
        return fade(colorSet.primary, 1);

      case 'primary':
      case 'secondary':
      case 'primary-outline':
        return colorSet.primary;

      case 'light-outline':
        return lighten(colorSet.gray, 1);

      case 'gray':
        return colorSet.grayDark;

      case 'invert-outline':
      case 'cast-outline':
        return '#fff';

      default:
        break;
    }
  } else if (state === 'hover') {
    switch (variant) {
      case 'default':
      case 'primary':
      case 'light-outline':
      case 'cast-outline':
        return fade(colorSet.secondary, 1);

      case 'secondary':
        return colorSet.text;

      case 'primary-outline':
      case 'gray':
        return fade(colorSet.primary, 1);

      case 'invert-outline':
        return darken(colorSet.primary, 0.1);

      default:
        break;
    }
  } else if (state === 'focus') {
    switch (variant) {
      case 'invert-outline':
        return whiten(colorSet.primary, 0.15);

      case 'secondary':
        return lighten(colorSet.gray, 0.5);

      case 'cast-outline':
        return '#fff';

      default:
        break;
    }
  }
  return 'transparent';
};

export const getTextColor = (state: StyleState = 'normal') => (props: ButtonAndThemeProps) => {
  const {
    variant,
    theme: { colorSet },
  } = props;
  if (state === 'normal') {
    switch (variant) {
      case 'default':
      case 'primary':
      case 'secondary':
      case 'gray':
      case 'cast-outline':
        return colorSet.textInverted;

      case 'primary-outline':
        return darken(colorSet.primary, 0.2);

      default:
        return colorSet.text;
    }
  } else if (state === 'hover') {
    switch (variant) {
      case 'default':
      case 'primary':
      case 'gray':
      case 'primary-outline':
      case 'light-outline':
      case 'invert-outline':
        return colorSet.textInverted;

      case 'primary':
      case 'secondary':
        return colorSet.text;

      default:
        break;
    }
  } else if (state === 'focus') {
    switch (variant) {
      case 'default':
      case 'primary':
      case 'gray':
      case 'primary-outline':
      case 'light-outline':
      case 'invert-outline':
        return colorSet.textInverted;

      case 'secondary':
        return whiten(colorSet.text, 0.5);

      default:
        break;
    }
  }
  return null;
};

export const getPaddingValue = (props: PartialButtonProps) => {
  switch (props.size) {
    case 'large':
      return '1.2em 2.4em';

    case 'small':
      return '0.8em 1.6em';

    case 'default':
    default:
      return '1em 2em';
  }
};

export const getTextSize = (props: PartialButtonProps) => {
  switch (props.size) {
    case 'small':
      return '14px';

    case 'large':
      return '16px';

    case 'default':
    default:
      return '15px';
  }
};
