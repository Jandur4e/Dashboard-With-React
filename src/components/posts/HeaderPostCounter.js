import React, { useContext } from 'react'
import { LikedPostContext } from '../posts/LikedContext'
import { Link } from 'react-router-dom'
import { BsFillFilePostFill } from 'react-icons/bs';
import "../../css/Dashboard.css"
import { ThemeContext } from '../sidemenu/themeChange';


const HeaderPostCounter = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { likedPosts, setLikedPosts } = useContext(LikedPostContext);

    return (
        <div><Link to={"../showlikedpost"}>
            <div className={theme === "dark" ? 'number-of-posts light-color' : "number-of-posts"}>
                < BsFillFilePostFill className="post-icon-count" />
                <span className='count-posts'>{likedPosts.length}</span>
            </div></Link ></div >
    )
}



export default HeaderPostCounter