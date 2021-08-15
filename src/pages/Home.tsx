import React from 'react';
import { useRootState, useRootDispatch } from '../store';
import { increment, decrement } from '../actions/countAction';
import styled from '@emotion/styled';

import Layout from '../Components/Layout';


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
        </Layout>
    );
};


export default Home;