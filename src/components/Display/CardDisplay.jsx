import { Box, Grid, Typography } from "@mui/material";
import "./CardDisplay.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Card/Card";
import { Button } from "@mui/base";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DetailModal from "../commons/DetailModal/DetailModal";

export default function CardDisplay() {
    const viewCards = useSelector((state) => state.cards.viewCards);
    //const allCards = useSelector((state) => state.cards.allCards);
    const [paginado, setPaginado] = useState([]);
    const [pagNum, setPagNum] = useState(0);
    const [open, setOpen] = useState(false);
    const [detail, setDetail] = useState({});

    function handlePagChange(name) {
        if (name === "left") {
            if (pagNum > 0) setPagNum(pagNum - 1);
        } else {
            if (pagNum < paginado.length - 1) setPagNum(pagNum + 1);
        }
    };

    function handleOpen(card) {
        setDetail(card);
        setOpen(true);
    }

    useEffect(() => {
        setPagNum(0);
        const pivotArray = [];
        for (let i = 0; i < viewCards.length; i += 9) {
            pivotArray.push(viewCards.slice(i, i + 9));
        }
        setPaginado(pivotArray);
    }, [viewCards]);

    return (
        <Grid className="display">
            <Grid className="pages">
                <Button
                    size="medium"
                    onClick={() => handlePagChange("left")}
                >
                    <KeyboardDoubleArrowLeftIcon/>
                </Button>
                <Typography variant="h4">Pagina {pagNum + 1}</Typography>
                <Button
                    size="medium"
                    onClick={() => handlePagChange("right")}
                >
                    <KeyboardDoubleArrowRightIcon/>
                </Button>
            </Grid>
            <Grid className="cardContainer">
                {paginado.length? (
                    paginado[pagNum].map((elem, index) => (
                        <Grid display="flex" key={index}>
                            <Card info={elem} func={handleOpen}/>
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
            <Box>
                <DetailModal
                    open={open}
                    onClose={() => setOpen(false)}
                    cardInfo={detail}
                />
            </Box>
        </Grid>
    )
}