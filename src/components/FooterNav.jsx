import { FooterNavContainer, FooterNavTab } from '../styled/FooterNav';
import Home from '../assets/images/home.svg';
import Explore from '../assets/images/binoculars.svg';
import Campaign from '../assets/images/skyscraper.svg';
import User from '../assets/images/user.svg';
import HomeFilled from '../assets/images/home-filled.svg';
import ExploreFilled from '../assets/images/binoculars-filled.svg';
import CampaignFilled from '../assets/images/skyscraper-filled.svg';
import UserFilled from '../assets/images/user-filled.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { colors } from '../styled/UniversalStyles';

const FooterNav = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab(location);
  }, [location]);

  return (
    <FooterNavContainer>
      <FooterNavTab onClick={() => navigate('/dashboard')}>
        <img src={activeTab === '/dashboard' ? HomeFilled : Home} alt='' />
        <p style={{ color: activeTab === '/dashboard' ? colors.blue : '' }}>
          Home
        </p>
      </FooterNavTab>
      <FooterNavTab onClick={() => navigate('/explore')}>
        <img src={activeTab === '/explore' ? ExploreFilled : Explore} alt='' />
        <p style={{ color: activeTab === '/explore' ? colors.blue : '' }}>
          Explore
        </p>
      </FooterNavTab>
      <FooterNavTab onClick={() => navigate('/campaigns')}>
        <img
          src={activeTab === '/campaigns' ? CampaignFilled : Campaign}
          alt=''
        />
        <p style={{ color: activeTab === '/campaigns' ? colors.blue : '' }}>
          Campaigns
        </p>
      </FooterNavTab>
      <FooterNavTab onClick={() => navigate('/profile')}>
        <img src={activeTab === '/profile' ? UserFilled : User} alt='' />
        <p style={{ color: activeTab === '/profile' ? colors.blue : '' }}>
          Profile
        </p>
      </FooterNavTab>
    </FooterNavContainer>
  );
};

export default FooterNav;
