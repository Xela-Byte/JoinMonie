import {
  HomeBtn,
  HomeContainer,
  HomeContent,
  HomeContentText,
  HomeImgContainer,
} from "../styled/Home";
import HomeImage from "../assets/images/verify.svg";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "JoinMonie | Home";

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
