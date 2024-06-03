import React, { useState } from "react";
import * as Yup from 'yup';
import axios from "axios";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Layout/AuthContext";

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});


    const navigate = useNavigate();
    const { login } = useAuth();

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = { email, password };

        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({});
            const res = await axios.post('https://reqres.in/api/login', formData);
            login(res.data.token);
            navigate('/');
        } catch (err) {
            if (err.name === 'ValidationError') {
                const newErrors = {};
                err.inner.forEach((error) => {
                    newErrors[error.path] = error.message;
                });
                setErrors(newErrors);
            } else {
                console.error(err);
                alert('Login failed!');
            }
        }
    };

    return (
        <div>
            <MDBContainer fluid>
                <MDBRow className="d-flex justify-content-center align-items-center h-100">
                    <MDBCol col="12">
                        <MDBCard
                            className="bg-white my-5 mx-auto"
                            style={{ borderRadius: "1rem", maxWidth: "500px" }}
                        >
                            <Link to='/' className="d-flex justify-content-end p-3"><i className="fa-solid fa-house"></i></Link>

                            <form onSubmit={handleLogin}>
                                <MDBCardBody className="p-md-4 w-100 d-flex flex-column">
                                    <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                    <p className="text-black-50 mb-3">
                                        Please enter your email and password!
                                    </p>
                                    <div className="text-start">
                                        <label htmlFor="email">Email: </label>
                                        <input
                                            className="form-control my-2"
                                            type="email"
                                            name="email"
                                            value={email}
                                            placeholder="Enter an email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {errors.email && <p className='error text-danger'>{errors.email}</p>}
                                    </div>
                                    <div className="text-start">
                                        <label htmlFor="password">Password: </label>
                                        <input
                                            className="form-control my-2"
                                            type="password"
                                            name="password"
                                            size="lg"
                                            value={password}
                                            placeholder="Enter a password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {errors.password && <p className='error text-danger'>{errors.password}</p>}
                                    </div>
                                    <button className="btn btn-primary mt-4" type="submit">Sign in</button>
                                    <p className="pt-5 text-center">- Or Sign in With -</p>
                                    <div className="pt-3 d-flex justify-content-around mb-5">
                                        <div>
                                            <i className="bi bi-google fs-2 google"></i>
                                        </div>
                                        <div>
                                            <i className="bi bi-facebook fs-2 fb"></i>
                                        </div>
                                        <div>
                                            <i className="bi bi-twitter fs-2 twit"></i>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-center">email: eve.holt@reqres.in</p>
                                    <p className="mb-0 text-center">Password: cityslicka</p>
                                </MDBCardBody>
                            </form>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Login;
