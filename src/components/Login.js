// src/components/Login.js

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, updateDoc, increment } from "firebase/firestore";
import { Box, Button, Input } from "@mui/material";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully", userCredential.user);

            // Update the login count in Firestore
            const userDocRef = doc(db, "users", userCredential.user.uid);
            await updateDoc(userDocRef, {
            loginCount: increment(1),
            });

            console.log("Login count updated");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <Box display="flex" flexDirection={"column"} justifyContent="center" >
            <Box display="flex" flexDirection={"column"} justifyContent="center" component={"form"} onSubmit={handleLogin}>
                <div>

                    <Input style={{margin:"10px"}} placeholder="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required sx={{width: "400px"}}/>
                    <Input style={{margin:"10px"}} placeholder="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} required sx={{width: "400px"}}/>
                    <Button style={{margin:"10px"}} type="submit" variant="extended" sx={{ width: "100px"}}>
                        <Login />
                        Login
                    </Button>
                    
                </div>
            </Box>
        </Box>
    );
};

export default Login;
