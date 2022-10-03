
import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://joinmonie.herokuapp.com/v1/register',
  headers: {'Content-Type': 'application/x-www-form-urlencoded', Connection: 'keep-alive'},
  data: 'fullName=John+Doe&username=JohnDoe123&email=hivendtech%40gmail.com&phonenumber=08164393176&country=Nigeria&DOB=02-03-2002&currency=USD&organisationName=Hivend'
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});




/*
 * Confirm Sign Up
 *
 * The token returned from https://joinmonie.herokuapp.com/v1/register will be a query for this request. * 
 * Then a post request for the password is made.
 */

import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://joinmonie.herokuapp.com/v1//auth/activate',
  params: {
    token: [
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpdmVuZHRlY2hAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJKb2huIERvZSIsImNvdW50cnkiOiJOaWdlcmlhIiwiY3VycmVuY3kiOiJVU0QiLCJvcmdhbmlzYXRpb25OYW1lIjoiSGl2ZW5kIiwiRE9CIjoiMDItMDMtMjAwMiIsImlhdCI6MTY2Mzc5ODY5NiwiZXhwIjoxNjYzODAyMjk2fQ.QLMCA6b9qeh0SSmS7m2XPSJJzH5ggGaeVfDAb_pqkuI',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpdmVuZHRlY2hAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJKb2huIERvZSIsImNvdW50cnkiOiJOaWdlcmlhIiwiY3VycmVuY3kiOiJVU0QiLCJvcmdhbmlzYXRpb25OYW1lIjoiSGl2ZW5kIiwiRE9CIjoiMDItMDMtMjAwMiIsImlhdCI6MTY2Mzc5ODY5NiwiZXhwIjoxNjYzODAyMjk2fQ.QLMCA6b9qeh0SSmS7m2XPSJJzH5ggGaeVfDAb_pqkuI'
    ]
  },
  data: 'password=warsaw124'
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});




/*
 * Logout
 *
 * The auth token in the req.headers.authorization is used to logout * 
 * 
 */

import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://joinmonie.herokuapp.com/v1/logout',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpdmVuZHRlY2hAZ21haWwuY29tIiwiX2lkIjoiNjMyYjhlMTcyNWZkMjVkNWVkNjg1NTk0IiwiaWF0IjoxNjYzNzk5ODEwLCJleHAiOjE2NjM4MDM0MTB9.e6Mx_qxZYlIuIiI5gggXQNZKfeXgruK9r8q3rhS2TEs'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});




/*
 * Login
 *
 * Just logging in * 
 * POST request is used.
 */

import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://joinmonie.herokuapp.com/v1/login',
  data: 'email=hivendtech%40gmail.com&password=warsaw124'
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});




/*
 * Forgot_password
 *
 * Returns a reset password token and sends a mail
 */

import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://joinmonie.herokuapp.com/v1/account/forgotpassword',
  data: 'email=hivendtech%40gmail.com'
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});




/*
 * Reset Password
 *
 * This resets the password  * 
 * It's a post request
 */

import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://joinmonie.herokuapp.com/v1/account/resetpassword/b6aaf70e91c3dc5f74a6bf1097328060de588e65',
  data: 'password=helloworld123'
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


