import React, { useState } from 'react';
import * as Yup from 'yup'

const FormWithYup = () => {

    const [formdata, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        address: '',
        password: '',
        confirmpassword: '',
    })

    const [error, setError] = useState('')

    const handelchange = (e) => {
        const { name, value } = e.target;
        setFormData((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            }
        })
    }

    const validatSchema = Yup.object({
        fname: Yup.string().required('First name is required'),
        lname: Yup.string().required('lname is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.number().typeError('Phone number is required').required('Phone number is required'),
        age: Yup.number().typeError('Age is required').required('Age is required'),
        gender: Yup.string().required('Gender is required'),
        address: Yup.string().required('Address is required'),
        password: Yup.string().required('Password is required'),
        confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('confirm password is required'),
    })

    const handelsubmit = async (e) => {
        e.preventDefault();
        try {
            await validatSchema.validate(formdata, { abortEarly: false })
            console.log('formdata submit successfully', formdata)
        } catch (error) {
            const newerror = {}
            error.inner.forEach((err) => {
                newerror[err.path] = err.message;
            })
            setError(newerror)
            console.log('formdata submit failed', error.inner)

        }
    }

    console.log(error)


    return (
        <div>
            <form action="#" onSubmit={handelsubmit}>
                <div>
                    <label htmlFor="#">fname</label>
                    <input
                        type="text"
                        name="fname"
                        value={formdata.fname}
                        onChange={handelchange}
                        id="" />
                    {error.fname && <p className='error'>{error.fname}</p>}

                </div>
                <div>
                    <label htmlFor="#">lname</label>
                    <input
                        type="text"
                        name="lname"
                        value={formdata.lname}
                        onChange={handelchange}
                        id="" />
                    {error.lname && <p className='error'>{error.lname}</p>}

                </div>
                <div>
                    <label htmlFor="#">email</label>
                    <input
                        type="email"
                        name="email"
                        value={formdata.email}
                        onChange={handelchange}
                        id="" />
                    {error.email && <p className='error'>{error.email}</p>}
                </div>
                <div>
                    <label htmlFor="#">phone</label>
                    <input
                        type="number"
                        name="phone"
                        value={formdata.phone}
                        onChange={handelchange}
                        id="" />
                    {error.phone && <p className='error'>{error.phone}</p>}
                </div>
                <div>
                    <label htmlFor="#">age</label>
                    <input
                        type="number"
                        name="age"
                        value={formdata.age}
                        onChange={handelchange}
                        id="" />
                    {error.age && <p className='error'>{error.age}</p>}
                </div>
                <div>
                    <label htmlFor="#">gender</label>
                    <select name="gender" id="" onChange={handelchange}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                    {error.gender && <p className='error'>{error.gender}</p>}
                </div>
                <div>
                    <label htmlFor="#">address</label>
                    <input
                        type="text"
                        name="address"
                        value={formdata.address}
                        onChange={handelchange}
                        id="" />
                    {error.address && <p className='error'>{error.address}</p>}
                </div>
                <div>
                    <label htmlFor="#">password</label>
                    <input
                        type="password"
                        name="password"
                        value={formdata.password}
                        onChange={handelchange}
                        id="" />
                    {error.password && <p className='error'>{error.password}</p>}
                </div>
                <div>
                    <label htmlFor="#">confirm password</label>
                    <input
                        type="password"
                        name="confirmpassword"
                        value={formdata.confirmpassword}
                        onChange={handelchange}
                        id="" />
                    {error.confirmpassword && <p className='error'>{error.confirmpassword}</p>}
                </div>
                <div>
                    
                    <button>submit</button>
                </div>
            </form>
        </div>
    );
};

export default FormWithYup;