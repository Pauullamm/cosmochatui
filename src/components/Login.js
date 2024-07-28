// src/components/Login.js

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, updateDoc, increment } from "firebase/firestore";
import { Box, Button, Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const showLogin = () => {
        setIsVisible(prevState => !prevState);
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully", userCredential.user);

            navigate("/home")
            const userDocRef = doc(db, "users", userCredential.user.uid);
            await updateDoc(userDocRef, {
            loginCount: increment(1),
            });
            
            console.log(`Login count updated`);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div>
            <Typography>If you already have an account, login instead</Typography>
            <Button onClick={showLogin}>Click to Login</Button>
                {isVisible && (
                    <Box display="flex" flexDirection={"column"} justifyContent="center" >
                        <Box display="flex" flexDirection={"column"} justifyContent="center" component={"form"} onSubmit={handleLogin}>
                            <div>
            
                                <Input style={{margin:"10px"}} placeholder="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required sx={{width: "400px"}}/>
                                <Input style={{margin:"10px"}} placeholder="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} required sx={{width: "400px"}}/>
                                <Button style={{margin:"10px"}} type="submit" variant="extended" sx={{ width: "100px"}}>
                                    Login
                                </Button>
                                
                            </div>
                        </Box>
                    </Box>
            )}
        </div>
    )
};

export default Login;
