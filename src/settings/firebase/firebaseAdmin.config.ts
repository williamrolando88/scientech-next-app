import { COLLECTIONS } from "@/types/enums/collections";
import { initializeApp } from "firebase-admin";

const app = initializeApp(JSON.parse(process.env.FIREBASE_ADMIN || ""));

const Admin = {
  app,
  db: app.firestore(),
};

export default Admin;

export const FirestoreCollections = {
  importCalculations: Admin.db.collection(COLLECTIONS.IMPORT_CALCULATIONS),
};
