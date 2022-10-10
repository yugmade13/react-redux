import React from 'react';
import {useSelector} from "react-redux";

import {Cart} from "../assets"

const Navbar = () => {
    const { amount } = useSelector((state) => state.cart);

    return (
        <nav className="bg-gray-800">
            <div className="flex justify-between items-center max-w-5xl m-auto px-4 py-4 sm:px-8">
                <h1 className="text-white text-[22px]">Redux Toolkit</h1>
                <div className="relative">
                    <span
                        className="text-white px-2 bg-blue-400 bg-opacity-75 rounded-full absolute top-[-10px] left-[-20px]">
                        {amount}
                    </span>
                    <Cart />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
