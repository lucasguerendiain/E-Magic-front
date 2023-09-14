import { Box, Grid, Typography } from "@mui/material";
import "./CardDisplay.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { Button } from "@mui/base";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DetailModal from "../commons/DetailModal/DetailModal";
import SearchOptions from "../commons/SearchOptions/SearchOptions";
import { sortViewCards } from "../../redux/actions/cardActions";

export default function CardDisplay() {
    const viewCards = useSelector((state) => state.cards.viewCards);
    const [paginado, setPaginado] = useState([]);
    const [pagNum, setPagNum] = useState(0);
    const [open, setOpen] = useState(false);
    const [detail, setDetail] = useState({});
    const dispatch = useDispatch();

    function handleOpen(card) {
        setDetail(card);
        setOpen(true);
    };

    function sortBy(input) {
        dispatch(sortViewCards(input, viewCards));
    };

    useEffect(() => {
        setPagNum(0);
        const pivotArray = [];
        for (let i = 0; i < viewCards.length; i += 9) {
            pivotArray.push(viewCards.slice(i, i + 9));
        }
        setPaginado(pivotArray);
    }, [viewCards]);

    return (
        <Grid className="display" display="flex" flexDirection="column">
            <SearchOptions
                pagNum={pagNum}
                setPagNum={setPagNum}
                paginado={paginado}
                sortBy={sortBy}
            />
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