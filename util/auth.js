import axios from "axios";

const API_KEY = "AIzaSyB4FJ-uS7TxiADUAzPReF76OD1p8lpeeKk";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
//   console.log("====================================");
//   console.log(response.data);
//   console.log("====================================");
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
