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
        getCardsByName: (state, action) => {
            state.viewCards = action.payload;
        },
        getFilteredCards: (state, action) => {
            state.viewCards = action.payload;
        },
        setAllCards: (state) => {
            state.viewCards = state.allCards;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    getAllCards,
    setError,
    getCardsByName,
    getFilteredCards,
    setAllCards,
} = cardSlice.actions;

export default cardSlice.reducer;