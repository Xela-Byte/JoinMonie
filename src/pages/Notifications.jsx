import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NewNotificationContainer,
  NewNotificationTab,
  OldNotificationContainer,
  OldNotificationTab,
} from "../styled/Notifications";

import ArrowRight from "../assets/images/left-arrow.png";
import { getNotificationRoute } from "../utils/APIRoutes";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);

  // Getting Notifications
  const getNotifications = async () => {
    let token = localStorage.getItem("JoinMonie-Verify-Token");
    const headers = {
      Authorization: token,
    };
    const getConfig = {
      method: "GET",
      url: getNotificationRoute,
      headers: headers,
    };
    await axios(getConfig)
      .then((res) => {
        setNotifications(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  };

  // Calling the function whenever window loads.
  useEffect(() => {
    if (document.readyState === "complete") {
      getNotifications();
    } else {
      window.addEventListener("load", () => {
        getNotifications();
      });
      return () =>
        document.removeEventListener("load", () => {
          getNotifications();
        });
    }
  }, []);
  console.log(notifications);

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
      <ToastContainer />
    </NotificationContainer>
  );
};

export default Notifications;
