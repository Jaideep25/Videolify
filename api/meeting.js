const fetch = require("node-fetch");

const API_KEY = "videolify_default_secret";
// const VIDEOLIFY_URL = "http://localhost:3000/api/v1/meeting";
// const VIDEOLIFY_URL = "https://videolify.herokuapp.com/api/v1/meeting";
const VIDEOLIFY_URL = "https://videolify.up.railway.app/api/v1/meeting";

function getResponse() {
  return fetch(VIDEOLIFY_URL, {
    method: "POST",
    headers: {
      authorization: API_KEY,
      "Content-Type": "application/json",
    },
  });
}

getResponse().then(async (res) => {
  console.log("Status code:", res.status);
  const data = await res.json();
  console.log("meeting:", data.meeting);
});
