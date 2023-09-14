import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./SearchOptions.css";
import { useEffect, useState } from "react";

function SearchOptions({pagNum, setPagNum, paginado, sortBy}) {
    const [sort, setSort] = useState({
        type: "",
        orientation: "ascendent"
    });

    function handlePagChange(name) {
        if (name === "left") {
            if (pagNum > 0) setPagNum(pagNum - 1);
        } else {
            if (pagNum < paginado.length - 1) setPagNum(pagNum + 1);
        }
    };

    function handleSortChange(e) {
        setSort({
            ...sort,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if (sort.type) {
            sortBy(sort);
        }
    }, [sort]);

    return (
        <Grid className="searchOptions" display="flex" flexDirection="row">
                <Grid className="sortOptions" display="flex">
                    <FormControl className="formSortType">
                        <InputLabel id="sort-by-input">ordenado por</InputLabel>
                        <Select
                            labelId="sort-by-input"
                            label="ordenado por"
                            id="sort change"
                            name="type"
                            value={sort.type}
                            onChange={handleSortChange}
                        >
                            <MenuItem value={"name"}>nombre</MenuItem>
                            <MenuItem value={"cmc"}>cmc</MenuItem>
                            <MenuItem value={"power"}>fuerza</MenuItem>
                            <MenuItem value={"toughness"}>resistencia</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="formSortOrient">
                        <InputLabel id="sort-orientation">orientacion</InputLabel>
                        <Select
                            labelId="sort-orientation"
                            id="sort-orientation-select"
                            name="orientation"
                            value={sort.orientation}
                            onChange={handleSortChange}
                        >
                            <MenuItem value={"ascendent"}>ascendente</MenuItem>
                            <MenuItem value={"descendent"}>descendente</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid className="pages" display="flex" flexDirection="row">
                    <Button
                        size="medium"
                        onClick={() => setPagNum(0)}
                    >
                        <KeyboardDoubleArrowLeftIcon/>
                    </Button>
                    <Button
                        size="medium"
                        onClick={() => handlePagChange("left")}
                    >
                        <KeyboardArrowLeftIcon/>
                    </Button>
                    <Typography variant="h5">Pagina {pagNum + 1}</Typography>
                    <Button
                        size="medium"
                        onClick={() => handlePagChange("right")}
                    >
                        <KeyboardArrowRightIcon/>
                    </Button>
                    <Button
                        size="medium"
                        onClick={() => setPagNum(paginado.length - 1)}
                        disabled={paginado.length < 1}
                    >
                        <KeyboardDoubleArrowRightIcon/>
                    </Button>
                </Grid>
            </Grid>
    )
}

export default SearchOptions;