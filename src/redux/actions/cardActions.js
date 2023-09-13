import axios from "axios";
import {
    getAllCards,
    setError,
    getCardsByName,
    setAllCards,
    getFilteredCards,
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

/*
    faltan todos los filtros y ordenamientos

    falta lo de los stocks

    falta borrar
*/