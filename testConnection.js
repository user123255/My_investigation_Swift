
// testConnection.js
import { db } from './firebaseNode.js';
import { collection, getDocs } from "firebase/firestore";

async function test() {
  try {
    const snapshot = await getDocs(collection(db, "items"));
    console.log("✅ Connected! Items found:", snapshot.size);
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
}

test();