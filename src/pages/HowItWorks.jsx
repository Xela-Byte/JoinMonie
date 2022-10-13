import "../css/how-it-works.css";
import "../css/fontawesome.css";
import CollabAmico from "../assets/images/Collab-amico.png";
import GoodTeamBro from "../assets/images/good-team-bro.png";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/images/left-arrow.png";

const HowItWorks = () => {
  const navigate = useNavigate();
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, tenetur.
            </p>
          </div>
          <div className="hero">
            <img src={CollabAmico} alt="illustration-img" />
            <h3 className="text-hero">Start a campaign</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, tenetur.
            </p>
          </div>
          <div className="hero">
            <img src={GoodTeamBro} alt="illustration-img" />
            <h3 className="text-hero">Track fund progress</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, tenetur.
            </p>
          </div>
          <div className="hero">
            <img src={GoodTeamBro} alt="illustration-img" />
            <h3 className="text-hero">Withdraw Funds easily</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, tenetur.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
