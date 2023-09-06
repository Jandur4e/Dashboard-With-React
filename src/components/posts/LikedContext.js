import { createContext, useState } from "react";
export const LikedPostContext = createContext();

function LikedPostChange({ children }) {
    const [likedPosts, setLikedPosts] = useState([]);
    const countLikeSend = { likedPosts, setLikedPosts };


    return (
        <LikedPostContext.Provider value={countLikeSend}>{children}</LikedPostContext.Provider>
    )
}

export default LikedPostChange;