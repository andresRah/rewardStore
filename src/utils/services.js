import { API_BASE_URL, REACT_APP_TOKEN } from "./constants";

/**
 *
 * callServiceAPI
 * @export
 * @param {*} url
 * @param {*} method
 * @param {*} body
 * @returns
 */
export async function callServiceAPI(url, method, body) {
  let response = await fetch(`${API_BASE_URL}${url}`, {
    method,
    body,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN || REACT_APP_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();

  return data;
}
