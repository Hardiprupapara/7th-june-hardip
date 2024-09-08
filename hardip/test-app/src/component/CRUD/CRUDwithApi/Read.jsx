import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Read = () => {


    const [getdata, setGetData] = useState([]);

    
    const getuser = () => {
        axios.get('https://65f438d5f54db27bc020fe07.mockapi.io/products/user').then((res) => setGetData(res.data))
    }

    useEffect(() => {
        getuser()
    }, [])

    const handleclick = (item) => {
        localStorage.setItem('id', item.id)
        localStorage.setItem('email', item.email)
        localStorage.setItem('password', item.password)
    }

    const handledelet = (id) => {
        axios.delete(`https://65f438d5f54db27bc020fe07.mockapi.io/products/user/${id}`).then(()=>getuser())
    }
    
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getdata?.map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    <Link to="/Update">
                                        <button onClick={(e) => handleclick(item)}>edit</button>
                                    </Link>
                                    <button onClick={(e) => handledelet(item.id)}>delet</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div >
    );
};

export default Read;