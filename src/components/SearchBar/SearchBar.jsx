import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCardsByNameFromDb } from "../../redux/actions/cardActions";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css";

export default function SearchBar() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [words, setWords] = useState("");

    function handleChange(e){
        setWords(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (words.length > 3) {
            dispatch(getCardsByNameFromDb(words));
            navigate("/showCards");
        }
    }
    return (
        <form onSubmit={handleSubmit} className="search">
            <Input
                type="text"
                value={words}
                disableUnderline
                onChange={(e) => handleChange(e)}
                placeholder="buscate cartas por el nombre"
                className="input"
                > 
            </Input>
            <Button type="submit" size="small" className="button"><SearchIcon color="primary"/></Button>
        </form>
    )
}