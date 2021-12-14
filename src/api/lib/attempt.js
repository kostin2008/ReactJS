import {makeRequest} from "./makeRequest";

export const attempt = async (url, config) => {
  try {
    const result = await makeRequest(url, config);

    return [null, result];
  } catch (e) {
    let error = `${e.name} ${e.message}`;
    console.log(error);
    return [error, null];
  }
}