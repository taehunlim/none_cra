import React from 'react';
import { useWindowSize } from '../Components/organisms/CustomHook/useWindowSize'

const CustomHookTest: React.FC = () => {

    const size = useWindowSize();

    return (
    <div>
        {size.width}px / {size.height}px
    </div>
    );
};

export default CustomHookTest;