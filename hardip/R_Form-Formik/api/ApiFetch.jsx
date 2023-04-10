import React, { useState } from 'react'
import Header from './Header';
export default function ApiFetch() {
    const [state, setState] = useState([]);

    const GetApi = () => {
        fetch("https://isro.vercel.app/api/spacecrafts")
            .then((Response) => Response.json())
            .then((api) => {
                // console.log(json.spacecrafts[4]);
                setState(api.spacecrafts);
            });
    }
    GetApi();

    return (
        <>
            <Header></Header>
            
            {/* {state.id}
            {state.name} */}
            {state.map((value) => {
                return (
                    <>
                        <p>{value.id}</p>
                        <p>{value.name} </p>
                    </>
                )
            })};

        </>
    )
}







































// import React, { useEffect, useState } from 'react'

// export default function ApiFetch() {
//     const [state, setState] = useState([]);
//     const Apiget = () => {
//         fetch("https://isro.vercel.app/api/spacecrafts")
//             .then((response) => response.json())
//             .then((json) => {
//                 setState(json.spacecrafts);
//             });
//     };

//     useEffect(() => {
//         Apiget();
//     }, []);

//     return (
//         <>
//             {state.map((value) => {
//                 return (
//                     <>
//                         <p>{value.id} </p>
//                         <p>{value.name} </p>
//                     </>
//                 )
//             })}
//         </>
//     )
// }
