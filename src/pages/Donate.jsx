import {
  DonateAmountContainer,
  DonateAmountNumber,
  DonateAmountNumberContainer,
  DonateAmountTab,
  DonateBtn,
  DonateContainer,
  DonateHeader,
  DonateMakeBtn,
  DonateMethodContainer,
  DonateMethodTab,
} from "../styled/Donate";
import ArrowRight from "../assets/images/arrow-right.svg";
import MasterCard from "../assets/images/mastercard.png";
import Visa from "../assets/images/visa.png";
import MoniePoint from "../assets/images/moniepoint.png";
import FlutterWave from "../assets/images/flutterwave.svg";
import PayPal from "../assets/images/paypal.png";
import PayStack from "../assets/images/paystack.svg";
import { useState } from "react";
import {
  CreateCampaignSuccessBtn,
  CreateCampaignSuccessIcon,
  CreateCampaignSucess,
  CreateCampaignSucessContainer,
} from "../styled/CreateCampaign";
import { useNavigate } from "react-router-dom";
import Correct from "../assets/images/correct.svg";

const Donate = () => {
  const navigate = useNavigate();
  const [showInputAmount, setShowInputAmount] = useState(false);
  const handleShowInputAmount = () => {
    setShowInputAmount(!showInputAmount);
  };
  const [showSuccess, setShowSuccess] = useState(false);
  const handleShowSuccess = () => {
    setShowSuccess(true);
  };
  const [number, setNumber] = useState(0);
  const handleSetNumber = (amount) => {
    if (number === 0) {
      setNumber(amount)
    }
    if (number !== 0) {
      setNumber(number + amount)
    }
  }
  return (
    <>
      {showSuccess && (
        <CreateCampaignSucessContainer>
          <CreateCampaignSucess>
            <CreateCampaignSuccessIcon>
              <img src={Correct} alt="" />
            </CreateCampaignSuccessIcon>
            <p>Thank you for donating.</p>
            <CreateCampaignSuccessBtn onClick={() => navigate("/dashboard")}>
              Back to Home
            </CreateCampaignSuccessBtn>
          </CreateCampaignSucess>
        </CreateCampaignSucessContainer>
      )}
      <DonateContainer>
        <DonateHeader>
          <img src={ArrowRight} alt="" />
          <p>Donate</p>
        </DonateHeader>
        {showInputAmount === false && (
          <>
            <p>Select a preferred payment method </p>
            <DonateMethodContainer>
              <DonateMethodTab>
                <img src={MasterCard} alt="" />
                <p>Master Card</p>
              </DonateMethodTab>
              <DonateMethodTab>
                <img src={Visa} alt="" />
                <p>Visa</p>
              </DonateMethodTab>
              <DonateMethodTab>
                <img src={MoniePoint} alt="" />
                <p>Money Point</p>
              </DonateMethodTab>
              <DonateMethodTab>
                <img src={FlutterWave} alt="" />
                <p>Flutter Wave</p>
              </DonateMethodTab>
              <DonateMethodTab>
                <img src={PayStack} alt="" />
                <p>Paystack</p>
              </DonateMethodTab>
              <DonateMethodTab>
                <img src={PayPal} alt="" />
                <p>PayPal</p>
              </DonateMethodTab>
            </DonateMethodContainer>
            <DonateBtn onClick={() => handleShowInputAmount()}>
              Continue
            </DonateBtn>
          </>
        )}
        {showInputAmount && (
          <DonateAmountContainer>
            <p>How much do you want to donate?</p>
            <DonateAmountTab>${number}</DonateAmountTab>
            <DonateAmountNumberContainer>
              <DonateAmountNumber onClick={() => handleSetNumber("1")}>
                1
              </DonateAmountNumber>
              <DonateAmountNumber onClick={() => handleSetNumber("2")}>
                2
              </DonateAmountNumber>
              <DonateAmountNumber onClick={() => handleSetNumber("3")}>
                3
              </DonateAmountNumber>
            </DonateAmountNumberContainer>
            <DonateAmountNumberContainer>
              <DonateAmountNumber onClick={() => handleSetNumber("4")}>
                4
              </DonateAmountNumber>
              <DonateAmountNumber onClick={() => handleSetNumber("5")}>
                5
              </DonateAmountNumber>
              <DonateAmountNumber onClick={() => handleSetNumber("6")}>
                6
              </DonateAmountNumber>
            </DonateAmountNumberContainer>
            <DonateAmountNumberContainer>
              <DonateAmountNumber onClick={() => handleSetNumber("7")}>
                7
              </DonateAmountNumber>
              <DonateAmountNumber onClick={() => handleSetNumber("8")}>
                8
              </DonateAmountNumber>
              <DonateAmountNumber onClick={() => handleSetNumber("9")}>
                9
              </DonateAmountNumber>
            </DonateAmountNumberContainer>
            <DonateAmountNumberContainer>
              <DonateAmountNumber onClick={() => handleSetNumber("0")}>
                0
              </DonateAmountNumber>
            </DonateAmountNumberContainer>
            <DonateMakeBtn onClick={() => handleShowSuccess()}>
              Make Donation
            </DonateMakeBtn>
          </DonateAmountContainer>
        )}
      </DonateContainer>
    </>
  );
};

export default Donate;
