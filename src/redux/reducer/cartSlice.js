import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carrito: [],
    error: "",
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.carrito = [...state.carrito, action.payload];
        },
        deleteAllFromCart: (state, action) => {
            state.carrito = state.carrito.filter((elem) => elem.name !== action.payload);
        },
        deleteOneFromCart: (state, action) => {
            const nuevoArreglo = state.carrito.slice(0, action.payload);
            const nuevoArreglo2 = state.carrito.slice(action.payload +1);
            state.carrito = [...nuevoArreglo, ...nuevoArreglo2];
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    addToCart,
    setError,
    deleteAllFromCart,
    deleteOneFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;