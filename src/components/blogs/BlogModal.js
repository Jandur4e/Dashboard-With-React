import React from 'react'

const BlogModal = ({ someTitle, setOpenPopUp }) => {
    return (
        <div className='my-modal'>
            <div className="modal-box">
                <div className='popup-text'>
                    <div>
                        <p>{someTitle.title}</p>
                        <p>{someTitle.description}</p>
                        <div className='box-modal'>
                            <button onClick={() => setOpenPopUp(false)} className="button-modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogModal