import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Background from '../sidemenu/Background';

const NewStudent = ({ setAddStudentButton, getData }) => {
    const [course, setCourse] = useState([]);
    const fname = useRef();
    const lname = useRef();
    const inputCity = useRef();
    const checkedCourse = useRef();
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


    const getCourse = () => {
        const url = "https://cms.alexn.a2hosted.com/api/routes/courses/all"
        axios.get(url).then((res) => { setCourse(res.data) });
    };


    const addedstudent = 'https://cms.alexn.a2hosted.com/api/routes/students';
    const addStudent = async () => {
        const firstname = fname.current.value;
        const lastname = lname.current.value;
        const inputThisCity = inputCity.current.value;
        const checkCourse = checkedCourse.current.value;
        try {
            const addWithAxios = { firstName: firstname, lastName: lastname, city: inputThisCity, courseName: checkCourse };
            console.log(addWithAxios);
            axios.post(addedstudent, addWithAxios,);
            setAddStudentButton(false);
            getData()
        } catch (error) {
            console.log(error)
        }
        notify();
    }

    useEffect(() => {
        getCourse();
        getData()
    }, [])



    return (
        <div className='my-modal'>
            <div className="modal-box">
                <div className='popup-text'>
                    <div className='box-modal'>
                        <label>First Name</label>
                        <input ref={fname} type='text' />
                        <label>Last Name</label>
                        <input ref={lname} type='text' />
                        <label>City</label>
                        <input ref={inputCity} type='text' />
                        <select ref={checkedCourse} defaultValue="all">
                            {course.map((cou) => <option value={cou.name} >{cou.name}</option>)}
                        </select>
                        <div>
                            <button onClick={addStudent} className="button-modal" >Add Student</button>
                        </div>
                        <div>
                            <button onClick={() => setAddStudentButton(false)} className="button-modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewStudent;