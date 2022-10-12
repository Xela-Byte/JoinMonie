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
// eslint-disable-next-line
import TimeAgo from "timeago-react";
import moment from "moment";

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
      method: "POST",
      url: getNotificationRoute,
      headers: headers,
    };
    await axios(getConfig)
      .then((res) => {
        setNotifications(res.data.notifications);
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

  return (
    <NotificationContainer>
      <img src={ArrowRight} alt="" onClick={() => navigate(-1)} />
      <p>Notifications</p>
      <NewNotificationContainer>
        <p>New</p>
        {/* {newNotifications.map((notification, index) => {
          const { _id, message, createdAt } = notification;

          return (
            <NewNotificationTab key={_id}>
              <p>{message}</p>
              <p id="date">
                <TimeAgo datetime={createdAt} locale="en" />
              </p>
            </NewNotificationTab>
          );
        })} */}
      </NewNotificationContainer>
      <OldNotificationContainer>
        <p>Old</p>
        {notifications.map((notification, index) => {
          const { _id, message, createdAt } = notification;

          return (
            <OldNotificationTab key={_id}>
              <p>{message}</p>
              <p id="date">
                <TimeAgo datetime={createdAt} locale="en" />
              </p>
              <p>{moment().format(createdAt, 'hh')}</p>
            </OldNotificationTab>
          );
        })}
      </OldNotificationContainer>
      <ToastContainer />
    </NotificationContainer>
  );
};

export default Notifications;
