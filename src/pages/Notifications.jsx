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

moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "1 hour ago", //this is the setting that you need to change
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "1 month ago", //change this for month
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

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

  const newNotification = notifications.filter((notification) => {
    let { createdAt } = notification;
    let notifyDate = moment(createdAt).utc().format("YYYY-MM-DD hh:mm:ss");
    notifyDate = moment(notifyDate).fromNow();
    return (
      notifyDate.includes("minutes") ||
      notifyDate.includes("seconds") ||
      notifyDate.includes("now")
    );
  });

  return (
    <NotificationContainer>
      <img src={ArrowRight} alt="" onClick={() => navigate(-1)} />
      <p>Notifications</p>
      <NewNotificationContainer>
        <p>New</p>
        {newNotification.map((notification, index) => {
          const { _id, message, createdAt } = notification;

          return (
            <NewNotificationTab key={_id}>
              <p>{message}</p>
              <p id="date">
                <TimeAgo datetime={createdAt} locale="en" />
              </p>
            </NewNotificationTab>
          );
        })}
      </NewNotificationContainer>
      <OldNotificationContainer>
        <p>Old</p>
        {notifications.map((notification, index) => {
          let { _id, message, createdAt } = notification;

          return (
            <OldNotificationTab key={_id}>
              <p>{message}</p>
              <p id="date">
                <TimeAgo datetime={createdAt} locale="en" />
              </p>
            </OldNotificationTab>
          );
        })}
      </OldNotificationContainer>
      <ToastContainer />
    </NotificationContainer>
  );
};

export default Notifications;
