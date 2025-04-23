import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { db } from "./firebaseConfig.js";

export async function fetchProjects() {
  const querySnapshot = await getDocs(collection(db, "portfolio"));
  return querySnapshot.docs.map((doc) => doc.data());
}
