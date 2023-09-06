import axios from 'axios';
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewBlog = ({ setAddBlogButton, getData }) => {
    const title = useRef();
    const description = useRef();
    const notify = () => toast.success('Successfully Added!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    const addBlog = async () => {
        const url = "https://cms.alexn.a2hosted.com/api/routes/blogs";
        const newTitle = title.current.value;
        const newDescription = description.current.value;
        try {
            const addWithAxios = await axios.post(url, { title: newTitle, description: newDescription },);
            setAddBlogButton(false);
            getData()
        } catch (error) {
            console.log(error)
        }
        notify();
    }
    return (
        <div className='my-modal'>
            <div className="modal-box">
                <div className='popup-text'>
                    <div className='box-modal'>
                        <label>Title</label>
                        <input ref={title} type='text' />
                        <label>Description</label>
                        <input ref={description} type='text' />
                        <div>
                            <button onClick={() => addBlog()} className="button-modal" >Add Blog</button>
                        </div>
                        <div>
                            <button onClick={() => setAddBlogButton(false)} className="button-modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewBlog