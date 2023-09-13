import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import "./AdvSearch.css";
import { useDispatch } from "react-redux";
import { getAdvSearchResults } from "../../redux/actions/cardActions";
import { useNavigate } from "react-router-dom" 

function AdvSearch() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: "",
        type: "",
        manaCost: "",
        artist: "",
        setName: "",
        color: "",
        //color: ["b", "r", "w", "g", "u"],
        //stats(power, toughness, mana value, loyalty),
        //legality    
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getAdvSearchResults(inputs))
        .then(navigate("/showCards"));
    };

    return (
        <Grid container className="form">
            <Grid item>
                <Typography variant="h3">Opciones de busqueda</Typography>
            </Grid>
            <Grid item>
                <Grid className="textfields" container spacing={2}>
                    <Grid className="inputCell" item>
                        <TextField
                            autoComplete="nombre"
                            name="name"
                            fullWidth
                            id="name"
                            label="nombre"
                            autoFocus
                            onChange={handleChange}
                            value={inputs.name}
                        />
                    </Grid>
                    <Grid className="inputCell" item>
                        <TextField
                            autoComplete="tipo"
                            name="type"
                            fullWidth
                            id="type"
                            label="tipo"
                            autoFocus
                            onChange={handleChange}
                            value={inputs.type}
                        />
                    </Grid>
                    <Grid className="inputCell" item>
                        <TextField
                            autoComplete="coste de mana"
                            name="manaCost"
                            fullWidth
                            id="manaCost"
                            label="coste de mana"
                            autoFocus
                            onChange={handleChange}
                            value={inputs.manaCost}
                        />
                    </Grid>
                    <Grid className="inputCell" item>
                        <TextField
                            autoComplete="artista"
                            name="artist"
                            fullWidth
                            id="artist"
                            label="artista"
                            autoFocus
                            onChange={handleChange}
                            value={inputs.artist}
                        />
                    </Grid>
                    <Grid className="inputCell" item>
                        <TextField
                            autoComplete="nombre del set"
                            name="setName"
                            fullWidth
                            id="setName"
                            label="nombre del set"
                            autoFocus
                            onChange={handleChange}
                            value={inputs.setName}
                        />
                    </Grid>
                    <Grid className="inputCell" item>
                        <TextField
                            autoComplete="colores"
                            name="color"
                            fullWidth
                            id="color"
                            label="colores"
                            autoFocus
                            onChange={handleChange}
                            value={inputs.color}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Button onClick={handleSubmit} variant="contained" size="large">Buscar</Button>
        </Grid>
    )
}

export default AdvSearch;