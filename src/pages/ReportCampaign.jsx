import "../css/how-it-works.css";
import "../css/fontawesome.css";
import CollabAmico from "../assets/images/Collab-amico.png";
import GoodTeamBro from "../assets/images/good-team-bro.png";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/images/left-arrow.png";

const ReportCampaign = () => {
  const navigate = useNavigate();
  document.title = "Joinmonie | How to report a campaign";
  return (
    <>
      <main>
        <div className="container">
          <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
          <p>How to report a campaign</p>
        </div>
      </main>

      <section className="content">
        <div className="showcase">
          <div className="hero">
            <img src={CollabAmico} alt="illustration-img" />
            <h3 className="text-hero">Step 1</h3>
            <p className="lead">
              Click the report (flag) icon on the viewing page of the campaign
              you want to report.
            </p>
          </div>
          <div className="hero">
            <img src={CollabAmico} alt="illustration-img" />
            <h3 className="text-hero">Step 2</h3>
            <p className="lead">
              Select the reason(s) for which you think the campaign might be
              fake.
            </p>
          </div>
          <div className="hero">
            <img src={GoodTeamBro} alt="illustration-img" />
            <h3 className="text-hero">Step 3</h3>
            <p className="lead">Click on `Report Campaign`</p>
          </div>
          <div className="hero">
            <img src={GoodTeamBro} alt="illustration-img" />
            <h3 className="text-hero">Step 4</h3>
            <p className="lead">
              Wait patiently as we will review and send feedback on reported
              campaign.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportCampaign;
