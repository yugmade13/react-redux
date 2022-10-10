import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {calculateTotal} from "./features/cart/cartSlice";
import {getCartItems} from "./features/cart/cartSlice";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Modal from "./components/Modal";

const App = () => {
    const {cartItems} = useSelector((state) => state.cart);
    const {isOpen} = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartItems("siap"));
    }, [dispatch]);

    useEffect(() => {
        dispatch(calculateTotal())
    }, [cartItems]);


    return (
        <div className="w-full m-auto">
            {isOpen && <Modal />}
            <Navbar />
            <Products />
        </div>
    );
};

export default App;
