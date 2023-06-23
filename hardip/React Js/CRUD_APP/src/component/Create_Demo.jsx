// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const Create_Demo = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path='/' element={<Cre_Demo/>}></Route>
//                     <Route path='/read' element={<Read_Demo/>}></Route>
//                     <Route path='/Edit' element={<Edit_Demo/>}></Route>
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// };

// export default Create_Demo;


import React, { useState } from 'react';

const Create_Demo = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>create</h3>
                            <form action="">

                                <div className="">
                                    <label htmlFor="">name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} name="" id="" />
                                </div>

                                <div className="">
                                    <label htmlFor="">email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} name="" id="" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Create_Demo;