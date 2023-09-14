import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
    error: "",
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToList: (state, action) => {
            state.wishlist = [...state.wishlist, action.payload];
        },
        deleteFromWishlist: (state, action) => {
            const nuevoArreglo = state.wishlist.slice(0, action.payload);
            const nuevoArreglo2 = state.wishlist.slice(action.payload +1);
            state.wishlist = [...nuevoArreglo, ...nuevoArreglo2];
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    addToList,
    deleteFromWishlist,
    setError
} = wishlistSlice.actions;

export default wishlistSlice.reducer;