import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlueBlur from "../../../assets/images/blue_blur.png";
import YellowBlur from "../../../assets/images/yellow_blur.png";
import PurpleBlur from "../../../assets/images/purple_blur.svg";
import AndroidLogo from "../../../assets/images/AndroidLogo.svg";

const Howitworks = () => {
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
      <div className="pt-5 flex flex-col font-Poppins_regular text-neutral-200 space-y-4 bg-contain bg-no-repeat w-full h-fit lg:h-[80vh] relative pb-10">
        <p className="text-primary-100 text-3xl font-bold text-center">
          How it Works
        </p>
        <div className="mx-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div
              data-aos="slide-right"
              className="flex flex-col space-y-4 text-left"
            >
              <div className="relative -left-10">
                <img src={PurpleBlur} alt="blur" />
                <img
                  className="absolute top-16 left-16"
                  src={AndroidLogo}
                  alt="icon"
                />
              </div>
              <h1 className="text-2xl font-Poppins_semibold">
                Create an Account
              </h1>
              <p className="text-[18px] font-Poppins_regular">
                We provide a platform to raise money for any genuine cause in
                all areas.
              </p>
            </div>
            <div
              data-aos="slide-up"
              className="flex flex-col space-y-4 text-left"
            >
              <div className="relative -left-10">
                <img src={YellowBlur} alt="blur" />
                <img
                  className="absolute top-16 left-16"
                  src={AndroidLogo}
                  alt="icon"
                />
              </div>
              <h1 className="text-2xl font-Poppins_semibold">
                Create an Account
              </h1>
              <p className="text-[18px] font-Poppins_regular">
                We provide a platform to raise money for any genuine cause in
                all areas.
              </p>
            </div>
            <div
              data-aos="slide-left"
              className="flex flex-col space-y-4 text-left"
            >
              <div className="relative -left-10">
                <img src={BlueBlur} alt="blur" />
                <img
                  className="absolute top-16 left-16"
                  src={AndroidLogo}
                  alt="icon"
                />
              </div>
              <h1 className="text-2xl font-Poppins_semibold">
                Create an Account
              </h1>
              <p className="text-[18px] font-Poppins_regular">
                We provide a platform to raise money for any genuine cause in
                all areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howitworks;
