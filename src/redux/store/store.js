import { configureStore} from "@reduxjs/toolkit";
import cardReducer from "../reducer/cardSlice";

export const store = configureStore({
    reducer: {
        cards: cardReducer,
    },
}); 