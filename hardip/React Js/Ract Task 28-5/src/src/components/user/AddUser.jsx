import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup'

const AddUser = () => {
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.user) {
            setUser(location.state.user);
            setIsEditing(true);
        }
    }, [location.state]);

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone number is required')
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await validationSchema.validate(user, { abortEarly: false });
            setErrors({});
        } catch (error) {
            const newErrors = {};
            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (user.id) {
            const index = users.findIndex(u => u.id === user.id);
            if (index !== -1) {
                users[index] = user;
                toast.success("User updated successfully", {
                    onClose: () => {
                        setShowToast(false);
                        navigate('/');
                    }
                });
                setShowToast(true);
            }
        } else {
            user.id = users.length ? users[users.length - 1].id + 1 : 1;
            users.push(user);
            toast.success("User added successfully", {
                onClose: () => {
                    setShowToast(false);
                    navigate('/');
                }
            });
            setShowToast(true);
        }

        localStorage.setItem('users', JSON.stringify(users));
    };

    return (
        <div className="container mt-5">
            <ToastContainer
                position="top-center"
                autoClose={500}
                closeOnClick
                rtl={false}
                onClose={() => navigate('/')}
            />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="text-center">{showToast ? 'Processing...' : (isEditing ? 'Edit' : 'Add')} User</h2>
                        </div>
                        <div className="card-body text-start">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder='Enter a name'
                                        value={user.name}
                                        onChange={handleChange}

                                    />
                                    {errors.name && <p className='error'>{errors.name}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder='Enter a email address'
                                        value={user.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className='error'>{errors.email}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        placeholder='Enter phone number'
                                        value={user.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && <p className='error'>{errors.phone}</p>}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">{showToast ? 'Processing...' : (isEditing ? 'Update' : 'Add')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
