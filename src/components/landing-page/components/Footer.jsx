import Logo from "../../../assets/images/logo.svg";
import Dividers from "../../../assets/images/Divider.svg";

const Footer = () => {
  return (
    <>
      <div>
        <div className="font-Poppins_regular space-y-4 px-5 md:px-20 py-5 text-black bg-contain bg-no-repeat w-full flex flex-row justify-between items-center">
          <div>
            <ul className="flex flex-col md:flex-row text-sm justify-between items-center gap-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/faqs">Faqs</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <img className="h-32 w-32" src={Logo} alt="" />
          </div>
          <div>
            <ul className="flex flex-col md:flex-row text-sm justify-between items-center gap-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/faqs">Faqs</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 lg:px-10">
          <img src={Dividers} alt="" />
        </div>
        <div className="pt-10 text-center pb-10">
          <span>©2022 Joinmonie. All rights reserved.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
