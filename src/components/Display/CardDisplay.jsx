import { Grid, Typography } from "@mui/material";
import "./CardDisplay.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCardsFromDb } from "../../redux/actions/cardActions";
import Card from "../Card/Card";
import { Button } from "@mui/base";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function CardDisplay() {
    const dispatch = useDispatch();
    const viewCards = useSelector((state) => state.cards.viewCards);
    const allCards = useSelector((state) => state.cards.allCards);
    const [paginado, setPaginado] = useState([]);
    const [pagNum, setPagNum] = useState(0);

    function handlePagChange(name) {
        if (name === "left") {
            if (pagNum > 0) setPagNum(pagNum - 1);
        } else {
            if (pagNum < paginado.length - 1) setPagNum(pagNum + 1);
        }
    };

    useEffect(() => {
        dispatch(getAllCardsFromDb());
    }, []);

    useEffect(() => {
        setPagNum(0);
        const pivotArray = [];
        for (let i = 0; i < viewCards.length; i += 9) {
            pivotArray.push(viewCards.slice(i, i + 9));
        }
        setPaginado(pivotArray);
    }, [allCards]);

    return (
        <Grid className="display">
            <Grid className="pages">
                <Button
                    size="medium"
                    disableRipple
                    onClick={() => handlePagChange("left")}
                >
                    <KeyboardDoubleArrowLeftIcon/>
                </Button>
                <Typography variant="h4">Pagina {pagNum + 1}</Typography>
                <Button
                    size="medium"
                    disableRipple
                    onClick={() => handlePagChange("right")}
                >
                    <KeyboardDoubleArrowRightIcon/>
                </Button>
            </Grid>
            <Grid className="cardContainer">
                {paginado.length? (
                    paginado[pagNum].map((elem, index) => (
                        <Grid display="flex">
                            <Card key={index} info={elem}/>
                        </Grid>
                    ))
                )
                : (
                <Grid>
                    <Typography variant="h1">Cargando...</Typography>    
                </Grid>
                )}
                <Button onClick={() => window.scrollTo(0,0)}><ArrowUpwardIcon/></Button>
            </Grid>
        </Grid>
    )
}