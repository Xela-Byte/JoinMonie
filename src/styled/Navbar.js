import styled from "styled-components";
import { colors, fontSizes, Centering } from "./UniversalStyles";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  display: flex;
  gap: 2%;
  flex-direction: column;
  padding: 15% 10px 15% 10px;
  background: ${colors.white};
`;

export const NavbarIcon = styled.img`
  width: 20px;
  height: 20px;
  &:first-child {
    align-self: flex-end;
    margin-bottom: 5%;
  }
`;

export const NavbarTab = styled.div`
  width: 95%;
  height: 80px;
  ${Centering}
  box-shadow: -5px 5px 10px #c5c5c5, 10px -10px 17px #fbfbfb;
  padding: 10px;
  border-radius: 15px;
  gap: 3%;
  margin: auto;
  & > p {
    text-transform: capitalize;
    font-size: ${fontSizes.small};
  }
  & > img {
    margin-left: auto;
  }
`;

export const NavbarTabIconContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: #eee;
  ${Centering}
  padding: 5px;
  & > img {
    width: 70%;
    height: 70%;
  }
`;
