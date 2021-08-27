import React from 'react';
import { useRootState, useRootDispatch } from '../store';
import { increment, decrement } from '../actions/countAction';

import Layout from '../Components/Layout';
import Button from '../Components/atoms/Button/Button';

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
        <Layout>
            <p>
                {state.count.number}
            </p>

            <Button
                onClick={handleIncrement}
            >
                +
            </Button>

            <Button
                onClick={handleDecrement}
            >
                -
            </Button>
        </Layout>
    );
};

export default Home;