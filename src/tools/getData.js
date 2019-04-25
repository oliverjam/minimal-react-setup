import {TOKEN} from "../../config";
export const API_BASE = "https://api.github.com";

const checkResponse = response => {
  if (response.status !== 200) {
    return(`Error with the request! ${response.status}`);

  }
  return response.json();
};

export const getData = url => {
  return fetch(`${url}?access_token=${TOKEN}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};
