import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const history = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("click");
        axios.post('https://646b73cd7d3c1cae4ce3d323.mockapi.io/Crud_WebData',
            {
                name: name,
                email: email,
                headers: {
                    authorization: "your token comes here",
                },
            }).then(()=>{
                history('/Read');
            });
    };
    return (
        <>
            <div className="container">
                <div className="box d-flex justify-content-between mt-2">
                <h2>Create</h2>
                <Link to="/read">
                <button className='btn btn-dark'>Show Data</button>
                </Link>
                </div>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Create;
