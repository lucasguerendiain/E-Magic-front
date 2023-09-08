import React from "react";
import "./AddCards.css";
import { Button, Grid } from "@mui/material";
import axios from "axios";

export default function AddCards() {

    async function handleRandomCards() {
        try {
            await axios.post("/cards");
        } catch (error) {
            alert(error.message || "hubo un error");
        }
    }

    return (
        <Grid className="mainDiv">
            <Button onClick={handleRandomCards} variant="contained">agregar cartas random</Button>
        </Grid>
    )
}