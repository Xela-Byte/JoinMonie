import styled from "styled-components";
import { colors } from "./UniversalStyles";

export const NotificationContainer = styled.div`
  width: 100%;
  padding-top: 10%;
  padding-left: 15px;
  padding-right: 15px;
  & > p {
    font-size: 23px;
    color: ${colors.blue};
    text-align: center;
  }
  & > img {
  transform: rotate(180deg);
  width: 25px;
  height: 25px;
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
`;
