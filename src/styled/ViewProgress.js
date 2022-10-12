import styled from "styled-components";
import { Centering, colors } from "./UniversalStyles";
export const ViewProgressContainer = styled.div`
  width: 100%;
  height: 110vh;
  padding-bottom: 20px;
`;

export const ViewProgressHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  ${Centering}
  gap: 10%;
  & > img {
    width: 35px;
    height: 35px;
  }
  & > p {
    text-align: center;
    font-size: 18px;
    color: ${colors.blue};
  }
`;

export const ViewProgressImage = styled.div`
  width: 100%;
  height: 25%;
  padding: 20px;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const ViewProgressStory = styled.div`
  width: 100%;
  padding: 20px;
  & > p {
    font-size: 16px;
    color: ${colors.blue};
  }
`;

export const ViewProgressCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  ${Centering}
  margin: auto;
  background: ${colors.blue};
  color: #fff;
`;

export const ViewProgressFunds = styled.div`
  ${Centering}
  width: 100%;
  height: 10%;
  & > p {
    font-size: 16px;
  }
  & > span {
    color: ${colors.blue};
  }
`;

export const ViewProgressDonated = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  & > p {
    margin-top: 5%;
  }
`;
export const ViewProgressDonatedAvatar = styled.div`
  width: 35%;
  height: 100%;
  padding: 10px;
  & > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  & > img:nth-child(2) {
    margin-left: -10px;
    border: 2px solid #fff;
  }
  & > img:last-child {
    border: 2px solid #fff;
    margin-left: -10px;
  }
`;

export const ViewProgressDate = styled.div`
  width: 100%;
  height: 10%;
  padding: 10px;
  ${Centering}
  gap: 15%;
`;

export const ViewProgressDay = styled.div`
  width: 50%;
`;

export const ViewProgressExtendBtn = styled.div`
  width: 30%;
  padding: 10px;
  ${Centering}
  background: ${colors.blue};
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
`;

export const ViewProgressWithdrawBtn = styled.div`
  width: 70%;
  padding: 10px;
  margin: 20px auto;
  ${Centering};
  font-size: 18px;
  color: ${colors.blue};
  border-radius: 5px;
  background: rgba(7, 7, 224, 0.3);
`;
