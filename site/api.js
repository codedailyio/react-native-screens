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

export const registerEmail = ({name, email, page, category}) => {
  return fetch(`${SERVER}/newsletter`, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      page,
      category,
    }),
  });
};