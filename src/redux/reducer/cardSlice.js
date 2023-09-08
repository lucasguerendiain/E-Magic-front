import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewCards: [],
    allCards: [],
    detail: {},
    error: ""
};

export const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        getAllCards: (state, action) => {
            state.allCards = action.payload;
            state.viewCards = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    getAllCards,
    setError,
} = cardSlice.actions;

export default cardSlice.reducer;