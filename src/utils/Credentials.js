import axios from "axios";
import { userRoute } from "./APIRoutes";

export let token = localStorage.getItem("JoinMonie-Verify-Token");

const headers = {
  Authorization: token,
};

const userConfig = {
  method: "PATCH",
  url: userRoute,
  headers: headers,
};
axios(userConfig)
  .then((res) => {
    localStorage.setItem("JoinMonie-User", JSON.stringify(res.data.user));
  })
  .catch((err) => {
    console.log(err);
  });
