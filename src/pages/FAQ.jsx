import { useState } from "react";
import { FAQContainer, FAQContent, FAQSubContent } from "../styled/FAQ";
import ArrowDown from "../assets/images/left-arrow.png";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { slideVariant } from "../animationVariants/slideAnimation";

const FAQ = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const [subContent, setSubContent] = useState("");

  const setContent = (question) => {
    setActiveTab(question);
    switch (question) {
      case "how-long":
        setSubContent(
          "Withdrawing funds raised on Joinmonie Is quite seamless as funds would be sent an hour immediately after request."
        );
        break;

      case "safe":
        setSubContent(
          "We have created mediums to ensure that both funds donated and funds raised reach their unique destinations."
        );
        break;
      case "inspiration":
        setSubContent(
          "Joinmonie was created to give users a safe and easy experience in getting funds raised for business capital, hospital bills and even school fees. We however acknowledge the SMFEST hackathon and team as our main inspiration ."
        );
        break;
      case "limit":
        setSubContent("No limit to funds that can be raised.");
        break;
      case "inadequate":
        setSubContent(
          "Our apologies, you can’t withdraw funds until you have reached your fundraising goal."
        );
        break;
      case "create-campaign":
        setSubContent(
          "Create a live campaign and get funds raised in no time."
        );
        break;
      case "crypto":
        setSubContent(
          "Not at the moment, we do hope that in the future, we can integrate that."
        );
        break;
      case "fake":
        setSubContent(
          "It is very possible and easy to report campaigns you feel might be fake. If after review, we do not find a problem with the campaign, we will notify you by mail."
        );

        break;
      case "percent":
        setSubContent(
          "Joinmonie takes 5% compensation of funds raised upon withdrawal. Quite generous, right?"
        );
        break;
      case "share":
        setSubContent(
          "Yes you can share campaigns to other platforms in search of funding."
        );
        break;
      default:
        break;
    }
  };
  return (
    <FAQContainer>
      <img src={ArrowDown} alt="" onClick={() => navigate(-1)} />
      <p>Frequently Asked Questions</p>
      <AnimatePresence>
        <FAQContent onClick={() => setContent("how-long")}>
          <p>How long does withdrawal take?</p>
          <img src={ArrowDown} alt="" />
        </FAQContent>
        {activeTab === "how-long" && (
          <FAQSubContent
            as={motion.div}
            variants={slideVariant}
            initial="initial"
            animate="animate"
          >
            <p>{subContent}</p>
          </FAQSubContent>
        )}
        <FAQContent onClick={() => setContent("safe")}>
          <p>Is Joinmonie safe?</p>
          <img src={ArrowDown} alt="" />
        </FAQContent>
        {activeTab === "safe" && (
          <FAQSubContent
            as={motion.div}
            variants={slideVariant}
            initial="initial"
            animate="animate"
          >
            <p>{subContent}</p>
          </FAQSubContent>
        )}
        <FAQContent onClick={() => setContent("inspiration")}>
          <p>What is the inspiration behind Joinmonie?</p>
          <img src={ArrowDown} alt="" />
        </FAQContent>
        {activeTab === "inspiration" && (
          <FAQSubContent
            as={motion.div}
            variants={slideVariant}
            initial="initial"
            animate="animate"
          >
            <p>{subContent}</p>
          </FAQSubContent>
        )}
        <FAQContent onClick={() => setContent("limit")}>
          <p>Is there a limit to funds raised?</p>
          <img src={ArrowDown} alt="" />
        </FAQContent>
        {activeTab === "limit" && (
          <FAQSubContent
            as={motion.div}
            variants={slideVariant}
            initial="initial"
            animate="animate"
          >
            <p>{subContent}</p>
          </FAQSubContent>
        )}
        <FAQContent onClick={() => setContent("inadequate")}>
          <p>Can I withdraw inadequate funds raised?</p>
          <img src={ArrowDown} alt="" />
        </FAQContent>
        {activeTab === "inadequate" && (
          <FAQSubContent
            as={motion.div}
            variants={slideVariant}
            initial="initial"
            animate="animate"
          >
            <p>{subContent}</p>
          </FAQSubContent>
        )}
        <FAQContent onClick={() => setContent("create-campaign")}>
          <p>Is it easy to create a funding campaign on Joinmonie?</p>
          <img src={ArrowDown} alt="" />
        </FAQContent>
        {activeTab === "create-campaign" && (
          <FAQSubContent
            as={motion.div}
            variants={slideVariant}
            initial="initial"
            animate="animate"
          >
            <p>{subContent}</p>
          </FAQSubContent>
        )}
        <FAQContent onClick={() => setContent("crypto")}>
          <p>Can I donate in cryptocurrency?</p>
          <img src={ArrowDown} alt="" />
        </FAQContent>
        {activeTab === "crypto" && (
          <FAQSubContent
            as={motion.div}
            variants={slideVariant}
            initial="initial"
            animate="animate"
          >
            <p>{subContent}</p>
          </FAQSubContent>
        )}
        <FAQContent onClick={() => setContent("fake")}>
          <p>Is it possible to report fake campaigns?</p>
          <img src={ArrowDown} alt="" />
        </FAQContent>
        {activeTab === "fake" && (
          <FAQSubContent
            as={motion.div}
            variants={slideVariant}
            initial="initial"
            animate="animate"
          >
            <p>{subContent}</p>
          </FAQSubContent>
        )}
        <FAQContent onClick={() => setContent("percent")}>
          <p>What percentage does Joinmonie take from my funds raised?</p>
          <img src={ArrowDown} alt="" />
        </FAQContent>
        {activeTab === "percent" && (
          <FAQSubContent
            as={motion.div}
            variants={slideVariant}
            initial="initial"
            animate="animate"
          >
            <p>{subContent}</p>
          </FAQSubContent>
        )}
        <FAQContent onClick={() => setContent("share")}>
          <p>Can I share campaigns?</p>
          <img src={ArrowDown} alt="" />
        </FAQContent>
        {activeTab === "share" && (
          <FAQSubContent
            as={motion.div}
            variants={slideVariant}
            initial="initial"
            animate="animate"
          >
            <p>{subContent}</p>
          </FAQSubContent>
        )}
      </AnimatePresence>
    </FAQContainer>
  );
};

export default FAQ;
