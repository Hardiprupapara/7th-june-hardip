import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setID] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');

    useEffect(() => {
        setID(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, [])

    const navigate = useNavigate();

    const handleupdate = (e) => {
        e.preventDefault()
        axios.put(`https://646b73cd7d3c1cae4ce3d323.mockapi.io/Crud_WebData/${id}`,
            {
                name: name,
                email: email,
                headers: {
                    authorization: "your token comes here",
                },
            })
            .then(() => {
                navigate('/read')
            })

    }
    return (
        <>
            <div className="container">
                <h2>Unpdate</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary"
                        onClick={handleupdate}
                    >Update</button>
                    <Link to='/read'>
                        <button type="submit" className="btn btn-info mx-2" >Back</button>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Update
