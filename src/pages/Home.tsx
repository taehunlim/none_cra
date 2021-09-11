import React, {useState} from 'react';
import { useRootState, useRootDispatch } from '../store';
import { increment, decrement } from '../actions/countAction';

import Layout from '../components/Layout';
import Button from '../components/atoms/Button/Button';

const Home: React.FC = () => {

    const [count, setCount] = useState(0);

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
                onClick={() => setCount("1")}
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