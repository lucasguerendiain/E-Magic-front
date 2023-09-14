import {
    addToList,
    deleteFromWishlist,
    setError
} from "../reducer/wishlistSlice";

export const addToWishlist = (card) => (dispatch) => {
    dispatch(addToList(card));
}

export const deleteFromWishlistAction = (idx) => (dispatch) => {
    dispatch(deleteFromWishlist(idx));
}