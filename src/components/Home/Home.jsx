import React from "react";
import "./Home.css";
import { Grid, Typography, Box, Card } from '@mui/material';
import imagen1 from "../../assets/banner1.jpg";
import imagen2 from  "../../assets/banner2.jpg";
import Carousel from 'react-material-ui-carousel'

export default function Home() {

    return (
        <Grid className="Home" container>
            <Grid className="welcome" item>
                <Typography
                    variant="h2"
                >
                    Bienvenido al proyecto de mierda este (por nombrar)
                </Typography>
            </Grid>
            <Grid className="carousel-container" item>
                <Carousel 
                    infinite={true}
                    arrows={true}
                    height={480}
                    autoPlay={true}
                    stopAutoPlayOnHover={true}
                    interval={8000}
                >
                    <Box>
                        <img className="slideImg" src={imagen1} alt="imagen 1"/>
                    </Box>
                    <Box>
                        <img className="slideImg" src={imagen2} alt="imagen 2"/>
                    </Box>
                </Carousel>
            </Grid>
            <Grid className="cuadraditoVenta" item>
                <Grid>
                    <Typography
                        variant="h4"
                    > cartitas
                    </Typography>
                </Grid>
                <Grid>
                    de momento nada para mostrar
                </Grid>
            </Grid>
        </Grid>
    )
}