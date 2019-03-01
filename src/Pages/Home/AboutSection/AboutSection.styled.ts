import styled from 'styled-components';
import { AboutSection, AboutSectionProps } from './AboutSection';
import { FC } from 'react';

export const AboutSectionStyled: FC<AboutSectionProps> = styled.div`
  height: 700px;
  background: ${(props) => props.theme.colorSet.secondary};
`;
