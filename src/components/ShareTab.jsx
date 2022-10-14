import { ShareTabContainer, ShareTabContent } from "../styled/CampignDetails";
import { motion } from "framer-motion";
import Clip from "../assets/images/clip.svg";
import FB from "../assets/images/fb.svg";
import { toast, ToastContainer } from "react-toastify";

const ShareTab = ({ campaignLink }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(campaignLink);
    toast.success("Copied to clipboard successfully.");
  };

  const shareToFB = () => {
    window.location.href = `https://www.facebook.com/sharer/sharer.php?u=${campaignLink}`;
  };
  return (
    <ShareTabContainer
      as={motion.div}
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "10%",
        opacity: 1,
      }}
      transition={{
        type: "tween",
        duration: 0.5,
      }}
      exit={{
        height: 0,
        opacity: 0,
      }}
    >
      <ShareTabContent onClick={() => copyToClipboard()}>
        <img src={Clip} alt="" />
      </ShareTabContent>{" "}
      <ShareTabContent>
        <img src={FB} alt="" onClick={() => shareToFB()} />
      </ShareTabContent>
      <ToastContainer />
    </ShareTabContainer>
  );
};

export default ShareTab;
