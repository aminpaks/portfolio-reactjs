import { FC } from 'react';

import { TypographyText, TypographyTextProps } from './Text';
import { TypographyProps } from './Typography';
import { StyledTypography } from './Typography.styled';

export const Typography: FC<TypographyProps> & {
  Text: FC<TypographyTextProps>;
} = StyledTypography as any;

Typography.Text = TypographyText;
