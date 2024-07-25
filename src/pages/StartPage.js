import { Box, Fab, TextField, Typography } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === process.env.REACT_APP_UNAME && password === process.env.REACT_APP_PWD) {
            navigate('/home')
        } else {
            alert("Invalid Credentials, please try again")
        }
    };
    return (
        <Box display="flex" flexDirection={"column"} justifyContent="center" >
            <Box display="flex" flexDirection={"column"} justifyContent="center" component={"form"} onSubmit={handleLogin}>
                <div>

                    <Typography style={{margin:"10px"}} variant="h3" sx={{mb:3}}>
                        Login
                    </Typography>
                    <TextField style={{margin:"10px"}} label="username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} required sx={{width: "400px"}}/>
                    <TextField style={{margin:"10px"}} label="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} required sx={{width: "400px"}}/>
                    <Fab style={{margin:"10px"}} type="submit" variant="extended" sx={{ width: "100px"}}>
                        <NavigationIcon />
                        Login
                    </Fab>
                    
                </div>
            </Box>
        </Box>
    )
}