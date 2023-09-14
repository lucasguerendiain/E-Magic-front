import axios from "axios";
import {
    getAllCards,
    setError,
    getCardsByName,
    setAllCards,
    getFilteredCards,
    setViewCards,
} from "../reducer/cardSlice";

export const getAllCardsFromDb = () => async (dispatch) => {
    try {
        const todas = await axios("/cards");
        dispatch(getAllCards(todas.data));
    } catch(error) {
        dispatch(setError(error.message));
    }
};

export const getCardsByNameFromDb = (name) => async(dispatch) => {
    try {
        const cartas = await axios(`/cards/byName?name=${name}`);
        dispatch(getCardsByName(cartas.data));
    } catch(error) {
        dispatch(setError(error.message));
    }
};

export const getAdvSearchResults = (inputs) => async(dispatch) => {
    try{
        const filtered = await axios.post("/cards/filtered", inputs);
        console.log(filtered);
        dispatch(getFilteredCards(filtered.data));
    } catch(error) {
        dispatch(setError(error.message));
    }
}

export const resetFilters = () => (dispatch) => {
    dispatch(setAllCards);
}

export const sortViewCards = (input, cards) => (dispatch) => {
    const { type, orientation } = input;
    if (cards) {
        let toBeSorted = [...cards];
        switch (type) {
            case "name": {
                if (orientation === "descendent") toBeSorted.sort((a, b) => b.name.localeCompare(a.name));
                if (orientation === "ascendent") toBeSorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            }
            case "cmc": {
                    if (orientation === "descendent") toBeSorted.sort((a, b) => b.cmc - a.cmc);
                    if (orientation === "ascendent") toBeSorted.sort((a, b) => a.cmc - b.cmc);
                    break;
            }
            case "power": {
                if (orientation === "descendent") toBeSorted.sort((a, b) => b.power - a.power);
                if (orientation === "ascendent") toBeSorted.sort((a, b) => a.power - b.power);
                break;
            }
            case "toughness": {
                if (orientation === "descendent") toBeSorted.sort((a, b) => b.toughness - a.toughness);
                if (orientation === "ascendent") toBeSorted.sort((a, b) => a.toughness - b.toughness);
                break;
            }
        } 
        dispatch(setViewCards(toBeSorted));
    }
}

/*
    faltan todos los filtros y ordenamientos

    falta lo de los stocks

    falta borrar
*/