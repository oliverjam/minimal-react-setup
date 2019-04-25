// import { accessToken } from "../../token";
export const accessToken = "2937a959989d4dd5c775da0061d26c980d06a1ad  ";
export const API_BASE = "https://api.github.com";

const checkResponse = response => {
  if (response.status !== 200) {
    return(`Error with the request! ${response.status}`);

  }
  return response.json();
};

export const getData = url => {
  return fetch(`${url}?access_token=${accessToken}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};
