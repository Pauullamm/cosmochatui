import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Login } from "@mui/icons-material";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, username, password);
            // Create a user document in Firestore with initial login count
            const userDocRef = doc(db, "users", userCredential.user.uid);
            await setDoc(userDocRef, {
                loginCount: 0,
            });

            console.log("User document created with initial login count");
            console.log("Signed up successfully");
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };
    return (
        <Box display="flex" flexDirection={"column"} justifyContent="center" >
            <Box display="flex" flexDirection={"column"} justifyContent="center" component={"form"} onSubmit={handleLogin}>
                <div>

                    <Typography style={{margin:"20px"}} variant="h3" sx={{mb:3}}>
                        ReX
                    </Typography>
                    <Input style={{margin:"10px"}} placeholder="Email" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} required sx={{width: "400px"}}/>
                    <Input style={{margin:"10px"}} placeholder="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} required sx={{width: "400px"}}/>
                    <Button style={{margin:"10px"}} type="submit" variant="extended" sx={{ width: "100px"}}>
                        <Login />
                        Sign Up
                    </Button>
                    
                </div>
            </Box>
        </Box>
    )
}