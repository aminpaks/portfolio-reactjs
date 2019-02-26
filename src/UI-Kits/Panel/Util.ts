import { WithThemeProps } from 'src/Theme';
import { PanelProps } from './Panel';

export const getPaddingValue = (props: WithThemeProps<PanelProps>) => {
  switch (props.margins) {
    case 'out-standing':
      return '5.2em 1.8em';
    case 'default':
    default:
      return '3.4em 1.8em';
  }
};

export const buildVariants = (props: WithThemeProps<PanelProps>) => {
  if (props.variant === 'with-top-accent') {
    return `
      position: relative;

      &:before {
        top: 0;
        left: 0;
        right: 0;
        height: 0.6em;
        content: '';
        display: block;
        position: absolute;
        background-color: ${props.theme.colorSet.primary};
      }
    `;
  }
};
