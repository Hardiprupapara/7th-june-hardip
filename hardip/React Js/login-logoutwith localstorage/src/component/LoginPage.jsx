import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
    const [name1, setName] = useState('');
    const [email1, setEmail] = useState('');
    const [password1, setPassword] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault()

        const getIteme = localStorage.getItem("aballdata")

        var userdata = JSON.parse(getIteme)
        // console.log("🚀 ~ handlesubmit ~ kkk:", userdata)

        const getItem = localStorage.getItem(JSON.parse(getIteme))
        // console.log("🚀 ~ handlesubmit ~ getItem:", getItem)


        // console.log(" getItem",userdata.name);
        // console.log("🚀 ~ handlesubmit ~ name:", name1)

        // if (getIteme && getIteme.length) {
        //     const userlogin = userdata.filter((el, k) => {
        //         // return(el.email==email1 && el.password==password1)
        //         if (el.email == email1 && el.password == password1) {
        //             console.log("userlogin");

        //         } else {
        //             console.log("arror dfhhrw");
        //         }
        //         return 0;
        //     })
        //     console.log(userlogin);
        //     console.log("userlogin");
        // } else {

        //     console.log("arror");
        // }



        const userlogin = userdata.filter(el =>el.name===name1 &&el.email === email1 && el.password === password1);

        if (userlogin.length) {
            console.log("userlogin");
            toast.success('Successfully toasted!')

        } else {
            console.log("error");
            toast.error("This didn't work.")

        }




    }
    return (
        <div>
            <Toaster />
            <div className="container">
                <form action="" onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' onChange={(e) => { setName(e.target.value) }} value={name1} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' onChange={(e) => { setEmail(e.target.value) }} value={email1} />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password" name='password' onChange={(e) => { setPassword(e.target.value) }} value={password1} />
                    </div>
                    <button type='submit' >sign up</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;