import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../styled/UniversalStyles';
import {
  UploadBtn,
  UploadBtnContainer,
  UploadContainer,
  UploadContent,
  UploadHeaderText,
  UploadImagePreview,
} from '../styled/Upload';

import CameraImg from '../assets/images/camera.svg';

const UploadImage = () => {

  document.title = 'JoinMonie | Set Profile Image'
  const navigate = useNavigate();

  const [image, setImage] = useState(undefined);

  const fileUpload = useRef(null);
  const handleClick = (e) => {
    fileUpload.current.click();
  };

  const imageSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage({
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const onComplete = () => {
    navigate('/dashboard');
  };
  return (
    <UploadContainer>
      <UploadHeaderText>upload a profile image</UploadHeaderText>
      <UploadContent>
        <UploadImagePreview onClick={() => handleClick()}>
          <input
            type='file'
            accept='image/*'
            ref={fileUpload}
            onChange={(e) => imageSelect(e)}
            hidden
          />
          {!image && <img src={CameraImg} className='camera-icon' alt='' />}
          {image && <img src={image.image} alt='' />}
        </UploadImagePreview>
        <p>Kindly set a clear and nice looking picture of yourself.</p>
        <UploadBtnContainer>
          <UploadBtn onClick={() => onComplete()}>Completed</UploadBtn>
          <UploadBtn
            style={{
              background: 'transparent',
              color: colors.blue,
              border: `1px solid ${colors.blue}`,
            }}
            onClick={() => onComplete()}
          >
            Skip
          </UploadBtn>
        </UploadBtnContainer>
      </UploadContent>
    </UploadContainer>
  );
};

export default UploadImage;
