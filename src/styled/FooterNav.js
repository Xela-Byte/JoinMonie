import styled from 'styled-components';
import { Centering, fontSizes } from './UniversalStyles';

export const FooterNavContainer = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  background: rgba(255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  bottom: 0px;
  display: flex;
  padding: 5px;
  gap: 3%;
  border-radius: 25px 25px 0px 0px;
`;

export const FooterNavTab = styled.div`
  width: 23%;
  height: 100%;
  ${Centering}
  flex-direction: column;
  & > img {
    width: 50%;
    height: 50%;
  }
  & > p {
    font-size: ${fontSizes.small};
  }
`;
