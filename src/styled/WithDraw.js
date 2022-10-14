import styled from "styled-components";
import { colors, Centering } from "./UniversalStyles";

export const WithdrawContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  @media screen and (min-width: 991px) {
    width: 50%;
    margin: auto;
  }
`;

export const WithdrawHeader = styled.div`
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
    margin-left: 10%;
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

export const NoWithdrawal = styled.div`
  width: 100%;
  height: 80%;
  ${Centering}
  padding-top: 20%;
  flex-direction: column;
  & > img {
    width: 60%;
    height: 60%;
  }
  & > p {
    font-size: 20px;
  }
`;

export const WithdrawalContainer = styled.div`
  width: 100%;
  padding-top: 10%;
  & > p {
    color: ${colors.blue};
    font-size: 16px;
    margin-bottom: 5%;
  }
`;

export const WithdrawalTab = styled.div`
  width: 100%;
  background: rgba(7, 7, 224, 0.15);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  & > p {
    color: ${colors.blue};
    font-size: 14px;
  }
  @media screen and (min-width: 991px) {
    margin-bottom: 20px;
  }
`;
