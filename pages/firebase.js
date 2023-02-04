import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = JSON.parse(process?.env?.FIREBASE_CONFIG ?? "{}");

let analytics;
let firestore;
if (firebaseConfig?.projectId) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    if (app.name && typeof window !== "undefined") {
        analytics = getAnalytics(app);
    }

    // Access Firebase services using shorthand notation
    firestore = getFirestore();
}

export { analytics, firestore };
