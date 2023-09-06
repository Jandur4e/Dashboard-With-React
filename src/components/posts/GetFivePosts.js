import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../header/header';
import { AiFillHeart } from 'react-icons/ai';

const GetFivePosts = () => {
    const [post, setPost] = useState([]);
    // const [reaction, setReaction] = useState();
    const dataFetch = async () => {
        const url = 'https://cms.alexn.a2hosted.com/api/routes/newPosts/all';
        try {
            const data = await axios.get(url);
            setPost(data.data);
        } catch (error) {
            console.log("koj e errorot", error)
        }
    };
    useEffect(() => {
        dataFetch();
    }, []);

    const likeThis = async (post) => {
        const { id } = post;
        const url = `https://cms.alexn.a2hosted.com/api/routes/newPosts/${id}`;
        try {
            const addWithAxios = await axios.put(url, { reactions: post.reactions + 1 },);
            dataFetch();
        } catch (error) {
            console.log(error)
        }
    };
    const dislikeThis = async (post) => {
        const { id } = post;
        const url = `https://cms.alexn.a2hosted.com/api/routes/newPosts/${id}`;
        try {
            const addWithAxios = await axios.put(url, { reactions: post.reactions - 1 },);
            dataFetch();
        } catch (error) {
            console.log(error)
        }
    };



    if (!post) return <h1>Loading..</h1>
    // if (!reaction) return <h1>Loading..</h1>

    return (
        <div className="display-output">
            <Header />
            <h1>Post</h1>
            <div className="wrapper">
                {post.map((item) => (
                    <div>
                        <div className="item" key={item.id}>
                            <p><b>item No:{item.id}</b></p>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                            <button key={item.id} className='like' onClick={() => likeThis(item)}>
                                <AiFillHeart />
                            </button>
                            <button key={item.id} className='dislike' onClick={() => dislikeThis(item)}>
                                <AiFillHeart />
                            </button>
                            <p>{item.reactions}</p>
                            {/* <p>{reaction}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default GetFivePosts;