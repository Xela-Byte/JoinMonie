import styled from "styled-components";
import { Centering, colors } from "./UniversalStyles";

export const DonateContainer = styled.div`
  width: 100%;
  padding-top: 10%;
  padding-left: 15px;
  padding-right: 15px;
  & > p {
    margin: 7%;
    font-size: 14px;
    text-align: center;
  }
  @media screen and (min-width: 991px) {
    width: 50%;
    margin: auto;
  }
`;

export const DonateHeader = styled.div`
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
    margin-left: 30%;
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

export const DonateMethodContainer = styled.div`
  width: 100%;
  height: 70%;
  display: grid;
  gap: 5%;
  grid-template-columns: 1fr 1fr;
`;

export const DonateMethodTab = styled.div`
  width: 100%;
  height: 12vh;
  padding: 10px;
  background: rgba(7, 7, 224, 0.1);
  border-radius: 20px;
  ${Centering}
  margin-left: 50%;
  margin-top: 10%;
  cursor: pointer;
  flex-direction: column;
  & > img {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
`;

export const DonateBtn = styled.div`
  ${Centering}
  width: 100%;
  color: #fff;
  margin-top: 50%;
  background: ${colors.blue};
  padding: 10px;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  @media screen and (min-width: 991px) {
    width: 45%;
    margin: auto;
    margin-top: 10%;
  }
`;

export const DonateAmountContainer = styled.div`
  width: 100%;
  height: 100vh;
  & > p {
    margin: 7%;
    font-size: 14px;
    text-align: center;
  }
  @media screen and (min-width: 991px) {
    height: auto;
    padding-bottom: 5%;
  }
`;

export const DonateAmountTab = styled.div`
  ${Centering}
  width: 85%;
  color: #fff;
  background: ${colors.blue};
  padding: 10px;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  margin: auto;
`;

export const DonateAmountNumberContainer = styled.div`
  width: 85%;
  height: 10%;
  margin: auto;
  padding-top: 5%;
  padding-bottom: 5%;
  gap: 25%;
  display: flex;
`;

export const DonateAmountNumber = styled.div`
  width: 50px;
  height: 50px;
  ${Centering}
  border-radius: 50%;
  cursor: pointer;

  background: rgba(7, 7, 224, 0.15);
  &:last-child {
    margin: auto;
  }
`;

export const DonateMakeBtn = styled.div`
  ${Centering}
  width: 100%;
  color: #fff;
  margin-top: 10%;
  background: ${colors.blue};
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;
  @media screen and (min-width: 991px) {
    margin: auto;
    width: 50%;
  }
`;
