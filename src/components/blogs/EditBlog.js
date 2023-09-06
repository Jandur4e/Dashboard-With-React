import axios from 'axios';
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBlog = ({ setEditPopUp, someEditBlog, getData }) => {
    const { id } = someEditBlog;
    const title = useRef();
    const description = useRef();
    const notify = () => toast.success('Successfully edited!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const editedBlog = async () => {
        notify();
        const url = `https://cms.alexn.a2hosted.com/api/routes/blogs/${id}`;
        const newTitle = title.current.value;
        const newDescription = description.current.value;
        try {
            const addWithAxios = await axios.put(url, { title: newTitle, description: newDescription },);
            setEditPopUp(false);
            getData()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='my-modal'>
            <div className="modal-box">
                <div className='popup-text'>
                    <div className='box-modal'>
                        <label>Edit Title</label>
                        <input ref={title} type='text' placeholder={someEditBlog.title} />
                        <label>Edit Description</label>
                        <input ref={description} type='text' placeholder={someEditBlog.description} />
                        <div>
                            <button onClick={() => editedBlog()} className="button-modal" >Edit Blog</button>
                        </div>
                        <div>
                            <button onClick={() => setEditPopUp(false)} className="button-modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBlog