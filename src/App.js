import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Password from "./pages/Password";
import UploadImage from "./pages/UploadImage";
import CreateCampaign from "./pages/CreateCampaign";
import Explore from "./pages/Explore";
import Campaigns from "./pages/Campaigns";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import Security from "./pages/Security";
import Withdrawal from "./pages/Withdrawal";
import CampaignDetails from "./pages/CampaignDetails";
import Donate from "./pages/Donate";
import FAQ from "./pages/FAQ";
import Notifications from "./pages/Notifications";
import HowItWorks from "./pages/HowItWorks";
import TrustAndSafety from "./pages/TrustAndSafety";
import DonateSuccess from "./components/DonateSuccess";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="set-password" element={<Password />} />
        <Route path="upload-image" element={<UploadImage />} />
        <Route index path="dashboard" element={<Dashboard />} />
        <Route index path="explore" element={<Explore />} />
        <Route index path="campaigns" element={<Campaigns />} />
        <Route index path="profile" element={<Profile />} />
        <Route path="create-campaign" element={<CreateCampaign />} />
        <Route path="profile-details" element={<ProfileDetails />} />
        <Route path="security" element={<Security />} />
        <Route path="withdrawal" element={<Withdrawal />} />
        <Route path="campaign-details" element={<CampaignDetails />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="donate" element={<Donate />} />
        <Route path="donate/success" element={<DonateSuccess />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="trust-and-safety" element={<TrustAndSafety />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
