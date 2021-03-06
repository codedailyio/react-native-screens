import "isomorphic-fetch";
import ReactGA from "react-ga";

const SERVER = process.env.SERVER;

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }
  return getJson(res).then(error => Promise.reject(error));
};

const getJson = res => res.json();

export const registerEmail = ({ name, email, page, category }) => {
  return fetch(`${SERVER}/newsletter`, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      page,
      category,
    }),
  })
    .then(checkStatus)
    .then(getJson);
};

export const postScreenSuggestion = ({ email, link }) => {
  return fetch(`${SERVER}/screens/submit`, {
    method: "POST",
    body: JSON.stringify({
      email,
      link,
    }),
  })
    .then(checkStatus)
    .then(getJson);
};

export const getScreens = (page = 1) => {
  return fetch(`${SERVER}/screens?page=${page}`, {
    method: "GET",
  })
    .then(checkStatus)
    .then(getJson);
};

export const getScreen = id => {
  return fetch(`${SERVER}/screens/${id}`, {
    method: "GET",
  })
    .then(checkStatus)
    .then(getJson);
};

export const getCollections = (page = 1) => {
  return fetch(`${SERVER}/collections?page=${page}`, {
    method: "GET",
  })
    .then(checkStatus)
    .then(getJson);
};

export const getCollection = id => {
  return fetch(`${SERVER}/collections/${id}`, {
    method: "GET",
  })
    .then(checkStatus)
    .then(getJson);
};
