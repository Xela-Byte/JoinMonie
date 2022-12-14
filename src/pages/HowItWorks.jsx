import "../css/how-it-works.css";
import "../css/fontawesome.css";
import CollabAmico from "../assets/images/Collab-amico.png";
import GoodTeamBro from "../assets/images/good-team-bro.png";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/images/left-arrow.png";

const HowItWorks = () => {
  const navigate = useNavigate();
  document.title = "Joinmonie | How It Works";
  return (
    <>
      <main>
        <div className="container">
          <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
          <p>How Joinmonie Works</p>
        </div>
      </main>

      <section className="content">
        <div className="showcase">
          <div className="hero">
            <img src={CollabAmico} alt="illustration-img" />
            <h3 className="text-hero">Create an account</h3>
            <p className="lead">
              Get started with JoinMonie by creating an account to give you
              unlimited access to all features.
            </p>
          </div>
          <div className="hero">
            <img src={CollabAmico} alt="illustration-img" />
            <h3 className="text-hero">Create your campaign</h3>
            <p className="lead">
              It's quite easy to create a fundraising campaign with us starting
              from your campaign name down to your campaign end date. With
              JoinMonie, you can create afundraising campaign and get funds
              raised in as little as 2 minutes.
            </p>
          </div>
          <div className="hero">
            <img src={GoodTeamBro} alt="illustration-img" />
            <h3 className="text-hero">Follow Progress of Campaign</h3>
            <p className="lead">
              Get to follow progress of campaign and view amount raised and the
              number of the wonderful people who funded your campaign.
            </p>
          </div>
          <div className="hero">
            <img src={GoodTeamBro} alt="illustration-img" />
            <h3 className="text-hero">Seamless Withdrawal</h3>
            <p className="lead">
              Withdraw 95% of funds raised seamlessly in an hour with no issues
              whatsoever. Please note, we would get 5% of funds raised to keep
              Joinmonie going
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
