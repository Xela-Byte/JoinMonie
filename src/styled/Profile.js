import styled from "styled-components";
import { Centering, colors } from "./UniversalStyles";

export const ProfileContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5%;
  & > img {
    margin: 10px;
    transform: rotate(180deg);
    width: 25px;
    height: 25px;
  }
`;

export const ProfileDisplay = styled.div`
  width: 100%;
  height: 30%;
  ${Centering}
  flex-direction: column;
  & > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  & > p {
    margin: 5px;
  }
`;

export const ProfileName = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

export const ProfileEmail = styled.p`
  font-size: 16px;
`;

export const ProfileTabContainer = styled.div`
  width: 100%;
  height: 70%;
  padding-top: 20%;
`;

export const ProfileTab = styled.div`
  width: 100%;
  height: 20%;
  box-shadow: -5px 5px 10px #c5c5c5, 10px -10px 17px #fbfbfb;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  gap: 3%;
  margin-bottom: 20px;
  align-items: center;
  & > p {
    text-transform: capitalize;
    font-size: 14px;
  }
  & > img {
    margin-left: auto;
  }
`;

export const ProfileTabContent = styled.div`
  width: 90%;
  height: 100%;
  & > p:first-child {
    font-weight: 600;
    color: #474747;
    font-size: 18px;
  }
  & > p:last-child {
    color: ${colors.grey};
    font-weight: 600;
    font-size: 14px;
  }
`;

export const ProfileTabIconContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background: #eee;
  ${Centering}
  padding: 5px;
  & > img {
    width: 70%;
    height: 70%;
  }
`;
