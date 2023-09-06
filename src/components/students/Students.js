import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Header from '../header/header';
import { ToastContainer } from 'react-toastify';
import NewStudent from './NewStudent';
import Background from '../sidemenu/Background';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudent, setFilteredStudent] = useState([]);
    const [addStudentButton, setAddStudentButton] = useState(false);
    const [course, setCourse] = useState();
    const checkedCourse = useRef();

    const getCourse = () => {
        const url = "https://cms.alexn.a2hosted.com/api/routes/courses/all"
        axios.get(url).then((res) => { setCourse(res.data) });
    };


    const getData = async () => {
        const url = "https://cms.alexn.a2hosted.com/api/routes/students/all"
        try {
            const data = await axios.get(url);
            setStudents(data.data);
        } catch (error) {
            console.log(error)
        }
        getData();
    };


    useEffect(() => {
        getData();
        getCourse();
    }, [])

    const addStudent = () => {
        setAddStudentButton(true)
    }

    const filterStudent = () => {
        const selectedCourse = checkedCourse.current.value;
        if (selectedCourse === "all") {
            setFilteredStudent(students);
        } else {
            const filtered = students.filter((student) => { return student.courseName === selectedCourse });
            setFilteredStudent(filtered)
        }
    }

    if (!course) return null;
    if (!students) return null;
    if (!filteredStudent) return null;


    return (
        <div className="display-output">
            <Header />
            <h1>Students</h1>
            <div>
                <button onClick={() => addStudent()} className="button-modal add-Button">Add Student</button>
            </div>
            <label for="checkedCourse">Select by Course</label>
            <select id='checkedCourse' onChange={filterStudent} ref={checkedCourse}>Sort by Course
                <option value="all">All</option>
                {course.map((cou) => <option value={cou.name} >{cou.name}</option>)}
            </select>
            <div className='wrapper'>
                {addStudentButton && <NewStudent setAddStudentButton={setAddStudentButton} getData={getData} />}
                {filteredStudent.length !== 0 ? filteredStudent.map((filter) => {
                    return (<div className='boxs blogs' key={filter.id}>
                        <p>{filter.id}</p>
                        <p>First Name: {filter.firstName}</p>
                        <p>Last Name: {filter.lastName}</p>
                        <p>City: {filter.city}</p>
                        <p>Course Name: {filter.courseName}</p>
                    </div>)
                }) :
                    students.map((student) => {
                        return (<div className='boxs blogs' key={student.id}>
                            <p>{student.id}</p>
                            <p>First Name: {student.firstName}</p>
                            <p>Last Name: {student.lastName}</p>
                            <p>City: {student.city}</p>
                            <p>Course Name: {student.courseName}</p>
                        </div>)
                    })
                }
                <ToastContainer />
            </div>
        </div>)
}

export default Students;