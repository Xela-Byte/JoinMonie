import styled from 'styled-components';
import { Centering, colors, fontSizes } from '../styled/UniversalStyles';

export const UploadContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
`;

export const UploadHeaderText = styled.p`
  font-weight: 600;
  color: ${colors.blue};
  font-size: ${fontSizes.medium};
  text-transform: capitalize;
  text-align: center;
`;

export const UploadContent = styled.div`
  width: 100%;
  padding-top: 10%;
  & > p {
    text-align: center;
    margin-top: 10%;
    font-size: ${fontSizes.medium};
    color: ${colors.grey};
  }
  @media screen and (min-width: 991px) {
    padding-top: 5%;
    & > p {
      margin-top: 5%;
    }
  }
`;

export const UploadImagePreview = styled.div`
  width: 200px;
  height: 200px;
  cursor: pointer;
  background: #eee;
  border-radius: 50%;
  margin: auto;
  ${Centering}
  & > .camera-icon {
    width: 50px;
    border-radius: 0;
    height: 50px;
  }
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UploadBtnContainer = styled.div`
  margin-top: 20%;
  width: 100%;
  ${Centering}
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 991px) {
    margin-top: 5%;
  }
`;

export const UploadBtn = styled.button`
  font-size: ${fontSizes.medium};
  width: 90%;
  padding: 10px;
  background: ${colors.blue};
  color: ${colors.white};
  cursor: pointer;
  border: none;
  border-radius: 10px;
  @media screen and (min-width: 991px) {
    width: 25%;
    padding: 15px;
    font-size: 3vh;
  }
`;
