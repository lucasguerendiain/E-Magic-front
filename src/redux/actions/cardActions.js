import axios from "axios";
import {
    getAllCards, setError
} from "../reducer/cardSlice";

export const getAllCardsFromDb = () => async (dispatch) => {
    try {
        const todas = await axios("/cards");
        console.log(todas);
        dispatch(getAllCards(todas.data));
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