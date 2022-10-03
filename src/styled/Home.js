import styled from 'styled-components';
import { colors, fontSizes } from './UniversalStyles';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HomeImgContainer = styled.div`
  width: 100%;
  height: 60%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 991px) {
    height: 80%;
  }
`;

export const HomeContent = styled.div`
  width: 100%;
  height: 30%;
  padding: 5%;
  @media screen and (min-width: 991px) {
    height: 50%;
  }
`;

export const HomeContentText = styled.p`
  text-align: center;
  margin-bottom: 5%;
  &:first-child {
    font-size: ${fontSizes.medium};
    font-weight: 700;
  }
  &:last-child {
    font-size: ${fontSizes.small};
  }
  @media screen and (min-width: 991px) {
    margin-bottom: 2.5%;
    &:first-child {
      font-size: 4vh;
    }
    &:last-child {
      font-size: 3vh;
    }
  }
`;

export const HomeBtn = styled.div`
  width: 70%;
  padding: 10px;
  background: ${colors.blue};
  margin: auto;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  border-radius: 15px;
  & > a {
    color: ${colors.white};
    text-decoration: none;
  }
  @media screen and (min-width: 991px) {
    padding: 15px;
    width: 25%;
    & > a {
      font-size: 3vh;
    }
  }
`;
