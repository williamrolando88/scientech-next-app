import { COLLECTIONS } from "@/types/enums/collections";
import admin from "firebase-admin";

const app = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN as string)),
});

const Admin = {
  app,
  db: app.firestore(),
};

export default Admin;

export const FirestoreCollections = {
  importCalculations: Admin.db.collection(COLLECTIONS.IMPORT_CALCULATIONS),
};
