import { db } from './firebase.js';
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

// Add a new item to the "items" collection
export async function addItem(item) {
    try {
        // Force timestamp to 2026
        const timestamp2026 = new Date();
        timestamp2026.setFullYear(2026);

        const docRef = await addDoc(collection(db, 'items'), {
            ...item,
            timestamp: timestamp2026 // always 2026 
        });
        return docRef.id;
    } catch (error) {
        throw new Error("Error adding item: " + error.message);
    }
}

// Fetch all items from the "items" collection
export async function getItems() {
    const q = query(collection(db, 'items'), orderBy('timestamp', 'desc'));
    try {
        const querySnapshot = await getDocs(q);
        const items = [];
querySnapshot.forEach((doc) => {
    const data = doc.data();

    // Convert timestamp to JS Date
    let ts = data.timestamp?.toDate?.() || new Date();
    // Force year to 2026
    ts.setFullYear(2026);

    items.push({
        id: doc.id,
        ...data,
        timestamp: ts
    });
});
        return items;
    } catch (error) {
        throw new Error("Error fetching items: " + error.message);
    }
}