import styled from "styled-components";
import { Centering, colors } from "./UniversalStyles";

export const ProfileContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5%;
  & > img {
    margin: 10px;
    width: 35px;
    height: 35px;
  }
  @media screen and (min-width: 991px) {
    & > img {
      width: 40px;
      height: 40px;
    }
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
  @media screen and (min-width: 991px) {
    & > img {
      width: 150px;
      height: 150px;
    }
    & > p {
      margin: 10px;
    }
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
  padding-top: 15%;
  @media screen and (min-width: 991px) {
    width: 70%;
    margin: auto;
    padding: 5%;
  }
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
  @media screen and (min-width: 991px) {
    margin: 30px;
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
  &:last-child > p:first-child > a {
    font-weight: 600;
    color: #474747;
    font-size: 18px;
  }
  & > p:last-child {
    color: ${colors.grey};
    font-weight: 500;
    font-size: 14px;
  }
  &:last-child > p:last-child > a {
    color: ${colors.grey};
    font-weight: 500;
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
