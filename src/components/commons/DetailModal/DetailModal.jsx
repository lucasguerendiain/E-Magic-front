import React from "react";
import BasicModal from "../BasicModal/BasicModal";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";

const DetailModal = ({open, onClose, cardInfo}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70vw",
        height: "60vh",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const getTitle = () => {
        return (
            <Grid display="flex" justifyContent="space-between">
                <Typography gutterBottom variant="h3">{cardInfo.name}</Typography>
                <Typography variant="h3">{cardInfo.manaCost}</Typography>
            </Grid>
        )
    }

    const getContent = () => {
        return (
            <Grid display="flex" >
                <img src={cardInfo.imageUrl} alt={cardInfo.name}/>
                <Grid 
                    display="flex" 
                    flexDirection="column" 
                    justifyContent="space-between" 
                    textAlign="center" 
                    alignItems="center"
                    width={"50vw"}
                    >
                    <Typography variant="h5">{cardInfo.type}</Typography>
                    <Typography variant="h5">{cardInfo.text}</Typography>
                    {cardInfo.power? (
                        <Grid sx={{width: "65px", textAlign: "center"}}>
                            <Typography variant="h5">{cardInfo.power} / {cardInfo.toughness}</Typography>
                        </Grid>
                    ) : (" ")}
                    <Typography variant="h5">Ilustrated by: {cardInfo.artist}</Typography>
                </Grid>
            </Grid>
        )
    }

    return (
        <BasicModal
            open={open}
            onClose={onClose}
            title={getTitle()}
            subtitle={cardInfo.setName}
            style={style}
            content={getContent()}
        >
        </BasicModal>
    )
}

export default DetailModal;