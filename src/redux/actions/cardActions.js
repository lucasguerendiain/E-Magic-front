import axios from "axios";
import {
    getAllCards,
    setError,
    getCardsByName,
} from "../reducer/cardSlice";

export const getAllCardsFromDb = () => async (dispatch) => {
    try {
        const todas = await axios("/cards");
        dispatch(getAllCards(todas.data));
    } catch(error) {
        dispatch(setError(error));
    }
};

export const getCardsByNameFromDb = (name) => async(dispatch) => {
    try {
        const cartas = await axios(`/cards/byName?name=${name}`);
        dispatch(getCardsByName(cartas.data));
    } catch(error) {
        dispatch(setError(error));
    }
}

/*
    faltan todos los filtros y ordenamientos

    falta lo de los stocks

    falta busqueda por nombre

    falta borrar
*/