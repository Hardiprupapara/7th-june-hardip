import React, { useState } from 'react';

const FormWithValidation = () => {

    const [formdata, setFormData] = useState({
        fname: '',
        email: '',
        phone: '',
    })

    const [errors, setErrors] = useState({
        fname: '',
        email: '',
        phone: '',
    });


    const handlechange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formdata,
            [name]: value
        });

        if (name === 'fname') {
            setErrors({
                ...errors,
                fname: value.length < 3 ? 'First name must be at least 3 characters long' : ''
            })
        } else if (name === 'email') {
            setErrors({
                ...errors,
                email: value.indexOf('@') === -1 ? 'Email is not valid' : ''
            })
        } else if (name === 'phone') {
            setErrors({
                ...errors,
                phone: value.length < 10 ? 'Phone number must be at least 10 characters long' : ''
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formdata).every(value=>value.trim()!=='') &&Object.values(errors).every(error => error === '')) {
            console.log('Form submitted successfully:', formdata);
        } else {
            console.log('Form has errors. Cannot submit.');
        }
    };


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='fname' placeholder='name' value={formdata.fname} onChange={handlechange} />
                {errors.fname && <span>{errors.fname}</span>}
                <input type="text" name='email' placeholder='email' value={formdata.email} onChange={handlechange} />
                {errors.email && <span>{errors.email}</span>}
                <input type="text" name='phone' placeholder='phone' value={formdata.phone} onChange={handlechange} />
                {errors.phone && <span>{errors.phone}</span>}
                <button>submit</button>
            </form>
        </div>
    );
};

export default FormWithValidation;