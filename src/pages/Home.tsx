import React from 'react';
import { useRootState, useRootDispatch } from '../store';
import { increment, decrement } from '../actions/countAction';

const Home: React.FC = () => {

    const state = useRootState();
    const dispatch = useRootDispatch();

    const handleIncrement = e => {
        e.preventDefault();
        dispatch(increment());
    }

    const handleDecrement = e => {
        e.preventDefault();
        dispatch(decrement());
    }

    return (
        <div>
            <p>
                {state.count.number}
            </p>

            <button
                onClick={handleIncrement}
            >
                +
            </button>

            <button
                onClick={handleDecrement}
            >
                -
            </button>
        </div>
    );
};

export default Home;