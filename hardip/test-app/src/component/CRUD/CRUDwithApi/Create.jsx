import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router'

const Create = () => {

    const [alldata, setData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleselctstate = (data) => {
        setData({ ...data })
        console.log(data)
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        console.log("click")
        axios.post('https://65f438d5f54db27bc020fe07.mockapi.io/products/user', {
            email: alldata.email,
            password: alldata.password,
            headers: {
                authorization: "your token comes here",
            },
        }).then(() => navigate('/Read'))
        setData('')
    }


    return (
        <div className='text-center'>
            <h2>Create</h2>
            <form action="#" onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="#">email</label>
                    <div>
                        <input type="text"
                            onChange={(e) => {
                                const data = alldata
                                data.email = e.target.value
                                handleselctstate(data)
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="#">password</label>
                    <div>
                        <input type="text"
                            onChange={(e) => {
                                const data = alldata
                                data.password = e.target.value
                                handleselctstate(data)
                            }}
                        />
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary my-1'>submit</button>
                </div>
            </form>
        </div>
    )
}

export default Create
