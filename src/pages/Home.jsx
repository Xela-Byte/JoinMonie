import axios from "axios";
import {
  HomeBtn,
  HomeContainer,
  HomeContent,
  HomeContentText,
  HomeImgContainer,
} from "../styled/Home";
import HomeImage from "../assets/images/home-d-img.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "JoinMonie | Home";

  const options = {
    method: "POST",
    url: "https://joinmonie.herokuapp.com/v1/login",
    data: "email=hivendtech%40gmail.com&password=warsaw124",
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <HomeContainer>
      <HomeImgContainer>
        <img src={HomeImage} alt="" />
      </HomeImgContainer>
      <HomeContent>
        <HomeContentText>
          FundRaising for the people and causes you care for.
        </HomeContentText>
        <HomeContentText>
          We provide a platform to raise money for causes. We provide a platform
          to raise money for causes.
        </HomeContentText>
        <HomeBtn>
          <Link to={"register"}>Get Started</Link>
        </HomeBtn>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
