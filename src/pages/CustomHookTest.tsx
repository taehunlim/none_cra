import React from 'react';
import { useLocalStorage } from '../Components/organisms/CustomHook/useLocalStorage'

const CustomHookTest: React.FC = () => {

    const [name, setName] = useLocalStorage<string>("name", "LimTae");
    return (
        <div>
           <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export default CustomHookTest;