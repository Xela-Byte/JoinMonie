import { useState } from "react";
import {
  NavbarContainer,
  NavbarIcon,
  NavbarTab,
  NavbarTabIconContainer,
} from "../styled/Navbar";
import ArrowRight from "../assets/images/arrow-right.svg";
import Flag from "../assets/images/flag.svg";
import Info from "../assets/images/info.svg";
import Script from "../assets/images/script.svg";
import People from "../assets/images/people.svg";
import Question from "../assets/images/question.svg";
import Warning from "../assets/images/warning.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(false);
  };
  return (
    <>
      {showNavbar && (
        <NavbarContainer>
          <NavbarIcon src={ArrowRight} onClick={() => handleShowNavbar()} />
          <NavbarTab>
            <NavbarTabIconContainer>
              <img src={Info} alt="" />
            </NavbarTabIconContainer>
            <p>how it works</p>
            <NavbarIcon src={ArrowRight} alt="" />
          </NavbarTab>
          <NavbarTab>
            <NavbarTabIconContainer>
              <img src={Warning} alt="" />
            </NavbarTabIconContainer>
            <p>trust and safety</p>
            <NavbarIcon src={ArrowRight} alt="" />
          </NavbarTab>
          <NavbarTab>
            <NavbarTabIconContainer>
              <img src={Flag} alt="" />
            </NavbarTabIconContainer>
            <p>how to report a campaign</p>
            <NavbarIcon src={ArrowRight} alt="" />
          </NavbarTab>
          <NavbarTab onClick={() => navigate("/faq")}>
            <NavbarTabIconContainer>
              <img src={Question} alt="" />
            </NavbarTabIconContainer>
            <p>frequently asked questions</p>
            <NavbarIcon src={ArrowRight} alt="" />
          </NavbarTab>
          <NavbarTab>
            <NavbarTabIconContainer>
              <img src={People} alt="" />
            </NavbarTabIconContainer>
            <p>about us</p>
            <NavbarIcon src={ArrowRight} alt="" />
          </NavbarTab>
          <NavbarTab>
            <NavbarTabIconContainer>
              <img src={Script} alt="" />
            </NavbarTabIconContainer>
            <p>terms and condition</p>
            <NavbarIcon src={ArrowRight} alt="" />
          </NavbarTab>
        </NavbarContainer>
      )}
    </>
  );
};

export default Navbar;