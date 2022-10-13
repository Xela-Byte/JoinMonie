import styled from "styled-components";
import { colors } from "./UniversalStyles";

export const NotificationContainer = styled.div`
  width: 100%;
  padding: 10% 15px 15px 15px;
  & > p {
    font-size: 23px;
    color: ${colors.blue};
    text-align: center;
  }
  & > img {
    width: 35px;
    height: 35px;
  }
  @media screen and (min-width: 991px) {
    width: 60%;
    margin: auto;
    padding: 5% 15px 15px 15px;
    & > img {
      width: 35px;
      cursor: pointer;
      height: 35px;
    }
  }
`;

export const NewNotificationContainer = styled.div`
  width: 100%;
  padding-top: 10%;
  & > p {
    color: ${colors.blue};
    font-size: 16px;
    margin-bottom: 5%;
  }
`;

export const NewNotificationTab = styled.div`
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

export const OldNotificationContainer = styled.div`
  width: 100%;
  padding-top: 10%;
  & > p {
    color: ${colors.blue};
    font-size: 16px;
    margin-bottom: 5%;
  }
`;

export const OldNotificationTab = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background: #ffffff;
  box-shadow: -5px -5px 30px #d9d9d9, 0px 0px 0px #ffffff;
  & > p {
    color: ${colors.black};
    font-size: 14px;
  }
  & > p:last-child {
    margin-top: 5px;
  }
  @media screen and (min-width: 991px) {
    margin-bottom: 20px;
  }
`;
