import React from 'react';
import {useDispatch} from "react-redux";
import {closeModal} from "../features/modal/modalSlice";
import {clearCart} from "../features/cart/cartSlice";

const Modal = () => {
    const dispatch = useDispatch();

    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-white px-10 py-8 shadow-xl rounded-2xl">
                <h4 className="font-semibold text-2xl">Delete all product?</h4>
                <div className="flex justify-end items-center gap-4 mt-4">
                    <button
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(closeModal());
                        }}
                        className="text-blue-600 underline">
                        Yes
                    </button>
                    <button
                        onClick={() => dispatch(closeModal())}
                        className="px-4 py-1 bg-red-600 rounded-xl text-white font-semibold">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
