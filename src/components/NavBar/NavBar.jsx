import { Grid, Button, IconButton, Typography, Input } from "@mui/material";
import React, { useEffect } from "react";
import "./NavBar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import HouseIcon from '@mui/icons-material/House';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { getAllCardsFromDb } from "../../redux/actions/cardActions";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCardsFromDb());
    }, [dispatch]);

    return (
        <Grid className="navBar">
            <Link to="/home">
                <IconButton>{<HouseIcon/>}E-Magia</IconButton>
            </Link>
            <Link to="/showCards">
                <Button>cartas sueltas</Button>
            </Link>
            <Link to="/advSearch">
                <Button>busqueda avanzada</Button>
            </Link>
            <Link to="/addCards">
                <Button>Agregar Cartas</Button>
            </Link>
            <SearchBar/>
            <Link to="/cart">
                <Button startIcon={<ShoppingCartIcon/>}>carrito</Button>
            </Link>
            <Link to="/login">
                <Button startIcon={<PersonIcon/>}>login</Button>
            </Link>
        </Grid>
    )
};