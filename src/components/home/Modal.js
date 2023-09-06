import React, { useState } from 'react';

function Modal() {
    const [openPopUp, setOpenPopUp] = useState(true);

    return (
        <div className='my-modal'>
            <button onClick={() => setOpenPopUp(false)} disabled={openPopUp === false}>
                Show Modal
            </button>
            {openPopUp || (
                <div className='popup-text'>
                    <div>
                        Hello my friend, this is my modal.
                    </div>
                    <button onClick={() => setOpenPopUp(true)}>
                        Close Modal
                    </button>
                </div>
            )}
        </div>
    );
}


export default Modal;