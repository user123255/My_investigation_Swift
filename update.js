// update.js
import { db } from './firebaseNode.js';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

async function updateAllItemsTo2026() {
    try {
        const itemsRef = collection(db, "items");
        const snapshot = await getDocs(itemsRef);

        if (snapshot.empty) {
            console.log("No items found to update.");
            return;
        }

        const updatePromises = [];

        snapshot.forEach((docSnap) => {
            const docRef = doc(db, "items", docSnap.id);
            let ts = docSnap.data().timestamp;

            if (!ts) {
                ts = new Date();
            } else if (ts.toDate) { // Firestore Timestamp
                ts = ts.toDate();
            } else if (typeof ts === "string") { // ISO string
                ts = new Date(ts);
            } else { // Already a Date
                ts = new Date(ts);
            }

            ts.setFullYear(2026);
            updatePromises.push(updateDoc(docRef, { timestamp: ts }));
        });

        await Promise.all(updatePromises);
        console.log(`✅ Successfully updated ${snapshot.size} items to year 2026!`);
    } catch (error) {
        console.error("❌ Error updating items:", error);
    }
}

updateAllItemsTo2026();