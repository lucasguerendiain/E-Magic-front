import { configureStore} from "@reduxjs/toolkit";
import cardReducer from "../reducer/cardSlice";
import cartReducer from "../reducer/cartSlice";

export const store = configureStore({
    reducer: {
        cards: cardReducer,
        cart: cartReducer,
    },
}); 