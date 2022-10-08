import styled from "styled-components";
import { Centering, colors } from "./UniversalStyles";

export const CreateCampaignContainer = styled.div`
  width: 100%;
  overflow: scroll;
  position: relative;
  color: ${colors.blue};
  padding: 5%;
  & > p {
    text-align: center;
    margin-bottom: 5px;
    color: ${colors.blue};
  }
`;

export const CreateCampaignHeader = styled.div`
  width: 100%;
  height: 10%;
  margin-top: 5%;
  color: ${colors.blue};
  ${Centering};
  gap: 5%;
  & > p {
    margin-right: auto;
    font-size: 3vh;
    text-align: center;
  }
  & > img {
    width: 20px;
    height: 20px;
    margin-right: auto;
    transform: rotate(180deg);
  }
`;

export const CreateCampaignForm = styled.form`
  width: 100%;
  height: 85%;
  margin-bottom: 5%;
  .dropdown-campaign {
    border: 1px solid ${colors.blue};
    margin-bottom: 20px;
  }
  & > label {
    color: ${colors.black};
  }
`;

export const CreateCampaignInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${colors.blue};
  outline: none;
  margin-bottom: 20px;
  background: transparent;
  transition: 0.4s ease-in-out;
  &::placeholder {
    color: ${colors.blue};
  }
  &:focus {
    scale: 1.02;
    border: 1px solid #0101ac;
  }
`;

export const CreateCampaignText = styled.textarea`
  width: 100%;
  padding: 0.7rem;
  border: 1px solid ${colors.blue};
  outline: none;
  margin-bottom: 20px;
  background: transparent;
  transition: 0.4s ease-in-out;
  &::placeholder {
    color: ${colors.blue};
  }
  &:focus {
    scale: 1.02;
    border: 1px solid #0101ac;
  }
`;

export const CreateCampaignBtn = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  background: ${colors.blue};
  color: ${colors.white};
`;

export const CreateCampaignEmailContent = styled.div`
  width: 100%;
  height: 100vh;
  ${Centering}
  padding: 5%;
  flex-direction: column;
  & > label {
    color: ${colors.black};
    margin-bottom: 15px;
  }
  & > img {
    width: 20px;
    height: 20px;
    margin-right: auto;
    transform: rotate(180deg);
  }
`;

export const CreateCampaignEmailInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${colors.blue};
  margin-bottom: 20px;
  background: transparent;
  &::placeholder {
    color: ${colors.blue};
  }
`;

export const CreateCampaignDisplayImage = styled.div`
  width: 100%;
  background: rgba(7, 7, 224, 0.3);
  height: 30%;
  margin-bottom: 60%;
  ${Centering};
  border-radius: 20px;
  & > p {
    font-size: 18px;
    color: ${colors.white};
  }
  & > img {
    width: 100%;
    border-radius: 20px;
    height: 100%;
    object-fit: auto;
  }
`;

export const CreateCampaignSucessContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: transparent;
  z-index: 6;
  backdrop-filter: blur(2px);
`;

export const CreateCampaignSucess = styled.div`
  width: 90%;
  height: 30%;
  position: absolute;
  top: 35%;
  left: 5%;
  ${Centering}
  gap: 5%;
  flex-direction: column;
  border-radius: 20px;
  background: ${colors.white};
  box-shadow: -5px 5px 10px #c5c5c5, 10px -10px 17px #fbfbfb;
  z-index: 6;
`;

export const CreateCampaignSuccessIcon = styled.div`
  width: 85%;
  background: rgba(7, 7, 224, 0.3);
  height: 45%;
  ${Centering};
  border-radius: 20px;
  & > img {
    width: 50%;
    height: 50%;
  }
`;

export const CreateCampaignSuccessBtn = styled.div`
  width: 90%;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  background: ${colors.blue};
  color: ${colors.white};
`;
