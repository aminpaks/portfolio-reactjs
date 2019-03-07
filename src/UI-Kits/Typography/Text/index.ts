import { FC } from 'react';

import { TypographyTextProps } from './types';
import { StyledTypographyText } from './Text.styled';

export * from './types';
export const TypographyText: FC<TypographyTextProps> = StyledTypographyText;
