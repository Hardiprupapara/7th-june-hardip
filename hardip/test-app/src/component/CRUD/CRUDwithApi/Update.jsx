import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Update = () => {

   const[id,setId]=useState('')
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')

    const navigate = useNavigate();

    

    useEffect(() => {
        setId(localStorage.getItem('id')) 
        setEmail(localStorage.getItem('email')) 
        setPassword( localStorage.getItem('password'))
    }, [])

    const handlesubmit = (e) => {
        e.preventDefault();
        axios.put(`https://65f438d5f54db27bc020fe07.mockapi.io/products/user/${id}`, {
            email: email,
            password: password,
            headers: {
                authorization: "your token comes here",
            },
        }).then(() => navigate('/Read'))
    }




    return (
        <div className='text-center'>
            <form action="#" onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="#">email</label>
                    <div>
                        <input type="text"
                            onChange={(e) => {setEmail(e.target.value)}}
                            value={email}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="#">password</label>
                    <div>
                        <input type="text"
                            onChange={(e) => {setPassword(e.target.value)}}
                            value={password}
                        />
                    </div>
                </div>
                <button className='btn btn-primary my-1'>submit</button>
            </form>
        </div>
    );
};

export default Update;