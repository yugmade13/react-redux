import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import cartItems from "../../data/cartItems";
import {openModal} from "../modal/modalSlice";

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk("cart/getCartItems", async (name, thunkAPI) => {
    try {
        // console.log(name);
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        thunkAPI.dispatch(openModal());
        const response = await axios.get("https://course-api.com/react-useReducer-cart-project");
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        clearItem: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
        },
        increment: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find((item) => item.id === id);

            item.amount = item.amount + 1
        },
        decrement: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find((item) => item.id === id);

            item.amount = item.amount - 1
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });

            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: {
        [getCartItems.fulfilled]: (state, action) => {
            state.cartItems = action.payload;
        }
    }
});

export const {clearCart, clearItem, increment, decrement, calculateTotal} = cartSlice.actions;
export default cartSlice.reducer;