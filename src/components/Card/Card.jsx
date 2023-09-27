import React, { useState } from "react";
import "./Card.css";
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartActions";


export default function Card(props) {
    const {name, imageUrl, setName, stocks, id  } = props.info;
    const wholeCard = props.info;
    const handleOpen = props.func;
    const dispatch = useDispatch();
    const [cantValue, setCantValue] = useState(0);
    //esto necesita un formateo para que sean solo 3 stocks a la ve, uno por cada condicion de carta

    function handleCantChange(name, elem) {
        if (name === "add") {
            if (cantValue < elem.stockNumber) {
                setCantValue(cantValue + 1);
            }
        } else {
            if (cantValue > 0) setCantValue(cantValue - 1);
        }
    }

    return (
        <Grid key={id} className="card">
            <Grid className="title">
                <Typography variant="h4" fontWeight={500}>{name} - {setName}</Typography>
                <Button size="small">add to wishlist</Button>
            </Grid>
            <Grid className="body">
                <Grid className="imagen">
                    <img src={imageUrl} alt={name} onClick={() => handleOpen(props.info)}/>
                </Grid>
                <Grid display="flex" flexDirection="column">
                    {stocks.length? (
                        stocks.map((elem, index) => {
                            return(
                            <Grid className="irrelevantInfo" key={index}>
                                <Typography variant="h4">{elem.condition} / {elem.language}</Typography>
                                <Typography variant="h5">{elem.price} USD</Typography>
                                <Box display="flex" width="10vw">
                                    <Button size="small" onClick={() => handleCantChange("substract", elem)}><RemoveIcon/></Button>
                                    <Input
                                        inputProps={{style: {textAlign: "center"}}}
                                        readOnly
                                        disableUnderline
                                        value={cantValue}
                                        >
                                    </Input>
                                    <Button size="small" onClick={() => handleCantChange("add", elem)}><AddIcon/></Button>
                                    <Typography>{elem.stockNumber? (`${elem.stockNumber} en stock`) : ("sin stock")}</Typography>
                                </Box>
                                <Button variant="contained" size="small" onClick={() => dispatch(addToCartAction(wholeCard, cantValue))}>al carrito</Button>
                            </Grid>
                        )})
                    )
                    : (<Typography>cargando</Typography>)
                    }
                </Grid>
            </Grid>
        </Grid>
    )
};