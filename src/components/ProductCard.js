import React from 'react';
import {useDispatch} from "react-redux";
import {clearItem, increment, decrement} from "../features/cart/cartSlice";

import {Up, Down} from "../assets";

const ProductCard = ({id, img, price, title, amount}) => {
    const dispatch = useDispatch();

    return (
        <div className="w-full flex justify-between items-center py-2">
            <div className="flex justify-start items-center">
                <img
                    className="w-[120px]"
                    src={img}
                    alt={title}/>
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p>{`$ ${price}`}</p>
                    <button
                        onClick={() => dispatch(clearItem(id))}
                        className="text-blue-600 underline text-[14px]">
                        Remove
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <button
                    onClick={() => dispatch(increment(id))}>
                    <Up />
                </button>
                <span>{amount}</span>
                <button
                    onClick={() => {
                        if(amount <= 1) return;
                        dispatch(decrement(id))
                    }}>
                    <Down />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
