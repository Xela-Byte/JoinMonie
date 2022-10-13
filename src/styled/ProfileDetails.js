import styled from "styled-components";
import { colors } from "./UniversalStyles";

export const ProfileDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  @media screen and (min-width: 991px) {
    width: 50%;
    margin: auto;
  }
`;

export const ProfileDetailHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  & > img {
    width: 35px;
    height: 35px;
  }
  & > p {
    text-align: center;
    font-size: 18px;
    margin-left: 20%;
    color: ${colors.blue};
  }
  @media screen and (min-width: 991px) {
    margin-bottom: 5%;
    & > p {
      margin: auto;
      font-size: 4vh;
    }
  }
`;

export const ProfileDetailImage = styled.div`
  width: 100%;
  height: 20%;
  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
