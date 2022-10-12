import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-[url('/images/Hero.svg')] font-Poppins_regular space-y-4 text-white bg-cover px-10 text-center lg:bg-contain bg-no-repeat w-full h-[100vh] lg:h-[80vh] flex flex-col justify-center items-center">
        <h1
          data-aos="slide-left"
          className="lg:text-4xl text-2xl text-center md:w-[628px] font-Poppins_semibold"
        >
          Fundraising for the people and causes you care for.
        </h1>
        <p data-aos="slide-right" className="text-lg lg:text-xl">
          We provide a platform to raise money for any genuine cause in all
          areas.
        </p>
        <button className="px-3 py-3 w-52 bg-primary-100 rounded-xl text-white">
          <a href="/get-started">Get Started</a>
        </button>
      </div>
    </>
  );
};

export default Hero;
