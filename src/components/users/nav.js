import React from 'react'
import { useParams } from 'react-router-dom';

const Nav = () => {
    const { login, user } = useParams();
    return (
        <>
            {login == true ? <img src={user.image} alt='image' /> : null}
        </>
    )
};

export default Nav;