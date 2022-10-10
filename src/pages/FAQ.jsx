import { useState } from "react";
import { FAQContainer, FAQContent, FAQSubContent, FAQTab } from "../styled/FAQ";
import ArrowDown from "../assets/images/left-arrow.png";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Close from "../assets/images/close.svg";

const FAQ = () => {
  const navigate = useNavigate();
  const [showContent, setShowShowContent] = useState(false);
  const [showFAQTab, setShowFAQTab] = useState(false);
  const handleShowContent = () => {
    setShowShowContent(!showContent);
    setShowFAQTab(true);
  };

  const handleShowFAQTab = () => {
    setShowFAQTab(!showFAQTab);
  };
  return (
    <FAQContainer>
      <img src={ArrowDown} alt="" onClick={() => navigate(-1)} />
      <p>Frequently Asked Questions</p>
      {showFAQTab && (
        <FAQTab>
          <div>
            <p>How long does withdrawal takes?</p>
            <img src={Close} alt="" onClick={() => handleShowFAQTab()} />
          </div>

          {showContent === true ? (
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                },
              }}
            >
              Withdrawal does takes about an hour, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero explicabo laborum est
              ratione, cum praesentium voluptates minima quidem distinctio
              eaque.
            </motion.p>
          ) : (
            <p>
              Withdrawal takes about an hour before your funds are sent to your
              bank account.
            </p>
          )}
        </FAQTab>
      )}
      <FAQContent onClick={() => handleShowContent()}>
        <p>How long does withdrawal takes</p>
        <img
          src={ArrowDown}
          alt=""
          style={{
            transform: showContent === true ? "rotate(180deg)" : "",
          }}
        />
      </FAQContent>
      <AnimatePresence>
        {showContent && (
          <FAQSubContent
            as={motion.div}
            initial={{
              height: 0,
              overflow: "hidden",
            }}
            whileInView={{
              height: "30%",
              transition: {
                duration: 0.2,
              },
            }}
            exit={{
              height: "0%",
              transition: {
                duration: 0.2,
              },
            }}
          >
            <p>
              Withdrawal does takes about an hour, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero explicabo laborum est
              ratione, cum praesentium voluptates minima quidem distinctio
              eaque.
            </p>
          </FAQSubContent>
        )}
      </AnimatePresence>

      <FAQContent>
        <p>How long does withdrawal takes</p>
        <img src={ArrowDown} alt="" />
      </FAQContent>
      <FAQContent>
        <p>How long does withdrawal takes</p>
        <img src={ArrowDown} alt="" />
      </FAQContent>
      <FAQContent>
        <p>How long does withdrawal takes</p>
        <img src={ArrowDown} alt="" />
      </FAQContent>
      <FAQContent>
        <p>How long does withdrawal takes</p>
        <img src={ArrowDown} alt="" />
      </FAQContent>
      <FAQContent>
        <p>How long does withdrawal takes</p>
        <img src={ArrowDown} alt="" />
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQ;
