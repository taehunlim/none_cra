import React from 'react';
import { useConfirm } from '../Components/organisms/CustomHook/useConfirm'

const CustomHookTest: React.FC = () => {

    const deleteWorld = () => console.log("Deleting the word")
    const abort = () => console.log("Aborted")
    const confirmDelete = () => useConfirm("Are you sure", deleteWorld, abort)

    return (
        <div>

            <button onClick={confirmDelete}>Delete the World</button>

        </div>
    );
};

export default CustomHookTest;