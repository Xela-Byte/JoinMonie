import {
  NoWithdrawal,
  WithdrawalContainer,
  WithdrawalTab,
  WithdrawContainer,
  WithdrawHeader,
} from "../styled/WithDraw";
import ArrowLeft from "../assets/images/left-arrow.png";
import Close from "../assets/images/close.svg";
import { useNavigate } from "react-router-dom";

const Withdrawal = () => {
  const navigate = useNavigate();
  return (
    <WithdrawContainer>
      <WithdrawHeader>
        <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
        <p>Withdrawal Records</p>
      </WithdrawHeader>
      <NoWithdrawal>
        <img src={Close} alt="" />
        <p>You have no withdrawal record</p>
      </NoWithdrawal>
      <WithdrawalContainer>
        <WithdrawalTab>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            rerum autem labore adipisci.
          </p>
        </WithdrawalTab>
      </WithdrawalContainer>
    </WithdrawContainer>
  );
};

export default Withdrawal;
