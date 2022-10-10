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
`;

export const DonateHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 30%;
  & > img {
    width: 20px;
    height: 20px;
  }
  & > p {
    font-size: 18px;
    color: ${colors.blue};
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
`;

export const DonateAmountContainer = styled.div`
  width: 100%;
  height: 100vh;
  & > p {
    margin: 7%;
    font-size: 14px;
    text-align: center;
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
  margin: auto;
`;

export const DonateAmountNumberContainer = styled.div`
  width: 85%;
  height: 10%;
  margin: auto;
  padding-top: 5%;
  gap: 25%;
  display: flex;
`;

export const DonateAmountNumber = styled.div`
  width: 50px;
  height: 50px;
  ${Centering}
  border-radius: 50%;
  background: rgba(7, 7, 224, 0.15);
  &:last-child {
    margin: auto;
  }
`;

export const DonateMakeBtn = styled.div`
  ${Centering}
  width: 100%;
  color: #fff;
  margin-top: 25%;
  background: ${colors.blue};
  padding: 10px;
  border-radius: 15px;
  font-size: 16px;
`;
