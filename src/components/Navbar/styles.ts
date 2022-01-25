import styled from 'styled-components';
import { IconBuilders } from '~/assets/svg';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  justify-content: flex-end;
  padding: ${pxToRem(24)};
`;

export const Image = styled.img.attrs({
  src: IconBuilders,
  alt: 'buildersIcon',
})``;
