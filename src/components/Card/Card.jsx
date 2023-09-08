import React, { useState } from "react";
import "./Card.css";
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function Card(props) {
    const {name, imageUrl, setName, stock, id  } = props.info;
    
    const [cantValue, setCantValue] = useState(1);

    function handleCantChange(name) {
        if (name === "add") {
            setCantValue(cantValue + 1);
        } else {
            if (cantValue > 1) setCantValue(cantValue -1);
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
                    <img src={imageUrl} alt={name}/>
                </Grid>
                <Grid display="flex" flexDirection="column">
                    <Grid className="irrelevantInfo">
                        <Typography variant="h4">NM / English</Typography>
                        <Typography> price </Typography>
                        <Box display="flex" width="10vw">
                            <Button size="small" onClick={() => handleCantChange("substract")}><RemoveIcon/></Button>
                            <Input
                                defaultValue="1"
                                inputProps={{style: {textAlign: "center"}}}
                                readOnly
                                disableUnderline
                                value={cantValue}
                                sx={{textAlign:"center"}}
                                >
                            </Input>
                            <Button size="small" onClick={() => handleCantChange("add")}><AddIcon/></Button>
                        </Box>
                        <Button>add to cart</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};