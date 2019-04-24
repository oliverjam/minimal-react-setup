// import { accessToken } from "../../token";
export const accessToken = "6953b440ab762a5d9de0112d3be3f6a179533e0e";
export const API_URL = "https://api.github.com";

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
