import { Box, Fab } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation'

export default function StartPage() {
    return (
        <Box display="flex" flexDirection={"column"} justifyContent="center" alignContent="center">
            <h1> Welcome! Click to Login</h1>
            <Fab variant="extended">
                <NavigationIcon />
                Login
            </Fab>
        </Box>
    )
}