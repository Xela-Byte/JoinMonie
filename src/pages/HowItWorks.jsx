import "../css/how-it-works.css";
import "../css/fontawesome.css";
import CollabAmico from "../assets/images/Collab-amico.png";
import GoodTeamBro from "../assets/images/good-team-bro.png";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className="container">
          <nav>
            <i
              className="fa fa-arrow-circle-o-left  fa-2x icon"
              aria-hidden="true"
              onClick={() => navigate(-1)}
            ></i>
            <h2>How Joinmonie Works</h2>
          </nav>
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
            <div className="hero">
              <img src={GoodTeamBro} alt="illustration-img" />
              <h3 className="text-hero">Withdraw Funds easily</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, tenetur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
