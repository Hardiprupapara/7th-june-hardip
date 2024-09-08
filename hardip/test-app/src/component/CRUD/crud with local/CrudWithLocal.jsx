// import React, { useEffect, useState } from 'react';

// const ValidateForm = () => {

//     const [id, setId] = useState(Date.now());
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [readdata, setReadData] = useState([]);
//     const [edititem, setEditItem] = useState(null);


//     useEffect(()=>{
//         const data = JSON.parse(localStorage.getItem('user'));
//         setReadData(data);
//     },[])

//     const handelsubmit = (e) => {
//         e.preventDefault();
//         const formdata = {
//             id: id,
//             name: name,
//             email: email
//         }
//         const existingUsers = JSON.parse(localStorage.getItem('user')) || [];
//         if (edititem) {
//             const updateuser = existingUsers.map((item) => {
//                 if (item.name === edititem.name) {
//                     return { ...item, name: formdata.name, email: formdata.email }
//                 } else {
//                     return item;
//                 }
//             });
//             setReadData(updateuser);
//             setName('');
//             setEmail('');
//         } else {
//             existingUsers.push(formdata);
//             localStorage.setItem('user', JSON.stringify(existingUsers));
//             setReadData(existingUsers);
//             setName('');
//             setEmail('');
//         }
//     }

//     const handeledit = (item) => {
//         setName(item.name);
//         setEmail(item.email);
//         setEditItem(item);
//     }

//     const handeldelet = (item) => {
//         const deletUser = readdata.filter(user => user.name !== item.name);
//         setReadData(deletUser);
//     }

//     return (
//         <div>
//             <form action="#" onSubmit={handelsubmit}>
//                 <div>
//                     <label htmlFor="#">name</label>
//                     <input
//                         type="text"
//                         placeholder='name'
//                         name='name'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="#">email</label>
//                     <input
//                         type="text"
//                         placeholder='email'
//                         name='email'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <button>{edititem?'Update':'Add'}</button>
//             </form>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>name</th>
//                         <th>email</th>
//                         <th>action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                          readdata?.map((item) =>
//                             <tr key={item.id}>
//                                 <td>{item.id}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.email}</td>
//                                 <td>
//                                     <button onClick={(e) => handeledit(item)}>edit</button>
//                                     <button onClick={(e) => handeldelet(item)}>delet</button>
//                                 </td>
//                             </tr>
//                         )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ValidateForm;
import React, { useEffect, useState } from 'react';

const CrudWithLocal = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [readdata, setReadData] = useState([]);
    const [edititem, setEditItem] = useState(null);

    useEffect(() => {
        const existingUsers = JSON.parse(localStorage.getItem('user')) || []
        setReadData(existingUsers);
    }, [])

    const handelsubmit = (e) => {
        e.preventDefault();
        const formdata = {
            name: name,
            email: email
        }

        const existingUsers = JSON.parse(localStorage.getItem('user')) || []
        if (edititem) {
            const updateuser = existingUsers.map((item) => {
                if (item.name === edititem.name) {
                    return { ...item, name: formdata.name, email: formdata.email }
                } else {
                    return item
                }
            })
            localStorage.setItem('user', JSON.stringify(updateuser))
            setReadData(updateuser);
            setEmail('');
            setName('');

        } else {
            existingUsers.push(formdata)
            localStorage.setItem('user', JSON.stringify(existingUsers))
            setReadData(existingUsers)
            setEmail('');
            setName('');
        }
    }

    const handeldelet = (item) => {
        const filteruser = readdata.filter(user => user.name !== item.name);
        localStorage.setItem('user', JSON.stringify(filteruser))
        setReadData(filteruser)
    }

    const handleedit = (item) => {
        console.log(item, "edit")
        setName(item.name)
        setEmail(item.email)
        setEditItem(item)
    }


    return (
        <div>
            <form action="#" onSubmit={handelsubmit}>
                <div>name</div>
                <input
                    type="text"
                    name="name"
                    id=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>email</div>
                <input
                    type="text"
                    name="email"
                    id=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>add</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        readdata.map((item, index) =>
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button onClick={(e) => handleedit(item)}>edit</button>
                                    <button onClick={(e) => handeldelet(item)}>delet</button>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default CrudWithLocal;