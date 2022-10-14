import styled from "styled-components";
import { colors } from "./UniversalStyles";

export const FAQContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10% 15px 5% 15px;
  & > p {
    text-align: center;
    font-size: 20px;
    margin-bottom: 10%;
    color: ${colors.black};
  }
  & > img {
    width: 35px;
    height: 35px;
    margin-left: auto;
    margin-bottom: 5%;
  }
`;

export const FAQTab = styled.div`
  width: 100%;
  background: rgba(7, 7, 224, 0.15);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: 0.4s ease-in-out;
  & > div {
    width: 100%;
    height: 25%;
    margin-bottom: 10px;
    display: flex;
  }
  & > div > p:first-child {
    font-weight: 600;
    font-size: 16px;
    color: ${colors.grey};
  }
  & > div > img {
    width: 30px;
    height: 30px;
    margin-top: -10px;
  }
  & > p:last-child {
    font-weight: 600;
    font-size: 14px;
    color: ${colors.grey};
  }
`;

export const FAQContent = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${colors.blue};
  margin-top: 10px;
  display: flex;

  & > p {
    font-size: 14px;
    color: ${colors.grey};
  }
  & > img {
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
    margin-left: auto;
  }
`;

export const FAQSubContent = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;
  background: #eee;
`;

export const TrustCard = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 10px;
  background: ${colors.blue};
  color: ${colors.white};
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  padding: 10px;
  font-size: 20px;
`;
