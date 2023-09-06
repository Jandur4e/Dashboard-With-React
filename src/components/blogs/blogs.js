import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogModal from './BlogModal';
import NewBlog from './NewBlog';
import EditBlog from './EditBlog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../header/header';

const Blogs = () => {
    const [blogs, setBlogs] = useState();
    const [openPopUp, setOpenPopUp] = useState(false);
    const [editPopUp, setEditPopUp] = useState(false);
    const [addBlogButton, setAddBlogButton] = useState(false);
    const [title, setTitle] = useState();
    const [editBlog, setEditBlog] = useState();
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


    const getData = async () => {
        const url = "https://cms.alexn.a2hosted.com/api/routes/blogs/all"
        try {
            const data = await axios(url);
            setBlogs(data.data);
        } catch (error) {
            console.log(error)
        }
        getData();
    };

    useEffect(() => {
        getData();
    }, [])

    const openModal = (blog) => {
        setOpenPopUp(true);
        setTitle(blog);
    }

    const editThisBlog = (blog) => {
        setEditPopUp(true);
        setEditBlog(blog);
    }

    const deleteBlog = async (id) => {
        const url = `https://cms.alexn.a2hosted.com/api/routes/blogs/${id}`
        try {
            const deleteAxios = axios.delete(url);
            getData();
            deleteNotify();
        } catch (error) {
            console.log(error)
        }
    }


    const addBlog = () => {
        setAddBlogButton(true)
        console.log("blog")
    }

    if (!blogs) return null;


    return (
        <div className="display-output">
            <Header />
            <h1>Blogs</h1>
            <div>
                <button onClick={() => addBlog()} className="button-modal add-Button">Add Blog</button>
            </div>
            <div className='wrapper'>
                {openPopUp && title && <BlogModal setOpenPopUp={setOpenPopUp} someTitle={title} />}
                {addBlogButton && <NewBlog setAddBlogButton={setAddBlogButton} getData={getData} />}
                {editBlog && editPopUp && <EditBlog setEditPopUp={setEditPopUp} someEditBlog={editBlog} getData={getData} />}
                {blogs.map((blog) => {
                    return (
                        <div className='boxs blogs' key={blog.id}>
                            <p>{blog.id}</p>
                            <p>Title: {blog.title}</p>
                            <p>Description: {blog.description}</p>
                            <div>
                                <button onClick={() => openModal(blog)} className="button-modal" >View Blog</button>
                            </div>
                            <div>
                                <button onClick={() => deleteBlog(blog.id)} className="button-modal" >Delete Blog</button>
                            </div>
                            <div>
                                <button onClick={() => editThisBlog(blog)} className="button-modal" >Edit Blog</button>
                            </div>
                            <ToastContainer />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blogs;