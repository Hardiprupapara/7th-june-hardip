import React, { useRef, useState } from 'react';

const UseRefHook = () => {
    
    const[name,setName]=useState('')
    const refelement = useRef('')

    const handleClick=()=>{
        refelement.current.value= name
        refelement.current.focus();
        refelement.current.style.color="red";
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <input type="text" ref={refelement} value={name} onChange={(e)=>setName(e.target.value)} name="" id="" />
            <button onClick={handleClick}>submit</button>
        </div>
    );
};

export default UseRefHook;