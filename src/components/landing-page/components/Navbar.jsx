import { useRef } from "react";
import Logo from "../../../assets/images/logo.svg";
import NavbarMenu from "../../../assets/images/navbar-menu.svg";

// useEffect

const Navbar = () => {
  const bar = useRef();
  const openBar = () => (bar.current.style = "transform: translate(0px, 0%);");
  const closeBar = () =>
    (bar.current.style = "transform: translate(0px, -100%);");
  return (
    <>
      <div className="neon px-4 md:px-20 py-2 w-full h-16 flex flex-row justify-between items-center">
        <img className="h-32 w-32" src={Logo} alt="" />
        <div className="flex flex-row justify-between items-center gap-10">
          <div className="block md:hidden">
            <button className="px-3 py-3 rounded-xl" onClick={openBar}>
              <img src={NavbarMenu} alt="" />
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex flex-col md:flex-row justify-between items-center gap-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#how-it-works">How it Works</a>
              </li>
              <li>
                <a href="/trust">Trust and Safety</a>
              </li>
              <li>
                <a href="/faqs">Faqs</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <button className="px-3 py-3 bg-primary-100 rounded-xl text-white">
              <a href="/get-started">Get Started</a>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={bar}
        style={{ transform: "translate(0px, -100%)" }}
        className="flex flex-col !text-white justify-center transition-all
        duration-500 items-center h-screen
        overflow-hidden w-screen fixed top-0 z-[999999] bg-black/90"
      >
        <button
          onClick={closeBar}
          className="px-3 py-3 fixed right-5 top-10 text-3xl rounded-xl"
        >
          <span>&times;</span>
        </button>
        <div className="block md:hidden">
          <ul className="flex flex-col md:flex-row justify-between items-center gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#how-it-works">How it Works</a>
            </li>
            <li>
              <a href="/trust">Trust and Safety</a>
            </li>
            <li>
              <a href="/faqs">Faqs</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden justify-center flex ">
          <button className="px-3 py-3 bg-primary-100 rounded-xl text-white">
            <a href="/get-started">Get Started</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
