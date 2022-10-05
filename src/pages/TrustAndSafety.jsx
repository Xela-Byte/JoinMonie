import { useNavigate } from "react-router-dom";
import "../css/trust-and-safety.css";

const TrustAndSafety = () => {
  const navigate = useNavigate(-1);

  const acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="header">
            <i
              className="fa fa-arrow-circle-o-left fa-2x"
              onClick={() => navigate(-1)}
            ></i>
            <h3 id="blue-head">Trust and safety </h3>
          </div>
        </div>

        <div className="blue-card">
          <div className="card-text">
            <h2>Creating a safe space for our community of users.</h2>
          </div>
        </div>

        <div className="content">
          <p className="sub-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            asperiores corporis laborum, officia aspernatur ullam facilis quo
            voluptas ducimus excepturi inventore exercitationem. Maiores,
            accusamus quaerat! Ipsum mollitia cumque obcaecati pariatur. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod
            saepe quidem?
          </p>
        </div>

        <div className="safety-tips">
          <h2 className="h2 blue-tips">Safety Tips</h2>
          <button className="accordion">
            How to identify fund raising scam
          </button>
          <div className="panel">
            <p className="answer">Lorem ipsum...</p>
          </div>

          <button className="accordion">
            How to identify fund raising scam
          </button>
          <div className="panel">
            <p className="answer">Lorem ipsum...</p>
          </div>

          <button className="accordion">
            How to identify fund raising scam
          </button>
          <div className="panel">
            <p className="answer">Lorem ipsum...</p>
          </div>
          <button type="submit" className="how">
            How to make campaign
          </button>
        </div>
      </div>

      <script src="main.js"></script>
    </>
  );
};

export default TrustAndSafety;
