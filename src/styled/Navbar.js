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
  @media screen and (min-width: 991px) {
    width: 100%;
    padding: 2% 10px 5% 10px;
  }
`;

export const NavbarIcon = styled.img`
  width: 30px;
  height: 30px;
  &:first-child {
    align-self: flex-end;
    margin-right: 4%;
    margin-bottom: 5%;
    transform: rotate(180deg);
  }
  @media screen and (min-width: 991px) {
    width: 40px;
    cursor: pointer;
    height: 40px;
  }
`;

export const NavbarTab = styled.div`
  cursor: pointer;
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
    width: 30px;
    height: 30px;
    cursor: pointer;
    transform: rotate(180deg);
  }
  @media screen and (min-width: 991px) {
    width: 60%;
    & > img {
      width: 35px;
      height: 35px;
      margin-right: 5%;
    }
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
    cursor: pointer;
  }
`;
