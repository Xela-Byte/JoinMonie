import { useState } from "react";
import {
  NavbarContainer,
  NavbarIcon,
  NavbarTab,
  NavbarTabIconContainer,
} from "../styled/Navbar";
import ArrowRight from "../assets/images/left-arrow.png";
import Flag from "../assets/images/flag.svg";
import Info from "../assets/images/info (1).png";
import Script from "../assets/images/valid.png";
import People from "../assets/images/users-alt.png";
import Question from "../assets/images/question.svg";
import Warning from "../assets/images/warning.png";
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
          <NavbarTab onClick={() => navigate("/how-it-works")}>
            <NavbarTabIconContainer>
              <img src={Info} alt="" />
            </NavbarTabIconContainer>
            <p>how it works</p>
            <NavbarIcon src={ArrowRight} alt="" />
          </NavbarTab>
          <NavbarTab
            onClick={() =>
              (window.location.href =
                "https://docs.google.com/document/d/14XamWgYw4Np851EdITLUfqqBDhgxRiTeITkRENtQK-o/edit")
            }
          >
            <NavbarTabIconContainer>
              <img src={Warning} alt="" />
            </NavbarTabIconContainer>
            <p>trust and safety</p>
            <NavbarIcon src={ArrowRight} alt="" />
          </NavbarTab>
          <NavbarTab onClick={() => navigate("/how-to-report")}>
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
          <NavbarTab onClick={() => navigate("/about-us")}>
            <NavbarTabIconContainer>
              <img src={People} alt="" />
            </NavbarTabIconContainer>
            <p>about us</p>
            <NavbarIcon src={ArrowRight} alt="" />
          </NavbarTab>
          <NavbarTab
            onClick={() =>
              (window.location.href =
                "https://docs.google.com/document/d/1wDSwL3uImyZYtFn-xSKAzGXse5no0wgxAmczB5Aj8VU/edit?usp=drivesdk&urp=gmail_link")
            }
          >
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
