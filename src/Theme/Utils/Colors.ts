import colorUtils from 'color';

export const getPerceivedBrightness = (color: string) => {
  // Calculate the perceived brightness of a color
  // http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx
  const c = colorUtils(color);
  const redColor = c.red() ** 2 * 0.241;
  const greenColor = c.green() ** 2 * 0.691;
  const blueColor = c.blue() ** 2 * 0.068;

  return Math.sqrt(redColor + greenColor + blueColor);
};

export const getRandomColor = () => {
  const red = Math.floor(Math.random() * 255)
    .toString(16)
    .padStart(2, '0');
  const green = Math.floor(Math.random() * 255)
    .toString(16)
    .padStart(2, '0');
  const blue = Math.floor(Math.random() * 255)
    .toString(16)
    .padStart(2, '0');

  return `#${red}${green}${blue}`;
};

export const shouldUseDarkForeground = (background: string) => getPerceivedBrightness(background) >= 130;

export const getForegroundColor = (backgroundColor: string, colorSet?: { text: string; textInverted: string }) => {
  const { text, textInverted } = colorSet || { text: '#000', textInverted: '#fff' };

  return shouldUseDarkForeground(backgroundColor) ? text : textInverted;
};

export const whiten = (color: string, ratio: number) =>
  colorUtils(color)
    .whiten(ratio)
    .hex()
    .toString();

export const blacken = (color: string, ratio: number) =>
  colorUtils(color)
    .blacken(ratio)
    .hex()
    .toString();

export const lighten = (color: string, ratio: number) =>
  colorUtils(color)
    .lighten(ratio)
    .hex()
    .toString();

export const darken = (color: string, ratio: number) =>
  colorUtils(color)
    .darken(ratio)
    .hex()
    .toString();

export const fade = (color: string, opacity: number) =>
  colorUtils(color)
    .fade(1 - opacity)
    .rgb()
    .toString();

export const saturate = (color: string, ratio: number) =>
  colorUtils(color)
    .saturate(ratio)
    .hex()
    .toString();
