import { WithThemeProps } from '../types';
import { getNormalizedTokenValue } from './Util';

type SomeProps = { gutter?: string };
describe('getNormalizedTokenValue()', () => {
  const props = {
    theme: {
      tokens: {
        spacing: {
          xs: '1em',
          sm: '2em',
          md: '3em',
          lg: '4em',
          xl: '5em',
        },
      },
    },
  } as WithThemeProps<SomeProps>;

  it('should return the token value', () => {
    const result = getNormalizedTokenValue<SomeProps>({ tokenType: 'spacing', propName: 'gutter' })({
      ...props,
      gutter: 'xs',
    });

    expect(result).toBe('1em');
  });

  it('should return the token value by default', () => {
    const result = getNormalizedTokenValue<SomeProps>({
      tokenType: 'spacing',
      propName: 'gutter',
      defaultTokenKey: 'sm',
    })(props);

    expect(result).toBe('2em');
  });

  it('should return a normalized token value', () => {
    const result = getNormalizedTokenValue<SomeProps>({ tokenType: 'spacing', propName: 'gutter', normalize: -2 })({
      ...props,
      gutter: 'md',
    });

    expect(result).toBe('-6em');
  });
});
