import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const UserList = () => {


    const [userdata, setUserData] = useState([]);
    const [filteruser, setFilterUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {

        const storedUsers = localStorage.getItem('users');

        if (storedUsers) {
            setUserData(JSON.parse(storedUsers));
            setFilterUser(JSON.parse(storedUsers));
        } else {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    setUserData(res.data);
                    setFilterUser(res.data);
                    localStorage.setItem('users', JSON.stringify(res.data));
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }

    }, []);


    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            const updatedUsers = userdata.filter(user => user.id !== id);
            setUserData(updatedUsers);
            setFilterUser(updatedUsers);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            toast.success("User deleted successfully");
        }
    };


    useEffect(() => {
        const delay = setTimeout(() => {
            const filterData = userdata.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilterUser(filterData);
        }, 300);

        return () => clearTimeout(delay);
    }, [searchTerm, userdata]);


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };


    return (
        <div className="my-5 user-shdow">
            <ToastContainer position='top-center' autoClose={2000} />
            <h2 className='text-center overflow-hidden'>Users List</h2>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <div className='col-md-4'>
                    <input
                        type="text"
                        className='form-control'
                        onChange={handleSearch}
                        placeholder='Search user...'
                    />
                </div>
                <div className='overflow-hidden'>
                    <Link to='/AddUser'>
                        <button className='btn btn-success custom-add-button'>
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </Link>
                </div>
            </div>
            <div style={{ width: "100%", }}>
                {filteruser.length === 0 ? (
                    <p className="text-center">No users available</p>
                ) : (
                    <table class="table table-bordered table-hover" >
                        <thead className="table-dark ">
                            <tr>
                                <th scope="col">SrNo</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteruser && filteruser.map((item, index) =>
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <Link to={`/AddUser`} state={{ user: item }}>
                                                <button className='btn btn-secondary m-2'>
                                                    <i class="bi bi-pencil-square"></i>
                                                </button>
                                            </Link>
                                            <button className='btn btn-danger' onClick={() => handleDelete(item.id)}><i class="bi bi-trash3"></i></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>)}
            </div>
        </div>

    );
};

export default UserList;
