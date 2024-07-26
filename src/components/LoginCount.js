// src/components/LoginCount.js

import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const LoginCount = () => {
    const [loginCount, setLoginCount] = useState(0);

    useEffect(() => {
    const user = auth.currentUser;

    if (user) {
        const userDocRef = doc(db, "users", user.uid);

        // Real-time listener for login count
        const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setLoginCount(data.loginCount);
        }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }
    }, []);

    return (
    <div>
        <h2>Login Count</h2>
        <p>You've logged in {loginCount} times.</p>
    </div>
    );
};

export default LoginCount;
