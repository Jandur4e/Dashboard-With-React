import React from 'react'
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "../../css/Dashboard.css";
import { AiFillHeart } from "react-icons/ai";
import { LikedPostContext } from "./LikedContext";
import Header from "../header/header";
import { axiosCall } from '../login/axiosCall1.js';
import NewPost from './NewPost';
import { toast } from 'react-toastify';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState([]);
    const [file, setFile] = useState();
    const [addPostButton, setAddPostButton] = useState(false);
    // const { likedPosts, setLikedPosts } = useContext(LikedPostContext);
    const token = JSON.parse(localStorage.getItem("token"));
    const deleteNotify = () => toast.error('Successfully deleted!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const dataFetch = async () => {
        if (token) {
            try {
                const fetchdata = 'https://blogs.alexn.a2hosted.com/api/posts';
                const data = await axiosCall.get(fetchdata);
                setPosts(data.data);
            } catch (error) {
                console.log("koj e errorot", error)
                setError({ status: error.response.status })
            }
        }
    }

    const deletePost = async (id) => {
        const url = `https://blogs.alexn.a2hosted.com/api/posts/${id}`
        try {
            axiosCall.delete(url);
            dataFetch();
            deleteNotify();
        } catch (error) {
            console.log(error)
        }
    }

    const getFile = (id) => {
        const find = posts.filter((files) => { return files.file == id })
        console.log(find)
        const url = `https://blogs.alexn.a2hosted.com/api/posts/${find}`
        return setFile(url);
    }

    useEffect(() => {
        dataFetch()
        getFile();
    }, []);

    const addPost = () => {
        setAddPostButton(true)
    }


    console.log("posts", posts)

    if (!posts) return <h1>Loading..</h1>

    return (

        <div className="display-output">
            <Header />
            <h1>Posts</h1>
            <button onClick={() => addPost()} className="button-modal add-Button">Add Post</button>
            <div className="wrapper">
                {addPostButton && <NewPost setAddPostButton={setAddPostButton} dataFetch={dataFetch} />}
                {posts.map((item) => (
                    <div className='modal-box'>
                        <div className="post" key={item.id}>
                            <p><b>item No:{item.id}</b></p>
                            <h3><b>Title:</b> {item.title}</h3>
                            <p><b>Content:</b> {item.content}</p>
                            <p><p>Author:</p> {item.Author.firstname} {item.Author.lastname}</p>
                            <div>
                                <img className='some-product-image' src={`https://blogs.alexn.a2hosted.com/${item.file}`} />
                            </div>
                            <button onClick={() => deletePost(item.id)} className="button-modal" >Delete Post</button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Posts;