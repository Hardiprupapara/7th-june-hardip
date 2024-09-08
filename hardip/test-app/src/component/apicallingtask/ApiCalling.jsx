import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ApiCalling = () => {

    const [data, setData] = useState([])
    const [filterdata, setFilterData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => { setData(res.data); setFilterData(res.data) })
    }, [])

    const filter = (e) => {
        const filterdata = data.filter(item => item.name.toLowerCase().includes(e.target.value));
        setFilterData(filterdata)
    }


    return (
        <div>
            <h2>call data</h2>
            <input type="text" name="" id="" onChange={filter} />
            {
                filterdata.map((item) =>
                    <ul key={item.id}>
                        <li>{item.name}</li>
                    </ul>
                )
            }
        </div>
    );
};

export default ApiCalling;