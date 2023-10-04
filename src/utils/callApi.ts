import { BASE_URL } from "../globals";

async function callApi(endpoint:RequestInfo, options?:RequestInit) {
  // once deployed add credentials: 'include' to options
  return fetch(`${BASE_URL}${endpoint}`, {...options}).then((res)=>{
    if (res.ok) {
      return res.json();
    }
    return res.json().then((json) => {
      throw new Error(json.message || 'An error occurred.');
    });
  }).catch((error) => {
    throw new Error(`API call error: ${error.message}`);
  });
  // Handle response
}

export default callApi;