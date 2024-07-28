// src/components/LogoutButton.js

import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Button } from "@mui/material";

const LogoutButton = () => {
const auth = getAuth();

// Function to log out the user
const handleLogout = async () => {
    try {
        await signOut(auth);
        console.log("User logged out successfully.");
        // Optionally, redirect the user to the login page or homepage
        window.location.href = "/"; // Change this to the route you want
    } catch (error) {
        console.error("Error logging out:", error);
    }
    };

    return (
        <Button onClick={handleLogout}>
            Log Out
        </Button>
    );
};

export default LogoutButton;
