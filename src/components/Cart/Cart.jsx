import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllFromCartAction, deleteOneFromCartAction } from "../../redux/actions/cartActions";

function Cart() {
    const carrito = useSelector((satte) => satte.cart.carrito);
    //carrito === array of Cards(obj)
    const dispatch = useDispatch();

    return (
        <Grid className="mainGrid" display="flex" flexDirection="column">
            <Grid display="flex" textAlign="center">
                <Typography variant="h2">Carrito</Typography>
            </Grid>
            <Grid className="elemContainer" display="flex" flexDirection="column">
                {carrito.length? (
                    carrito.map((elem, idx) => (
                        <Grid className="elem" key={idx} display="flex">
                            <Typography variant="h6">{elem.name}</Typography>
                            <Typography variant="h6">{elem.setName}</Typography>
                            <Typography variant="h6">{elem.type}</Typography>
                            <Typography variant="h5">*precio*</Typography>
                            <Button onClick={() => dispatch(deleteAllFromCartAction(elem))} variant="outlined" size="small">remove all</Button>
                            <Button onClick={() => dispatch(deleteOneFromCartAction(idx))} variant="contained" size="small">X</Button>
                        </Grid>
                    ))
                ) : (
                    <Grid display="flex" sx={{justifyContent: "center", alignItems: "center"}}>
                        <Typography variant="h2">Compra cosas primero</Typography>
                    </Grid>
                )}
            </Grid>
            <Button variant="contained" size="large">{"pagar(aún no implementado)"}</Button>
        </Grid>
    )
}


export default Cart;