import React from 'react';
import { useRootState, useRootDispatch } from '../store';
import { increment, decrement } from '../actions/countAction';
import styled from '@emotion/styled';


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

            <Button
                onClick={handleIncrement}
            >
                +
            </Button>

            <button
                onClick={handleDecrement}
            >
                -
            </button>
        </div>
    );
};

const Button = styled.button`


${ (props => props.theme.bg.green)}
`;


export default Home;