import { Box } from "@mui/material";
import BarChart from "../components/BarChart";
import AppSidebar from "../components/AppSidebar";


export default function BarPage() {

    return (
        <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
            <AppSidebar />
            <h2>Your Statistics</h2>
            <p> Graph of the conversations you had with ReX this year</p>
            <Box m="10px" display={"flex"} justifyContent={"center"}>
                <Box height={'75vh'} width={'75vw'}>
                    <BarChart />
                </Box>
            </Box>
        </div>
    )
}