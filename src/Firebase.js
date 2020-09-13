// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyDDkWWPkgSDUYQa_W_l0KZOET4A1KR7WVg",
  authDomain: "clone-b1418.firebaseapp.com",
  databaseURL: "https://clone-b1418.firebaseio.com",
  projectId: "clone-b1418",
  storageBucket: "clone-b1418.appspot.com",
  messagingSenderId: "327623674037",
  appId: "1:327623674037:web:c558a38a12ff76ba77d6fc",
  measurementId: "G-F7XRNXC5D6",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
