import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "../../css/Dashboard.css";
import { AiFillHeart } from "react-icons/ai";
import { LikedPostContext } from "./LikedContext";
import Header from "../header/header";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState([]);
    const { likedPosts, setLikedPosts } = useContext(LikedPostContext);

    useEffect(() => {
        const fetchdata = 'https://dummyjson.com/posts';
        const dataFetch = async () => {
            try {
                const data = await axios.get(fetchdata);
                data.data.posts.map((post) => { post.favorite = false })
                setPosts(data.data.posts);
            } catch (error) {
                console.log("koj e errorot", error)
                setError({ status: error.response.status })
            }
        };
        dataFetch()
    }, []);



    function likeThis(post) {
        const { id } = post;
        const findID = posts.find((item) => item.id === id);

        if (!post.favorite) {
            post.favorite = true;
            setLikedPosts([...likedPosts, post]);
        } else {
            post.favorite = false;
            const filtered = likedPosts.filter((haveID) => haveID.id !== id)
            setLikedPosts(filtered);
        }
    }

    console.log("likedposts", likedPosts)
    console.log("posts", posts)
    if (!posts) return <h1>Loading..</h1>

    return (
        <div className="display-output">
            <Header />
            <h1>Posts</h1>
            <div className="wrapper">
                {posts.map((item) => (
                    <div>
                        <div className="item" key={item.id}>
                            <p><b>item No:{item.id}</b></p>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                            <button className={item.favorite === true ? "like" : "dislike"} key={item.id} onClick={() => likeThis(item)} >
                                <AiFillHeart />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div >

    )
}

export default Posts;