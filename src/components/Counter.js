import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "../features/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Tambah</button>
            <div>{count}</div>
            <button onClick={() => dispatch(decrement())}>Kurang</button>
        </div>
    );
};

export default Counter;
