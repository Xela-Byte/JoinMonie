import styled from "styled-components";
import { colors, fontSizes } from "./UniversalStyles";

export const ExploreContainer = styled.div`
  width: 100%;
  padding: 20px;
  height: auto;
  @media screen and (min-width: 991px) {
    width: 70%;
    margin: auto;
  }
`;

export const ExploreHeader = styled.div`
  padding-top: 5%;
  width: 100%;
  color: ${colors.blue};
  & > p:first-child {
    font-size: 4vh;
  }
`;

export const CategoryTabContainer = styled.div`
  width: 100%;
  padding-top: 10%;
  & > p:first-child {
    color: ${colors.black};
    margin-bottom: 10px;
  }
`;
export const CategoryTabContent = styled.div`
  width: auto;
  overflow-x: scroll;
  display: flex;
  gap: 15px;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    cursor: pointer;
    border-radius: 10px;
    background: #eee;
  }
`;

export const CategoryTab = styled.div`
  min-width: fit-content;
  padding: 10px;
  font-size: 14px;
  background: #eee;
  border-radius: 20px;
  color: ${colors.black};
`;

export const ExploreCampaignWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  & > p {
    color: ${colors.blue};
    font-size: 23px;
    margin-top: 5%;
  }
`;

export const ExploreCampaignContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: scroll;
  margin-top: 5%;
  margin-bottom: 25%;
  & > div > p {
    font-weight: 600;
  }
  & > div > span {
    color: ${colors.blue};
    font-size: 14px;
  }
  @media screen and (max-height: 610px) {
    height: 100%;
  }
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    cursor: pointer;
    border-radius: 10px;
    background: #eee;
  }
`;
export const ExploreCampaignTab = styled.div`
  box-shadow: -5px 5px 10px #c5c5c5, 10px -10px 17px #fbfbfb;
  width: 100%;
  margin-top: 5%;
  cursor: pointer;
  border-radius: 10px;
  height: 70%;
  & > img {
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
  @media screen and (min-width: 991px) {
    & > img {
      height: 40vh;
    }
  }
`;

export const ExploreCampaignContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5%;
  & > p {
    text-transform: uppercase;
    font-size: ${fontSizes.medium};
    font-weight: 700;
    color: ${colors.blue};
  }
  & > p:nth-child(2) {
    text-transform: capitalize;
    font-size: ${fontSizes.small};
    color: ${colors.black};
  }
`;

export const ExploreCampaignInfo = styled.div`
  width: 100%;
  display: flex;
  & > p {
    color: ${colors.black};
  }
  & > p:nth-child(2) {
    margin-left: auto;
    color: ${colors.blue};
  }
`;

export const ExploreGhostContent = styled.div`
  width: 100%;
  height: 10vh;
  @media screen and (min-width: 991px) {
    height: 2vh;
  }
`;
