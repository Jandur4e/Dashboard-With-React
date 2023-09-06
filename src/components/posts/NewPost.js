import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Background from '../sidemenu/Background';
import { axiosCall } from '../login/axiosCall1.js';

const NewPost = ({ setAddPostButton, dataFetch }) => {
    const [post, setPost] = useState([]);
    // const [thisFile, setThisFile] = useState();
    const title = useRef();
    const content = useRef();
    const slika = useRef();
    // const thisImage = useRef();
    const forma = useRef();
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

    // const handleFileChange = (e) => {
    //     if (e.target.files) {
    //         setThisFile(e.target.files[0]);
    //     }
    // };

    const getCourse = () => {
        const url = "https://blogs.alexn.a2hosted.com/api/posts"
        axiosCall.get(url).then((res) => { setPost(res.data) });
    };



    const addedpost = 'https://blogs.alexn.a2hosted.com/api/posts';
    const addPost = async (e) => {
        e.preventDefault();
        // const firstname = title.current.value;
        // const lastname = content.current.value;
        // console.log(slika.current.files);
        const formData = new FormData(forma.current);
        formData.append('file', slika.current.files[0]);
        formData.append('title', title.current.value);
        formData.append('content', content.current.value);
        // return console.log(formData);
        try {
            // const addWithAxios = {
            //     title: firstname, content: lastname,
            // };
            // console.log(addWithAxios);
            axiosCall.post(addedpost, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            setAddPostButton(false);
            dataFetch()
        } catch (error) {
            console.log(error)
        }
        notify();
    }

    useEffect(() => {
        getCourse();
        dataFetch()
    }, [])
    // console.log(thisFile);



    return (
        <div className='my-modal'>
            <div className="modal-box">
                <div className='popup-text'>
                    <div className='box-modal'>
                        <form onSubmit={(e) => addPost(e)} ref={forma}>
                            <label>Post</label>
                            <input ref={title} type='text' />
                            <label>Content</label>
                            <input ref={content} type='text' />
                            <label for="img">Select image:</label>
                            <input type="file" id="img" ref={slika} />
                            {/* <div>{thisFile && `${thisFile.name} - ${thisFile.type}`}</div> */}
                            <div>
                                <button type='submit'
                                    // onClick={(e) => addPost(e)} 
                                    className="button-modal" >Add Post</button>
                            </div>
                        </form>
                        <div>
                            <button className="button-modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPost;