import React from 'react';
import ProductCard from "./ProductCard";
import {useSelector, useDispatch} from "react-redux";
import {openModal} from "../features/modal/modalSlice";

const Products = () => {
    const {cartItems : products, total} = useSelector((state => state.cart));
    const dispatch = useDispatch();

    return (
        <div className="w-full max-w-5xl m-auto px-4 sm:px-8 py-6">
            <h1 className="text-center text-2xl">Bag</h1>
            <div className="flex flex-col items-center mt-6">
                {products.length < 1
                    ? (<div>Empty</div>)
                    : (products.map((product) => <ProductCard key={product.id} {...product}/>)
                )}
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
                <h4 className="font-semibold text-[18px] mb-4">Total : {`$ ${total}`}</h4>
                {products.length < 1
                    ? ""
                    : (
                        <button
                            onClick={() => dispatch(openModal())}
                            className="text-white px-3 py-1 bg-red-600 rounded-xl">
                            Clear Items
                        </button>
                    )}
            </div>
        </div>
    );
};

export default Products;
