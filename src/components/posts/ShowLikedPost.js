import React, { useContext } from 'react'
import { LikedPostContext } from './LikedContext';

const ShowLikedPost = () => {
    const { likedPosts, setLikedPosts } = useContext(LikedPostContext);

    function removePost(post) {
        const { id } = post;
        post.favorite = false;
        const filtered = likedPosts.filter((haveID) => haveID.id !== id)
        setLikedPosts(filtered);
    }

    return (
        <div className="display-output">
            <h1>Liked Posts</h1>
            <div className="wrapper">
                {likedPosts.map((post) => <div>
                    <div className="post" key={post.id}>
                        <p><b>post No:{post.id}</b></p>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                    <button onClick={() => removePost(post)}>Remove</button>
                </div>
                )}
            </div>
        </div>
    )
}

export default ShowLikedPost