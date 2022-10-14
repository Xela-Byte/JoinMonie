import "../css/about-us.css";
import Endy from "../assets/images/Endy.jpg";
import Xela from "../assets/images/Xela.jpg";
import Somto from "../assets/images/Somto.jpg";
import Xavier from "../assets/images/Xavier.jpg";
import Chris from "../assets/images/Chris.jpg";
import Nifemi from "../assets/images/Nifemi.jpg";
import Lade from "../assets/images/Lade.jpg";
import ArrowRight from "../assets/images/left-arrow.png";
import { useNavigate } from "react-router-dom";
import { DonateHeader } from "../styled/Donate";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <DonateHeader
        style={{
          padding: "10px",
        }}
      >
        <img src={ArrowRight} alt="" onClick={() => navigate(-1)} />
        <p>About Us</p>
      </DonateHeader>
      <p className="logo" style={{ textAlign: "center" }}>
        Click on image to review details
      </p>
      <div className="section-fluid-main">
        <div className="section-row">
          <div className="section-col">
            <div className="section">
              <div className="section-in">
                <img src={Endy} alt="" />
              </div>
            </div>
          </div>
          <div className="hover-text">
            <h3>Endurance (Team Lead)</h3>
          </div>
          <div className="section-col">
            <div className="section">
              <div className="section-in">
                <img src={Nifemi} alt="" />
              </div>
            </div>
          </div>
          <div className="hover-text">
            <h3>Nifemi (FE Developer)</h3>
          </div>
          <div className="section-col">
            <div className="section">
              <div className="section-in">
                <img src={Xavier} alt="" />
              </div>
            </div>
          </div>
          <div className="hover-text">
            <h3>Xavier (UX Designer)</h3>
          </div>
          <div className="section-col">
            <div className="section">
              <div className="section-in">
                <img src={Somto} alt="" />
              </div>
            </div>
          </div>
          <div className="hover-text">
            <h3>Somto (UI Designer)</h3>
          </div>
          <div className="section-col">
            <div className="section">
              <div className="section-in">
                <img src={Lade} alt="" />
              </div>
            </div>
          </div>
          <div className="hover-text">
            <h3>Lade (Logo Designer)</h3>
          </div>
          <div className="section-col">
            <div className="section">
              <div className="section-in">
                <img src={Xela} alt="" />
              </div>
            </div>
          </div>
          <div className="hover-text">
            <h3>Xela (FE Developer)</h3>
          </div>

          <div className="section-col">
            <div className="section">
              <div className="section-in">
                <img src={Chris} alt="" />
              </div>
            </div>
          </div>
          <div className="hover-text">
            <h3>Chris (BE Developer)</h3>
          </div>
        </div>
      </div>
      <div className="Vision">
        <h3>Our Vision</h3>
        <p>
          To get as many as 500,000 campaigns and ideas funded and well
          developed by <br /> the COMMUNITY no matter the category (health,
          education, social, economic, technology/art).
          <br /> With Joinmonie, you can pay that hospital bill, school fees,{" "}
          <br /> get capital for your business and so much more from donations
          made by wonderful people.
        </p>
        <h3>Our Mission</h3>
        <p>
          To create a safe medium and reduce the complexity that comes with{" "}
          <br /> creating fundraising campaigns with other platforms and giving
          users a chance to both donate and be donated for. <br />
          With this stability that comes with getting your campaigns and
          businesses funded easily;{" "}
        </p>

        <ul>
          <li>
            There’s a high chance in the reduction of mortality rate as people
            could get their health bills taken care of, therefore saving their
            lives.
          </li>
          <li>
            A great reduction in the unemployment rate as users can get capitals
            raised for their dream businesses.
          </li>
          <li>
            An increase in literacy as people will not have a reason to drop out
            from schools as school fees and other expenses could be raised on
            Joinmonie.
          </li>
        </ul>

        <h4>
          WE AT JOINMONIE DO BELIEVE THAT ALL THE AFOREMENTIONED COULD BE WELL{" "}
          <br /> TAKEN CARE OF AND ACHIEVED WITH OUR PLATFORM.
        </h4>
      </div>
    </>
  );
};

export default AboutUs;
