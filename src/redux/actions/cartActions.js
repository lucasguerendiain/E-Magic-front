import {
    addToCart,
    deleteAllFromCart,
    deleteOneFromCart,
    setError
} from "../reducer/cartSlice";

export const addToCartAction = (card, cantValue) => (dispatch) => {
    for (let i = 0; i < cantValue; i++) {
        dispatch(addToCart(card));
    }
};

export const deleteAllFromCartAction = (card) => (dispatch) => {
    if (!card.name) {
        dispatch(setError("falta nombre, pelotudo/a"));
    }
    else dispatch(deleteAllFromCart(card.name));
}

export const deleteOneFromCartAction = (idx) => (dispatch) => {
    dispatch(deleteOneFromCart(idx));
}