import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NewNotificationContainer,
  NewNotificationTab,
  OldNotificationContainer,
  OldNotificationTab,
} from "../styled/Notifications";

import ArrowRight from "../assets/images/left-arrow.png";

const Notifications = () => {
  const navigate = useNavigate();

  return (
    <NotificationContainer>
      <img src={ArrowRight} alt="" onClick={() => navigate(-1)} />
      <p>Notifications</p>
      <NewNotificationContainer>
        <p>New</p>
        <NewNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </NewNotificationTab>
        <NewNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </NewNotificationTab>
      </NewNotificationContainer>
      <OldNotificationContainer>
        <p>Old</p>
        <OldNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </OldNotificationTab>
        <OldNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </OldNotificationTab>
        <OldNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </OldNotificationTab>
        <OldNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </OldNotificationTab>
        <OldNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </OldNotificationTab>
        <OldNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </OldNotificationTab>
        <OldNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </OldNotificationTab>
        <OldNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </OldNotificationTab>
        <OldNotificationTab>
          <p>Xela donated $50 to your 'Treatment for the sick' campaign</p>
        </OldNotificationTab>
      </OldNotificationContainer>
    </NotificationContainer>
  );
};

export default Notifications;
