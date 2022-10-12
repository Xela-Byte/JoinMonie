import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CampaignImage from "../../../assets/images/campaign.png";
import Bars from "../../../assets/images/bars.svg";

const Campaign = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);
  const campaigns = [
    {
      id: 1,
      title: "Safety for firefighters",
      percentage: "80",
      raised: "23,000",
      target: "70,000",
    },
    {
      id: 2,
      title: "Safety for firefighters",
      percentage: "80",
      raised: "23,000",
      target: "70,000",
    },
    {
      id: 3,
      title: "Safety for firefighters",
      percentage: "80",
      raised: "23,000",
      target: "70,000",
    },
    {
      id: 4,
      title: "Safety for firefighters",
      percentage: "80",
      raised: "23,000",
      target: "70,000",
    },
    {
      id: 5,
      title: "Safety for firefighters",
      percentage: "80",
      raised: "23,000",
      target: "70,000",
    },
    {
      id: 6,
      title: "Safety for firefighters",
      percentage: "80",
      raised: "23,000",
      target: "70,000",
    },
  ];

  const animations = [
    "slide-left",
    "slide-up",
    "slide-right",
    "slide-left",
    "slide-down",
    "slide-right",
  ];
  return (
    <>
      <div className="w-full flex flex-col space-y-6 lg:h-screen pb-10">
        <p className="text-primary-100 text-3xl font-bold text-center">
          Make someone smile today
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-10">
          {campaigns.map((data, i) => (
            <>
              <div
                data-aos={animations[i]}
                className="rounded-2xl pb-6 neon overflow-hidden"
              >
                <img src={CampaignImage} alt="" />
                <div className="px-3 pt-3 flex flex-col space-y-3">
                  <p className="text-primary-100 uppercase font-bold text-xl">
                    {data.title}
                  </p>
                  <p className="text-neutral-200 font-bold text-sm">Xavier</p>
                  <img src={Bars} alt="" />
                  <div className="flex flex-row justify-between items-center pt-3">
                    <p className="text-sm text-neutral-200 font-bold">
                      ${data.raised}/
                      <span className="text-gray-400">${data.target}</span>
                    </p>
                    <p className="text-sm text-primary-100 font-bold">
                      {data.percentage}%
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Campaign;
