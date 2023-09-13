import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CircleIcon from '@mui/icons-material/Circle';
import CreateIcon from '@mui/icons-material/Create';
import "./Footer.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Grid className="foot">
            <Grid className="foot-item">
                <Typography variant="h5">Info:</Typography>
                <ButtonGroup className="group" orientation="vertical">
                    <Button className="foot-text" variant="text" startIcon={<LocationOnIcon/>}>no existe la tienda</Button>
                    <Button className="foot-text" variant="text" startIcon={<AvTimerIcon/>}>siempre online</Button>
                    <Button className="foot-text" variant="text" startIcon={<CreateIcon/>}>by el Guere</Button>
                </ButtonGroup>
            </Grid>
            <Grid className="foot-item">
                <Typography variant="h5">Nav:</Typography>
                <ButtonGroup className="group" orientation="vertical">
                    <Link to="showCards">
                        <Button className="foot-button" variant="text" startIcon={<CircleIcon/>}>cartas sueltas</Button>
                    </Link>
                    <Link to="advSearch">
                        <Button className="foot-button" variant="text" startIcon={<SearchIcon/>}>busq. avanzada</Button>
                    </Link>
                    <Link to="cart">
                        <Button className="foot-button" variant="text" startIcon={<ShoppingCartIcon/>}>carrito</Button>
                    </Link>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}