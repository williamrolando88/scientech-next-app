import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(JSON.parse(process.env.FIREBASE_CLIENT || ""));

const auth = getAuth(app);
const db = getFirestore(app);

const Client = {
  app,
  auth,
  db,
};

export default Client;
