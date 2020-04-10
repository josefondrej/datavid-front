import {API_URL} from "./const";

function loadPatientData() {
  return fetch(`${API_URL}/version`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':'',
      "mode": ""
    },
  }).then(r => {console.log(r)});
}

export default { loadPatientData };
