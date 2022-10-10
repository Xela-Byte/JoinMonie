import FooterNav from "../components/FooterNav";
import {
  ProfileContainer,
  ProfileDisplay,
  ProfileEmail,
  ProfileName,
  ProfileTab,
  ProfileTabContainer,
  ProfileTabContent,
  ProfileTabIconContainer,
} from "../styled/Profile";

import ProfileImage from "../assets/images/home-d-img.jpg";
import User from "../assets/images/user-copy.svg";
import Info from "../assets/images/info.svg";
import Script from "../assets/images/script.svg";
import Correct from "../assets/images/correct.svg";
import ArrowRight from "../assets/images/left-arrow.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  let user = localStorage.getItem("JoinMonie-User");
  user = JSON.parse(user);

  const { fullName, email } = user;
  return (
    <>
      <ProfileContainer>
        <img src={ArrowRight} alt="" onClick={() => navigate(-1)} />
        <ProfileDisplay>
          <img src={ProfileImage} alt="" />
          <ProfileName>{fullName ? fullName : "John Doe"}</ProfileName>
          <ProfileEmail>{email ? email : "johndoe@gmail.com"}</ProfileEmail>
        </ProfileDisplay>
        <ProfileTabContainer>
          <ProfileTab onClick={() => navigate("/profile-details")}>
            <ProfileTabIconContainer>
              <img src={User} alt="" />
            </ProfileTabIconContainer>
            <ProfileTabContent>
              <p>Profile Details</p>
              <p>Change Username, Profile Image ...</p>
            </ProfileTabContent>
          </ProfileTab>
          <ProfileTab onClick={() => navigate("/security")}>
            <ProfileTabIconContainer>
              <img src={Correct} alt="" />
            </ProfileTabIconContainer>
            <ProfileTabContent>
              <p>Security</p>
              <p>Change Password</p>
            </ProfileTabContent>
          </ProfileTab>
          <ProfileTab onClick={() => navigate("/withdrawal")}>
            <ProfileTabIconContainer>
              <img src={Script} alt="" />
            </ProfileTabIconContainer>
            <ProfileTabContent>
              <p>Withdrawal Records</p>
              <p>View your transaction history</p>
            </ProfileTabContent>
          </ProfileTab>
          <ProfileTab onClick={() => navigate("/support")}>
            <ProfileTabIconContainer>
              <img src={Info} alt="" />
            </ProfileTabIconContainer>
            <ProfileTabContent>
              <p>Help and Support</p>
              <p>Email Us</p>
            </ProfileTabContent>
          </ProfileTab>
        </ProfileTabContainer>
      </ProfileContainer>
      <FooterNav />
    </>
  );
};

export default Profile;
