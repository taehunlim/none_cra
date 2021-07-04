import React, { useState } from 'react';
import Modal from '../Components/organisms/Modal/Modal';

const CustomHookTest: React.FC = () => {
    const [modal, setModal] = useState(false);
    return (
        <div onClick={() => setModal(true)}>


            <div
                style={{ height: "2000px" }}
            >
                modal click
        </div>

            {modal ? (
                <Modal open={modal} close={() => setModal(!modal)} />
            ) : (
                ""
            )}

        </div>
    );
};

export default CustomHookTest;