import React, { useState } from 'react';

const SignUppage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [allentry, setAllentry] = useState([]);


    const handlesubmit = (e) => {
        e.preventDefault()
        let alldata=JSON.parse(localStorage.getItem('aballdata')||"[]")
        const  data={
            name:name,
            email:email,
            password:password
        }
        alldata.push(data)

    //    localStorage.setItem("name",data.name)
    //    localStorage.setItem("email",data.email)
    //    localStorage.setItem("password",data.password)
       localStorage.setItem("aballdata",JSON.stringify(alldata))


        // localStorage.setItem("ablldata", JSON.stringify(alldata));




    }
    return (
        <>
            <div className="container">
                <form action="" onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' onChange={(e) => {setName(e.target.value)}} value={name} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' onChange={(e) => {setEmail(e.target.value)}} value={email} />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password" name='password' onChange={(e) => {setPassword(e.target.value)}} value={password} />
                    </div>
                    <button type='submit' >sign up</button>
                </form>
            </div>
        </>
    );
};

export default SignUppage;